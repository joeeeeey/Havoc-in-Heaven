class CreateStatetwos < ActiveRecord::Migration
  def change
    create_table :statetwos do |t|

      t.integer :user_id
      t.integer :x
      t.integer :y
      t.integer :layer
      t.integer :exist
       t.integer :time


      t.timestamps
    end
  end
end
