var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });
 
function preload() {

	    game.load.image('wall', 'assets/platform.png');     
}
 

 var wall;
 var cursors;
function create() {

	    game.physics.startSystem(Phaser.Physics.ARCADE);

                  wall = game.add.sprite(200, 200, 'wall');
     
                   game.physics.arcade.enable(wall);

                    wall.body.collideWorldBounds = true;
                   cursors = game.input.keyboard.createCursorKeys();
}
 
function update() {
wall.body.velocity.x = 0;

}
