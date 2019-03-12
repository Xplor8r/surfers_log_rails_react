class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.integer :log_entry_id
      t.integer :user_id
      t.text :content
      t.timestamps
    end
  end
end
