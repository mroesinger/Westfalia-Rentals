// def index
// render json: Van.all, status: :ok
// end

// has_many :trips
// has_many :trips, through: :users

// Rails.application.routes.draw do
//   scope :api do
//     resources :trips, only: [:index, :create]
//     resources :users, only: [:show, :create, :destroy]
//     resources :vans

//     post "/signup", to: "users#create"
//     post "/login", to: "sessions#create"
//     post "/vans", to: "vans#create"
//     get "/vans", to: "vans#index"
//     get "/vans", to: "vans#show"

//   end
//   get "/me", to: "users#show"

//   delete "/logout", to: "sessions#destroy"
// /
