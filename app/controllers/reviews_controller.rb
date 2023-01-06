class ReviewsController < ApplicationController
    def index
        render json: Review.all, status: :ok
    end
    def show
        reviews = Review.find(params[:id])
        render json: reviews
    end

    def create
            review = Review.create!(text: params[:text])
            render json: review, status: :created
    end
    private

    def invalid_record
      render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end
end
end
