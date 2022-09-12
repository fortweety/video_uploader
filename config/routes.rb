Rails.application.routes.draw do
  mount ActionCable.server => "/cable"
  root 'videos#index'

  namespace :api do
    get 'videos', to: 'videos#list'
    post 'video', to: 'videos#create'
    get 'video_categories', to: 'video_categories#list'
  end

end
