Rails.application.routes.draw do

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :todos, only: [:show, :create, :destroy, :update, :index]
    resources :steps, only: [:show, :create, :destroy, :update, :index]
  end

  root to: "static_pages#root"
end
