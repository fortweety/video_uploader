class Api::VideosController < ApplicationController
  def list
    render json: Video.all
  end

  def create
    @video = Video.new(video_params)
    if @video.save
      GenerateVideoThumbnailJob.perform_later(@video.id)
      render json: @video
    else
      render json: { errors: @video.errors }
    end
  end

  private

  def video_params
    params.require(:video).permit(:name, :file, :video_category_id)
  end
end
