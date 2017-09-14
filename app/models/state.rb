class State < ActiveRecord::Base
	belongs_to :user
   def self.changeablethings(userid, x, y, layer)
          self.create(user_id: userid, x: x, y: y, layer: layer, exist:1, time: '')
   end

end
