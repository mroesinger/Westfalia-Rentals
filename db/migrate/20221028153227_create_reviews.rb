class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :text
      t.string :stars
      t.belongs_to :vans, null: false, foreign_key: true
      t.belongs_to :users, null: false, foreign_key: true

      t.timestamps
    end
  end
end
