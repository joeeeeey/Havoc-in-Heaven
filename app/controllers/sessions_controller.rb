    class SessionsController < ApplicationController

      def new
      end

     def create
        user = User.find_by_email(params[:session][:email].downcase)
        if user && user.authenticate(params[:session][:password])
         sign_in user         # NEW LINE
         redirect_to root_url      #  NEW LINE
          # Sign the user in and redirect to the user's show page.
        else
           flash.now[:error] = 'Invalid email/password combination'
          render 'new'
        end
     end

       def destroy
        sign_out
        redirect_to root_url
      end 
      
    end