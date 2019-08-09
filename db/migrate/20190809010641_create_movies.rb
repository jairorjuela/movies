class CreateMovies < ActiveRecord::Migration[5.2]
  def change
    create_table :movies do |t|
      t.string :name
      t.string :description
      t.string :image_url
      t.date   :initial_date
      t.date   :finish_date

      t.timestamps null: false
    end
  end
end
