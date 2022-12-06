Rails.application.routes.draw do
  resources :reviews
  scope :api do
    resources :trips
    resources :users, only: [:show, :create, :destroy]
    resources :vans do
      resources :trips, only: [:index, :show]
    end
  
    post "/signup", to: "users#create"
    post "/login", to: "sessions#create"
    post "/vans", to: "vans#create"
    post "/trips", to: "trips#create"
    get "/trips", to: "trips#show"
    get "/trips", to: "trips#index"
    get "/vans", to: "vans#index"
    get "/vans", to: "vans#show"

  end
  get "/me", to: "users#show"
  delete "/logout", to: "sessions#destroy"
end