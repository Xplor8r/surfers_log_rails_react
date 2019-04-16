class CreateSurfSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :surf_spots do |t|
      t.string :name, null: false
      t.string :slug, null: false
      t.integer :country_id
      
      t.timestamps
    end
  end
end
