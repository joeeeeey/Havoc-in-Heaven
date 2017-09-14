class CreateDownstairs < ActiveRecord::Migration
  def change
    create_table :downstairs do |t|

      t.integer :x
      t.integer :y
      t.integer :layer    
      
      t.timestamps
    end
  end
end
