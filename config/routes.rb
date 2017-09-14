Rails.application.routes.draw do
  resources :redanimals  
  resources :users  
  resources :sessions, only: [:new, :create, :destroy]     # NEW LINE

  root to: 'static_pages#home'
  match '/question',    to: 'static_pages#question' , via: 'get'
  match '/about',   to: 'static_pages#about', via: 'get'
  match '/help',   to: 'static_pages#help', via: 'get'
  match '/game', to: 'static_pages#game', via: 'get'
  match '/test', to: 'static_pages#test', via: 'get'
  match '/signup',  to: 'users#new', via: 'get'
  match '/signin',  to: 'sessions#new', via: 'get'         # NEW LINE
  match '/signout', to: 'sessions#destroy', via: :delete    # NEW LINE
  match '/updateredAnimials',  to: 'static_pages#updateredAnimials', via: 'get'
  match '/updateuser',  to: 'static_pages#updateuser', via: 'get'
  match '/updateuserone',  to: 'static_pages#updateuserone', via: 'get'
  match '/updateusertwo',  to: 'static_pages#updateusertwo', via: 'get'
  match '/savingone',  to: 'static_pages#savingone', via: 'get'
  match '/savingtwo',  to: 'static_pages#savingtwo', via: 'get'
   match '/load',  to: 'static_pages#load', via: 'get'

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
