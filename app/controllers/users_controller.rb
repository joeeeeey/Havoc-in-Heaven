class UsersController < ApplicationController
      def show
        @user = User.find(params[:id])
      end

      def new
      	@user = User.new
      end

     def create
        secure_params = params.require(:user).permit!
        @user = User.new(secure_params)
        if @user.save

   
        change = 1
       @Changes = Changeablething.all
        changes = Changeablething.all.size
       for change in 1..changes do 
          State.changeablethings(@user.id, @Changes[change-1]['x'], @Changes[change-1]['y'], @Changes[change-1]['layer'])
          Statetwo.createversiontwo(@user.id, @Changes[change-1]['x'], @Changes[change-1]['y'], @Changes[change-1]['layer'])
        end

         Userone.createuserone(@user.id)  
         Usertwo.createusertwo(@user.id)



        sign_in @user       
   #     flash[:success] = "Welcome to the Sample App!"    # NEW LINE
        redirect_to @user   


        else
        	render 'new'     # NEW LINE
            # Handle an unsuccessful save.     
        end
      end
      


    end