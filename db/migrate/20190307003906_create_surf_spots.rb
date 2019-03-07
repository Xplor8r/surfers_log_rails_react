class CreateSurfSpots < ActiveRecord::Migration[5.2]
  def change
    create_table :surf_spots do |t|

      t.timestamps
    end
  end
end
