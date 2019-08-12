class Movie < ApplicationRecord

  has_many :reservations
  validates :name, :description,
            :image_url, presence: true
end
