class CreateNotes < ActiveRecord::Migration[5.1]
  def change
    create_table :notes do |t|
      t.string :title
      t.string :doc
      t.integer :category_id
      t.integer :count
    end
  end
end
