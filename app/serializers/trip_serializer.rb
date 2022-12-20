class TripSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :van_id, :start_date, :end_date
  def start_date
    object.start_date.strftime(" %^B %d, %Y")
  end

  def end_date
    object.end_date.strftime("%^B %d, %Y")
  end
  
end
