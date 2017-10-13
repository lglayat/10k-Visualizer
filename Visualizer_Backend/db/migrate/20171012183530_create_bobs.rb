class CreateBobs < ActiveRecord::Migration[5.1]
  def change
    create_table :bobs do |t|
      t.binary :data
    end
  end
end
