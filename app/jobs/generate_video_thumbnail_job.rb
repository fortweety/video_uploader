class GenerateVideoThumbnailJob < ApplicationJob
  queue_as :default

  def perform(video_id)
    GenerateThumbnail.new(video_id).call
  end
end
