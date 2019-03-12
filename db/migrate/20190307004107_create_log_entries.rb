class CreateLogEntries < ActiveRecord::Migration[5.2]
  def change
    create_table :log_entries do |t|
      t.string :date
      t.string :swell_direction
      t.string :swell_size
      t.string :conditions
      t.string :wave_count
      t.string :image_url

      t.integer :country_id, null:false
      t.integer :user_id
      t.integer :surf_spot_id, null: false
      t.string :slug, null: false

      t.integer :posts_count, default: 0
      
      t.timestamps
    end
  end
end
