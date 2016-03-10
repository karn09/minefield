var renderer = new PIXI.CanvasRenderer(window.innerWidth, window.innerHeight);
var bombSound = new Tone.Player({
  "url": 'charge.mp3',
  "autostart": false
}).toMaster();

document.body.appendChild(renderer.view);
// var circle, explode;
var stage = new PIXI.Container();
var container = new PIXI.Container();

stage.addChild(container);

for (var i = 0; i < window.innerWidth / 50; i++) {
  for (var j = 0; j < window.innerHeight / 51; j++) {
    var circle = PIXI.Sprite.fromImage('red-circle.png', false);
    circle.interactive = true;
    circle.x = 50 * i;
    circle.y = 50 * j;
    circle.scale.x = 0.7;
    circle.scale.y = 0.7;
    circle.on('click', circleClicked.bind(circle));
    circle.on('touchstart', circleClicked.bind(circle));
    container.addChild(circle);
  }
}

function circleClicked(event) {
  // console.log(this)
  this.visible = false;
  var explode = PIXI.Sprite.fromImage('explode_29.png', false);
  explode.scale.x = 0.3;
  explode.scale.y = 0.3;
  explode.position.x = event.data.global.x - 40;
  explode.position.y = event.data.global.y - 35;
  container.addChild(explode);
  bombSound.start();
  

  // console.log(event.data.global.x, event.data.global.y);
  // console.log(this)
}
// PIXI.loader.add('circle', 'red-circle.png').load(function ( loader, resources) {
//   circle = new PIXI.Sprite(resources.circle.texture);
//
//   // circle.position.x = window.innerWidth/2;
//   // circle.position.y = window.innerHeight/2;
//
//   circle.scale.x = 1;
//   circle.scale.y = 1;
//
//   circle.interactive = true;
//   circle.on('mousemove', function(event) {
//     this.position.x = event.data.global.x - 35;
//     this.position.y = event.data.global.y - 35;
//   });
//
//   circle.on('click', function(event) {
//     explode.position.x = event.data.global.x - 35;
//     explode.position.y = event.data.global.y - 35;
//     container.addChild(explode);
//   });
//
//   container.addChild(circle);
//
//
// });
//
// PIXI.loader.add('explode', 'explode_29.png').load(function(loader, resources) {
//   explode = new PIXI.Sprite(resources.explode.texture);
//   explode.scale.x = .3;
//   explode.scale.y = .3;
// });


animate();

function animate() {
  requestAnimationFrame(animate);
  // circle.rotation += 0.05;

  renderer.render(stage);
}
