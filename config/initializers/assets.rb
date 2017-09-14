# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'
Rails.application.config.assets.precompile += %w( question.css )
Rails.application.config.assets.precompile += %w( phaser/test.js )
Rails.application.config.assets.precompile += %w( phaser/phaser.min.js )
Rails.application.config.assets.precompile += %w( phaser/game.js )
Rails.application.config.assets.precompile += %w( phaser/movetest.js )
# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in app/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )
