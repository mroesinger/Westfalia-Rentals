class TripSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :van_id, :start_date, :end_date
end
