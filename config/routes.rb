# frozen_string_literal: true

Rails.application.routes.draw do
  resources :ratings
    get 'myratings/:user_id' => 'ratings#my_ratings'
    get 'mycurrentratings/:params' => 'ratings#my_last_rating'

  resources :relationships
    get 'pendingmentors' => 'relationships#pending_mentors'
    get 'mentorids' => 'relationships#mentors_ids'
    get 'mymentors/:id' => 'relationships#my_mentors'
    get 'pendingdevelopers' => 'relationships#pending_developers'
    get 'developerids' => 'relationships#developers_ids'
    get 'mydevelopers/:id' => 'relationships#my_developers'
    post 'creatementor' => 'relationships#create_mentor'
    patch 'updaterelationship/:id' => 'relationships#update_relationship'

  resources :categories

  devise_for :users, controllers: { registrations: 'users/registrations' }

  devise_scope :user do
    get 'user/:params' => 'users/registrations#one_user'
    get 'allmentors' => 'users/registrations#all_mentors'
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '*path', to: 'pages#index', constraints: ->(request) { request.format.html? }
  root to: 'pages#index'
end
