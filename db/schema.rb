# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150310214418) do

  create_table "changeablethings", force: true do |t|
    t.integer  "x"
    t.integer  "y"
    t.integer  "layer"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "downstairs", force: true do |t|
    t.integer  "x"
    t.integer  "y"
    t.integer  "layer"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "microposts_tags", id: false, force: true do |t|
    t.integer "micropost_id"
    t.integer "tag_id"
  end

  create_table "snakeshops", force: true do |t|
    t.integer  "x"
    t.integer  "y"
    t.integer  "layer"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "states", force: true do |t|
    t.integer  "user_id"
    t.integer  "x"
    t.integer  "y"
    t.integer  "layer"
    t.integer  "exist"
    t.integer  "time"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "statetwos", force: true do |t|
    t.integer  "user_id"
    t.integer  "x"
    t.integer  "y"
    t.integer  "layer"
    t.integer  "exist"
    t.integer  "time"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "upstairs", force: true do |t|
    t.integer  "x"
    t.integer  "y"
    t.integer  "layer"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "userones", force: true do |t|
    t.integer  "user_id"
    t.integer  "attack"
    t.integer  "defence"
    t.integer  "health"
    t.integer  "experience"
    t.integer  "nectar"
    t.integer  "level"
    t.integer  "red_key"
    t.integer  "blue_key"
    t.integer  "yellow_key"
    t.integer  "layer"
    t.integer  "x"
    t.integer  "y"
    t.integer  "animationone"
    t.integer  "qilintimes"
    t.integer  "snaketimes"
    t.integer  "maxlayer"
    t.integer  "scrollexist"
    t.integer  "wingexist"
    t.integer  "speed"
    t.integer  "progress"
    t.integer  "statpoints"
    t.integer  "greenkey"
    t.integer  "thirdfloornotice"
    t.integer  "shouxintimes"
    t.integer  "purplekey"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

# Could not dump table "users" because of following NoMethodError
#   undefined method `[]' for nil:NilClass

  create_table "usertwos", force: true do |t|
    t.integer  "user_id"
    t.integer  "attack"
    t.integer  "defence"
    t.integer  "health"
    t.integer  "experience"
    t.integer  "nectar"
    t.integer  "level"
    t.integer  "red_key"
    t.integer  "blue_key"
    t.integer  "yellow_key"
    t.integer  "layer"
    t.integer  "x"
    t.integer  "y"
    t.integer  "animationone"
    t.integer  "qilintimes"
    t.integer  "snaketimes"
    t.integer  "maxlayer"
    t.integer  "scrollexist"
    t.integer  "wingexist"
    t.integer  "speed"
    t.integer  "progress"
    t.integer  "statpoints"
    t.integer  "greenkey"
    t.integer  "thirdfloornotice"
    t.integer  "shouxintimes"
    t.integer  "purplekey"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "walls", force: true do |t|
    t.integer  "x"
    t.integer  "y"
    t.integer  "layer"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end
