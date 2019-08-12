class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.string  :name
      t.integer :phone
      t.integer :identification_card
      t.string  :email

      t.timestamps null: false
    end
    add_reference :reservations, :movie, foreign_key: true
  end
end
