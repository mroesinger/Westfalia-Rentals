class TripsController < ApplicationController
      def index
          if params[:van_id]
            van = Van.find(params[:van_id])
            render json: van.trips, status: :ok
          else
            user=User.find(session[:user_id])
            render json: user.trips
          end
      end

      def show
        trips = Trip.find(params[:id])
        render json: trips
      end

      def create
        user=User.find(session[:user_id])
        trip = user.trips.create!(trip_params)
        render json: trip, status: :created
      end

      private

      def trip_params
        params.permit(:van_id, :start_date, :end_date)
      end
end
