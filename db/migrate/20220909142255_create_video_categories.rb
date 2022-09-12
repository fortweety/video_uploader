class CreateVideoCategories < ActiveRecord::Migration[7.0]
  def up
    create_table :video_categories do |t|
      t.string :name
      t.string :slug

      t.timestamps
    end
  end

  def down
    drop_table :video_categories
  end
end
