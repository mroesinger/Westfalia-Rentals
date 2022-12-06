class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :text, :stars
  has_one :vans
  has_one :users
end
