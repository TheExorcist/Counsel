Rails.application.routes.draw do
  devise_for :users
  get '/logged_in_user' => 'users#logged_in_user'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
