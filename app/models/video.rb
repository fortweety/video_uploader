class Video < ApplicationRecord
  belongs_to :video_category, class_name: "VideoCategory", foreign_key: "video_category_id"
  has_one_attached :file
  has_one_attached :file_thumbnail do |attachable|
    attachable.variant :thumb, resize: "64x64"
    attachable.variant :extra_small, resize: "128x128"
    attachable.variant :small, resize: "256x256"
  end

  validates :name, presence: true

  validates :file,
    content_type: ['video/mp4', 'video/mov'],
    size: { less_than: 200.megabytes, message: 'size should be under 200 megabytes' }

  validates :file_thumbnail,
    content_type: ['image/png', 'image/jpg', 'image/jpeg'],
    size: { less_than: 2.megabytes, message: 'size should be under 2 megabytes' }

end
