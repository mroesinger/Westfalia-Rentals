class VansController < ApplicationController
    def index
        render json: Van.all, status: :ok
    end
    def show
        vans = Van.find(params[:id])
        render json: vans
    end

    def create
            van = Van.create!(owner: params[:owner], year_make_model: params[:year_make_model], description: params[:description], transmission: params[:transmission], roof: params[:roof], equipment: params[:equipment], dogs: params[:dogs], location: params[:location], owner: params[:owner], price: params[:owner], image: params[:image])
            render json: van, status: :created


    end
    private

    def invalid_record
      render json: { errors: e.record.errors.full_messages }, status: :unprocessable_entity
    end
end
