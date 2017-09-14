class StaticPagesController < ApplicationController
  def home
  end

 def help
      render :layout => "helplayout"    
 end
  def question
    render :layout => "questionLayout"    
  end

  def about 
     
  end

    def game
       
      
      if signed_in?
    	render :layout => "gameLayout"      
     else 
     redirect_to signin_path
     end
  end

def load
    @user = current_user.to_json
    @walls = Wall.all.to_json
    @upstairs = Upstair.all.to_json
    @downstairs = Downstair.all.to_json
    @snakeshops = Snakeshop.all.to_json
    @Changeablethings = Changeablething.all.to_json
    @states = State.all.to_json
    @statetwos = Statetwo.all.to_json
    @userones = Userone.all.to_json
    @usertwos = Usertwo.all.to_json
end

def updateuserone

     params.permit!
      @result = params[:result]
     @id = params[:id]  
   ActiveRecord::Base.connection.exec_query("UPDATE userones SET #{@result[:kind]} = #{@result[:value]} WHERE user_id = #{@id}")
   
     return false
end

def updateusertwo

     params.permit!
      @result = params[:result]
     @id = params[:id]  
   ActiveRecord::Base.connection.exec_query("UPDATE usertwos SET #{@result[:kind]} = #{@result[:value]} WHERE user_id = #{@id}")
   
     return false
end




def savingone
   params.permit!
   @exist = params[:exist]
   @time = params[:Time]
   @id = params[:id]  
   @x = params[:x]
   @y = params[:y]    
   @layer = params[:layer]
   ActiveRecord::Base.connection.exec_query("UPDATE states SET 'time' = #{@time}, 'exist' = #{@exist} WHERE user_id = #{@id} AND x = #{@x} AND y = #{@y}")
   
 return false

end

def savingtwo
   params.permit!
   @exist = params[:exist]
   @time = params[:Time]
   @id = params[:id]  
   @x = params[:x]
   @y = params[:y]    
   @layer = params[:layer]
   ActiveRecord::Base.connection.exec_query("UPDATE statetwos SET 'time' = #{@time}, 'exist' = #{@exist} WHERE user_id = #{@id} AND x = #{@x} AND y = #{@y}")
   
end







     def test
    	render :layout => "gameLayout"
  end
end
