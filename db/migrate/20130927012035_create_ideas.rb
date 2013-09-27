class CreateIdeas < ActiveRecord::Migration
  def change
    create_table :ideas do |t|
      t.integer :owner
      t.string :title
      t.string :image
      t.text :text
      t.string :category
      t.string :tags

      t.timestamps
    end
  end
end
