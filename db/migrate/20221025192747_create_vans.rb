class CreateVans < ActiveRecord::Migration[7.0]
  def change
    create_table :vans do |t|
      t.string :year_make_model
      t.string :description
      t.string :transmission
      t.string :roof
      t.string :equipment
      t.string :dogs
      t.string :location
      t.string :owner
      t.integer :price
      t.string :image

      t.timestamps
    end
  end
end
