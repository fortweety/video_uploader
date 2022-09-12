class GenerateThumbnail
  include Rails.application.routes.url_helpers

  def initialize(video_id)
    @video = Video.find_by(id: video_id)
  end

  def call
    generate_thumbnail
    ActionCable.server.broadcast("videos_channel", {
      id: @video.id,
      file_thumbnail: rails_blob_path(@video.file_thumbnail.variant(:small), only_path: true)
    })
  end

  private

  def generate_thumbnail
    require 'streamio-ffmpeg'

    @video.file.open(tmpdir: "/tmp") do |f|
      movie = FFMPEG::Movie.new(f.path)
      file_name = "#{@video.name}.jpg"
      screen = movie.screenshot(file_name)
      @video.file_thumbnail.attach(io: File.open(screen.path), filename: file_name)
    end
  end
end