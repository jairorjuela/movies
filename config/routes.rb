Rails.application.routes.draw do
  root to: 'films#index'
  namespace :v1, defaults: { format: 'json' } do
    resources :movies, only: [:index, :create, :update, :destroy]
    resources :reservations, only: [:index, :create, :update, :destroy]
  end
end
