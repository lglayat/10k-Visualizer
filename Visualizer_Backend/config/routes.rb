Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api do
    namespace :v1 do
      resources :users, :notes, :bobs
      post '/login', to: 'auth#create'
      get '/notes', to: 'notes#index'
      post '/signup', to: 'users#create'
    end
  end
end
