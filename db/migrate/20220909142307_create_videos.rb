class CreateVideos < ActiveRecord::Migration[7.0]
  def change
    create_table :videos do |t|
      t.string :name
      t.integer :video_category_id

      t.timestamps
    end
  end
end
