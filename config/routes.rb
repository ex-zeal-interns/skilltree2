Rails.application.routes.draw do
  resources :ratings
  resources :categories
  devise_for :users, controllers: { registrations: 'users/registrations' }
  devise_scope :user do
      get "user/:id" => "users/registrations#oneUser"
  end

  get "myratings/:user_id" => "ratings#myRatings"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '*path', to: 'pages#index', constraints: ->(request){ request.format.html? }
  root to: "pages#index"
end
