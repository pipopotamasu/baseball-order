Rails.application.routes.draw do
  root to: 'home#index'
  get 'home/index'
  resources :members do
    collection do
      get 'all'
    end
  end

end
