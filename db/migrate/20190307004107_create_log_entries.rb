class CreateLogEntries < ActiveRecord::Migration[5.2]
  def change
    create_table :log_entries do |t|
      t.integer :date
      t.integer :time
      t.string :swell_1_direction
      t.integer :swell_1_size
      t.string :swell_2_direction
      t.integer :swell_2_size
      t.string :swell_3_direction
      t.integer :swell_3_size
      t.integer :wind_speed
      t.string :wind_direction
      t.integer :wave_count
      t.string :image_url
      t.integer :country_id, null:false
      t.integer :user_id
      t.integer :surf_spot_id, null: false
      t.integer :posts_count, default: 0
      
      t.timestamps
    end
  end
end
