class CreateIdeas < ActiveRecord::Migration
  def change
    create_table :ideas do |t|
      t.integer :user_id
      t.string :title
      t.string :image
      t.text :text
      t.string :category
      t.string :tags

      t.timestamps
    end
    add_index :ideas, [:user_id, :created_at]
  end
end
