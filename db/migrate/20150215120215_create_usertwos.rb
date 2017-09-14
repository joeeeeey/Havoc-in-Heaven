class CreateUsertwos < ActiveRecord::Migration
  def change
    create_table :usertwos do |t|

      t.integer :user_id 
      t.integer :attack
      t.integer :defence
      t.integer :health
      t.integer :experience
      t.integer :nectar
      t.integer :level
      t.integer :red_key
      t.integer :blue_key
      t.integer :yellow_key
      t.integer :layer
      t.integer :x
      t.integer :y
      t.integer :animationone
      t.integer :qilintimes
      t.integer :snaketimes
      t.integer :maxlayer
      t.integer :scrollexist
      t.integer :wingexist
      t.integer :speed
      t.integer :progress
      t.integer :statpoints
      t.integer :greenkey  
      t.integer :thirdfloornotice
      t.integer :shouxintimes       
      t.integer :purplekey 
      t.timestamps
    end
  end
end
