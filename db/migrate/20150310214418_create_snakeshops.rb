class CreateSnakeshops < ActiveRecord::Migration
  def change
    create_table :snakeshops do |t|

      t.integer :x
      t.integer :y
      t.integer :layer    

      t.timestamps
    end
  end
end
