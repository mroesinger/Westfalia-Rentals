class ApplicationController < ActionController::API
  include ActionController::Cookies
rescue_from ActiveRecord::RecordInvalid, with: :invalid
around_action :set_time_zone
private

def set_time_zone
  old_time_zone = Time.zone
  Time.zone = 'America/Los_Angeles' # current_user.time_zone
  yield
ensure
  Time.zone = old_time_zone
end

def invalid(e)
  render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
end
end