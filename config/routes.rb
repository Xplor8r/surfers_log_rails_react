Rails.application.routes.draw do
  scope(:path => '/RailsApi') do
    get "/login", to: "sessions#new"
    post '/sessions/create', to: 'sessions#create'
    delete "/logout", to: "sessions#destroy"
    resources :users
    resources :log_entries, path: :log_entries do
      collection do
        get "countries", to: "countries#list"
        get "surf_spots", to: "surf_spots#list"
        get "country/:id", to: "countries#index", as: :country
        get "surf_spot/:id", to: "surf_spots#index", as: :surf_spot
      end
      resources :posts, path: :posts
    end
    root to: "log_entries#index"
    end
end
