class Van < ApplicationRecord
    has_many :trips
    has_many :users, through: :trips
    # validates :owner, uniqueness: true, message: "must be a silly willy"
    # validates :year_make_model, presence: true , message: "must be a silly willy"
    # validates :description, uniqueness: true
    # validates :transmission, presence: true
    # validates :roof, presence: true
    # validates :equipment, presence: true
    # validates :dogs, presence: true
    # validates :location, presence: true
    # validates :price, presence: true
    # validates :image, presence: true

end
