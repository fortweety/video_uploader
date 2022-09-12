class VideoSerializer < ActiveModel::Serializer
  include Rails.application.routes.url_helpers
  attributes :id, :name, :file, :file_thumbnail
  belongs_to :video_category, serializer: VideoCategorySerializer

  def file
    rails_blob_path(object.file, only_path: true) if object.file.attached?
  end

  def file_thumbnail
    rails_blob_path(object.file_thumbnail.variant(:small), only_path: true) if object.file_thumbnail.attached?
  end
end