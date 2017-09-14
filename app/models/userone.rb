class Userone < ActiveRecord::Base
    def self.createuserone(userid)
          self.create(user_id: userid, attack: 35, defence: 30, health: 200, experience: 0, nectar: 0, level: 1, 
          	red_key: 0, blue_key: 0, yellow_key: 0, x: 470, y: 720, layer: 1, animationone: 1,qilintimes: 0, maxlayer: 1,
          	scrollexist: 0, wingexist: 0, speed: 0, progress: 0, snaketimes: 0, statpoints: 0, greenkey: 0, 
          	thirdfloornotice: 0,shouxintimes:0 ,purplekey: 0)  
   end

end      



 