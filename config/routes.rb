Rails.application.routes.draw do
  # get 'home/index'
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  root 'home#index'
  get '/profile', to: 'profile#index'
  get '/archives', to: 'archives#index'
  get '/skills', to: "skills#index"
  resources :histories, only: [:index]
end
