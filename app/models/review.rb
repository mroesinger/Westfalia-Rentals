class Review < ApplicationRecord
  belongs_to :vans
  belongs_to :users
end
