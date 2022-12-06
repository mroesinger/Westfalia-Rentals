class VanSerializer < ActiveModel::Serializer
  attributes :id, :year_make_model, :description, :transmission, :roof, :equipment, :dogs, :location, :owner, :price, :image
end
