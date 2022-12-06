class UsersController < ApplicationController
  wrap_parameters format: []
  rescue_from ActiveRecord::RecordInvalid, with: :invalid_record
    def create
        user = User.create!(user_params)
        session[:user_id] = user.id
        render json: user, status: :created
    end

      def show
        user = User.find_by(id: session[:user_id])
        if user
          puts session[:user_id]

          render json: user
        else
          render json: { error: "Not authorized" }, status: :unauthorized
        end
      end
    
      private

      def invalid_record
        render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
      end
    
      def user_params
        params.permit(:username, :password, :password_confirmation)
      end
end
