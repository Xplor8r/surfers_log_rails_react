class CreateLogEntries < ActiveRecord::Migration[5.2]
  def change
    create_table :log_entries do |t|
      t.integer :brewery_state_id
      t.integer :user_id
      t.string :surf_spot, null: false
      t.string :slug, null: false
      t.integer :comments_count, default: 0
      
      t.timestamps
    end
  end
end
