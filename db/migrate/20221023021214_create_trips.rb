class CreateTrips < ActiveRecord::Migration[7.0]
  def change
    create_table :trips do |t|
      t.belongs_to :user
      t.belongs_to :van
      t.datetime :start_date
      t.datetime :end_date

      t.timestamps
    end
  end
end
