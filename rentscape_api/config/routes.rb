Rails.application.routes.draw do
  default_url_options :host => "http://127.0.0.1:4000"
  resources :properties
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
