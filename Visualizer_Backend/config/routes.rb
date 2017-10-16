Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :users
      get '/categories/:id', to: 'categories#show'
      get '/categories', to: 'categories#index'
      post '/login', to: 'auth#create'
      get '/notes/:id', to: 'notes#show'
      post '/notes/create', to: 'notes#create'
      get '/notes', to: 'notes#index'
      post '/signup', to: 'users#create'
    end
  end
end
