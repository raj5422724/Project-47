// Variables for Player 1
var Player1;
var Player1_win,Player1_win_still;
var Player1_LS_lose_still;
    // Left Side
    var Player1_LS_anim_norm;
    var Player1_LS_anim_move_right,Player1_LS_anim_move_left;
    var Player1_LS_anim_jump,Player1_LS_anim_crouch;
    var Player1_LS_anim_punch,Player1_LS_anim_kick;
    var Player2_LS_block_still;
    // Right Side
    var Player1_RS_anim_norm;
    var Player1_RS_anim_move_right,Player1_RS_anim_move_left;
    var Player1_RS_anim_jump,Player1_RS_anim_crouch;
    var Player1_RS_anim_punch,Player1_RS_anim_kick;
    var Player2_RS_block_still;

// Variables for Player 2
var Player2;
var Player2_win;
var Player2_LS_lose_still;
    // Left Side
    var Player2_LS_anim_norm;
    var Player2_LS_anim_move_right,Player2_LS_anim_move_left;
    var Player2_LS_anim_jump,Player2_LS_anim_crouch;
    var Player2_LS_anim_punch,Player2_LS_anim_kick;
    var Player2_LS_block_still;
    // Right Side
    var Player2_RS_anim_norm;
    var Player2_RS_anim_move_right,Player2_RS_anim_move_left;
    var Player2_RS_anim_jump,Player2_RS_anim_crouch;
    var Player2_RS_anim_punch,Player2_RS_anim_kick;
    var Player2_RS_block_still;

// Buttons for playing in mobile
var Lbtn,Rbtn,UPbtn,DWbtn;
var UImg,RImg,LImg,DImg;

// Variable for Ground
var invisibleGround;

// Health
var health1;
var health2;
var healthBar1,healthBlock1;
var healthLevel1;
var healthBar2;
var healthLevel2,healthBlock2;

var bmode1 = 0;
var bmode2 = 0;

// Gamestates
var gameState;
var play;
var redWin;

function preload() {

  // Background Image

  BG = loadImage("arena.png");

  // Player 1 Images for Left Side

  Player1_LS_anim_norm = loadAnimation("Images/Player1/Left/Norm/0.png","Images/Player1/Left/Norm/1.png",
  "Images/Player1/Left/Norm/2.png","Images/Player1/Left/Norm/3.png","Images/Player1/Left/Norm/4.png",
  "Images/Player1/Left/Norm/5.png","Images/Player1/Left/Norm/6.png","Images/Player1/Left/Norm/7.png",
  "Images/Player1/Left/Norm/8.png","Images/Player1/Left/Norm/9.png");

  Player1_LS_anim_move_right = loadAnimation("Images/Player1/Left/Move_right/0.png",
  "Images/Player1/Left/Move_right/1.png","Images/Player1/Left/Move_right/2.png",
  "Images/Player1/Left/Move_right/3.png","Images/Player1/Left/Move_right/4.png",
  "Images/Player1/Left/Move_right/5.png","Images/Player1/Left/Move_right/6.png",
  "Images/Player1/Left/Move_right/7.png","Images/Player1/Left/Move_right/8.png");

  Player1_LS_anim_move_left = loadAnimation("Images/Player1/Left/Move_left/0.png",
  "Images/Player1/Left/Move_left/1.png","Images/Player1/Left/Move_left/2.png",
  "Images/Player1/Left/Move_left/3.png","Images/Player1/Left/Move_left/4.png",
  "Images/Player1/Left/Move_left/5.png","Images/Player1/Left/Move_left/6.png",
  "Images/Player1/Left/Move_left/7.png","Images/Player1/Left/Move_left/8.png");

  Player1_LS_anim_jump = loadAnimation("Images/Player1/Left/Jump/0.png",
  "Images/Player1/Left/Jump/1.png","Images/Player1/Left/Jump/2.png","Images/Player1/Left/Jump/3.png",
  "Images/Player1/Left/Jump/4.png");

  Player1_LS_anim_punch = loadAnimation("Images/Player1/Left/Punch/0.png","Images/Player1/Left/Punch/1.png",
  "Images/Player1/Left/Punch/2.png","Images/Player1/Left/Punch/3.png","Images/Player1/Left/Punch/4.png");

  Player1_LS_anim_kick = loadAnimation("Images/Player1/Left/Kick/0.png","Images/Player1/Left/Kick/1.png",
  "Images/Player1/Left/Kick/2.png","Images/Player1/Left/Kick/3.png","Images/Player1/Left/Kick/4.png",
  "Images/Player1/Left/Kick/5.png");

  Player1_LS_anim_crouch = loadAnimation("Images/Player1/Left/Crouch/0.png","Images/Player1/Left/Crouch/1.png",
  "Images/Player1/Left/Crouch/2.png");

  Player1_LS_crouch_still = loadAnimation("Images/Player1/Left/Crouch/2.png");

  Player1_LS_block_still = loadAnimation("Images/Block/Player1/Left/2.png");

  Player1_LS_lose_still = loadAnimation("Images/Lose/Player1/Left/8.png");

  // Player 1 Images for Right Side

  Player1_RS_anim_norm = loadAnimation("Images/Player1/Right/Norm/0.png","Images/Player1/Right/Norm/1.png",
  "Images/Player1/Right/Norm/2.png","Images/Player1/Right/Norm/3.png","Images/Player1/Right/Norm/4.png",
  "Images/Player1/Right/Norm/5.png","Images/Player1/Right/Norm/6.png","Images/Player1/Right/Norm/7.png",
  "Images/Player1/Right/Norm/8.png");

  Player1_RS_anim_move_right = loadAnimation("Images/Player1/Right/Move_right/0.png",
  "Images/Player1/Right/Move_right/1.png","Images/Player1/Right/Move_right/2.png",
  "Images/Player1/Right/Move_right/3.png","Images/Player1/Right/Move_right/4.png",
  "Images/Player1/Right/Move_right/5.png","Images/Player1/Right/Move_right/6.png",
  "Images/Player1/Right/Move_right/7.png","Images/Player1/Right/Move_right/8.png");

  Player1_RS_anim_move_left = loadAnimation("Images/Player1/Right/Move_left/0.png",
  "Images/Player1/Right/Move_left/1.png","Images/Player1/Right/Move_left/2.png",
  "Images/Player1/Right/Move_left/2.png","Images/Player1/Right/Move_left/4.png",
  "Images/Player1/Right/Move_left/5.png","Images/Player1/Right/Move_left/6.png",
  "Images/Player1/Right/Move_left/7.png","Images/Player1/Right/Move_left/8.png");

  Player1_RS_anim_jump = loadAnimation("Images/Player1/Right/Jump/0.png",
  "Images/Player1/Right/Jump/1.png","Images/Player1/Right/Jump/2.png","Images/Player1/Right/Jump/3.png",
  "Images/Player1/Right/Jump/4.png");

  Player1_RS_anim_punch = loadAnimation("Images/Player1/Right/Punch/0.png","Images/Player1/Right/Punch/1.png",
  "Images/Player1/Right/Punch/2.png","Images/Player1/Right/Punch/3.png","Images/Player1/Right/Punch/4.png");

  Player1_RS_anim_kick = loadAnimation("Images/Player1/Right/Kick/0.png","Images/Player1/Right/Kick/1.png",
  "Images/Player1/Right/Kick/2.png","Images/Player1/Right/Kick/3.png","Images/Player1/Right/Kick/4.png",
  "Images/Player1/Right/Kick/5.png");

  Player1_RS_anim_crouch = loadAnimation("Images/Player1/Right/Crouch/0.png","Images/Player1/Right/Crouch/1.png",
  "Images/Player1/Right/Crouch/2.png");

  Player1_RS_crouch_still = loadAnimation("Images/Player1/Right/Crouch/2.png");

  Player1_RS_lose_still = loadAnimation("Images/Lose/Player1/Right/8.png");

  Player1_RS_block_still = loadAnimation("Images/Block/Player1/Right/2.png");

  Player1_win = loadAnimation("Images/Win/Player1/0.png","Images/Win/Player1/1.png","Images/Win/Player1/2.png",
  "Images/Win/Player1/3.png","Images/Win/Player1/4.png","Images/Win/Player1/5.png","Images/Win/Player1/6.png",
  "Images/Win/Player1/7.png","Images/Win/Player1/8.png","Images/Win/Player1/9.png");

  Player1_win_still = loadAnimation("Images/Win/Player1/9.png");


  // Player 2 Images for Left Side

  Player2_LS_anim_norm = loadAnimation("Images/Player2/Left/Norm/0.png","Images/Player2/Left/Norm/1.png",
  "Images/Player2/Left/Norm/2.png","Images/Player2/Left/Norm/3.png","Images/Player2/Left/Norm/4.png",
  "Images/Player2/Left/Norm/5.png","Images/Player2/Left/Norm/6.png","Images/Player2/Left/Norm/7.png",
  "Images/Player2/Left/Norm/8.png");

  Player2_LS_anim_move_right = loadAnimation("Images/Player2/Left/Move_right/0.png",
  "Images/Player2/Left/Move_right/1.png","Images/Player2/Left/Move_right/2.png",
  "Images/Player2/Left/Move_right/3.png","Images/Player2/Left/Move_right/4.png",
  "Images/Player2/Left/Move_right/5.png","Images/Player2/Left/Move_right/6.png",
  "Images/Player2/Left/Move_right/7.png","Images/Player2/Left/Move_right/8.png");

  Player2_LS_anim_move_left = loadAnimation("Images/Player2/Left/Move_left/0.png",
  "Images/Player2/Left/Move_left/1.png","Images/Player2/Left/Move_left/2.png",
  "Images/Player2/Left/Move_left/3.png","Images/Player2/Left/Move_left/4.png",
  "Images/Player2/Left/Move_left/5.png","Images/Player2/Left/Move_left/6.png",
  "Images/Player2/Left/Move_left/7.png","Images/Player2/Left/Move_left/8.png");

  Player2_LS_anim_jump = loadAnimation("Images/Player2/Left/Jump/0.png",
  "Images/Player2/Left/Jump/1.png","Images/Player2/Left/Jump/2.png","Images/Player2/Left/Jump/3.png",
  "Images/Player2/Left/Jump/4.png");

  Player2_LS_anim_punch = loadAnimation("Images/Player2/Left/Punch/0.png","Images/Player2/Left/Punch/1.png",
  "Images/Player2/Left/Punch/2.png","Images/Player2/Left/Punch/3.png","Images/Player2/Left/Punch/4.png");

  Player2_LS_anim_kick = loadAnimation("Images/Player2/Left/Kick/0.png","Images/Player2/Left/Kick/1.png",
  "Images/Player2/Left/Kick/2.png","Images/Player2/Left/Kick/3.png","Images/Player2/Left/Kick/4.png",
  "Images/Player2/Left/Kick/5.png");

  Player2_LS_anim_crouch = loadAnimation("Images/Player2/Left/Crouch/0.png","Images/Player2/Left/Crouch/1.png",
  "Images/Player2/Left/Crouch/2.png");

  Player2_LS_crouch_still = loadAnimation("Images/Player2/Left/Crouch/2.png");

  Player2_LS_block_still = loadAnimation("Images/Block/Player2/Left/2.png");

  Player2_LS_lose_still = loadAnimation("Images/Lose/Player2/Left/7.png");

  // Player 2 Images for Right Side

  Player2_RS_anim_norm = loadAnimation("Images/Player2/Right/Norm/0.png","Images/Player2/Right/Norm/1.png",
  "Images/Player2/Right/Norm/2.png","Images/Player2/Right/Norm/3.png","Images/Player2/Right/Norm/4.png",
  "Images/Player2/Right/Norm/5.png","Images/Player2/Right/Norm/6.png","Images/Player2/Right/Norm/7.png",
  "Images/Player2/Right/Norm/8.png");

  Player2_RS_anim_move_right = loadAnimation("Images/Player2/Right/Move_right/0.png",
  "Images/Player2/Right/Move_right/1.png","Images/Player2/Right/Move_right/2.png",
  "Images/Player2/Right/Move_right/3.png","Images/Player2/Right/Move_right/4.png",
  "Images/Player2/Right/Move_right/5.png","Images/Player2/Right/Move_right/6.png",
  "Images/Player2/Right/Move_right/7.png","Images/Player2/Right/Move_right/8.png");

  Player2_RS_anim_move_left = loadAnimation("Images/Player2/Right/Move_left/0.png",
  "Images/Player2/Right/Move_left/1.png","Images/Player2/Right/Move_left/2.png",
  "Images/Player2/Right/Move_left/2.png","Images/Player2/Right/Move_left/4.png",
  "Images/Player2/Right/Move_left/5.png","Images/Player2/Right/Move_left/6.png",
  "Images/Player2/Right/Move_left/7.png","Images/Player2/Right/Move_left/8.png");

  Player2_RS_anim_jump = loadAnimation("Images/Player2/Right/Jump/0.png",
  "Images/Player2/Right/Jump/1.png","Images/Player2/Right/Jump/2.png","Images/Player2/Right/Jump/3.png",
  "Images/Player2/Right/Jump/4.png");

  Player2_RS_anim_punch = loadAnimation("Images/Player2/Right/Punch/0.png","Images/Player2/Right/Punch/1.png",
  "Images/Player2/Right/Punch/2.png","Images/Player2/Right/Punch/3.png","Images/Player2/Right/Punch/4.png");

  Player2_RS_anim_kick = loadAnimation("Images/Player2/Right/Kick/0.png","Images/Player2/Right/Kick/1.png",
  "Images/Player2/Right/Kick/2.png","Images/Player2/Right/Kick/3.png","Images/Player2/Right/Kick/4.png",
  "Images/Player2/Right/Kick/5.png");

  Player2_RS_anim_crouch = loadAnimation("Images/Player2/Right/Crouch/0.png","Images/Player2/Right/Crouch/1.png",
  "Images/Player2/Right/Crouch/2.png");

  Player2_RS_crouch_still = loadAnimation("Images/Player2/Right/Crouch/2.png");

  Player2_RS_block_still = loadAnimation("Images/Block/Player2/Right/2.png");

  Player2_RS_lose_still = loadAnimation("Images/Lose/Player2/Right/7.png");

  Player2_win = loadAnimation("Images/Win/Player2/0.png","Images/Win/Player2/1.png","Images/Win/Player2/2.png",
  "Images/Win/Player2/3.png","Images/Win/Player2/4.png","Images/Win/Player2/5.png","Images/Win/Player2/6.png",
  "Images/Win/Player2/7.png","Images/Win/Player2/8.png","Images/Win/Player2/9.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  frameRate(50);
  gameState = "play";

  // The Ground for making the player stand
  invisibleGround = createSprite(windowWidth/2,windowHeight-40,windowWidth+50,15);
  invisibleGround.visible = false;

  // Player 1
  Player1 = createSprite(400, windowHeight-40, 50, 50);
  Player1.addAnimation("win1",Player1_win);
  Player1.addAnimation("win1_still",Player1_win_still);
      // Left Side
      Player1.addAnimation("Normal_LS_1",Player1_LS_anim_norm);
      Player1.addAnimation("right_LS_1",Player1_LS_anim_move_right);
      Player1.addAnimation("left_LS_1",Player1_LS_anim_move_left);
      Player1.addAnimation("jump_LS_1",Player1_LS_anim_jump);
      Player1.addAnimation("punch_LS_1",Player1_LS_anim_punch);
      Player1.addAnimation("kick_LS_1",Player1_LS_anim_kick);
      Player1.addAnimation("crouch_LS_1",Player1_LS_anim_crouch);
      Player1.addAnimation("crouch_still_LS_1",Player1_LS_crouch_still);
      Player1.addAnimation("block_LS_still_1",Player1_LS_block_still);
      Player1.addAnimation("lose_LS_still_1",Player1_LS_lose_still);
      // Right Side
      Player1.addAnimation("Normal_RS_1",Player1_RS_anim_norm);
      Player1.addAnimation("right_RS_1",Player1_RS_anim_move_right);
      Player1.addAnimation("left_RS_1",Player1_RS_anim_move_left);
      Player1.addAnimation("jump_RS_1",Player1_RS_anim_jump);
      Player1.addAnimation("punch_RS_1",Player1_RS_anim_punch);
      Player1.addAnimation("kick_RS_1",Player1_RS_anim_kick);
      Player1.addAnimation("crouch_RS_1",Player1_RS_anim_crouch);
      Player1.addAnimation("crouch_still_RS_1",Player1_RS_crouch_still);
      Player1.addAnimation("block_RS_still_1",Player1_RS_block_still);
      Player1.addAnimation("lose_RS_still_1",Player1_RS_lose_still);
  Player1.scale = 2;

  // Player 2
  Player2 = createSprite(windowWidth-400, windowHeight-40, 50, 50);
  Player2.addAnimation("win2",Player2_win);
      // Left Side
      Player2.addAnimation("Normal_LS_2",Player2_LS_anim_norm);
      Player2.addAnimation("right_LS_2",Player2_LS_anim_move_right);
      Player2.addAnimation("left_LS_2",Player2_LS_anim_move_left);
      Player2.addAnimation("jump_LS_2",Player2_LS_anim_jump);
      Player2.addAnimation("punch_LS_2",Player2_LS_anim_punch);
      Player2.addAnimation("kick_LS_2",Player2_LS_anim_kick);
      Player2.addAnimation("crouch_LS_2",Player2_LS_anim_crouch);
      Player2.addAnimation("crouch_still_LS_2",Player2_LS_crouch_still);
      Player2.addAnimation("block_LS_still_2",Player2_LS_block_still);
      Player2.addAnimation("lose_LS_still_2",Player2_LS_lose_still);
      // Right Side
      Player2.addAnimation("Normal_RS_2",Player2_RS_anim_norm);
      Player2.addAnimation("right_RS_2",Player2_RS_anim_move_right);
      Player2.addAnimation("left_RS_2",Player2_RS_anim_move_left);
      Player2.addAnimation("jump_RS_2",Player2_RS_anim_jump);
      Player2.addAnimation("punch_RS_2",Player2_RS_anim_punch);
      Player2.addAnimation("kick_RS_2",Player2_RS_anim_kick);
      Player2.addAnimation("crouch_RS_2",Player2_RS_anim_crouch);
      Player2.addAnimation("crouch_still_RS_2",Player2_RS_crouch_still);
      Player2.addAnimation("block_RS_still_2",Player2_RS_block_still);
      Player2.addAnimation("lose_RS_still_2",Player2_RS_lose_still);
  Player2.scale = 2;

  // Health

  healthBar1 = createSprite(175,100,300,25);
  healthBar1.shapeColor = "white";

  healthLevel1 = createSprite(175,100,290,15);
  healthLevel1.shapeColor = "red";

  healthBlock1 = createSprite(19,100,40,45);
  healthBlock1.shapeColor = "black";
  
  healthBar2 = createSprite(windowWidth-175,100,300,25);
  healthBar2.shapeColor = "white";

  healthLevel2 = createSprite(windowWidth-175,100,290,15);
  healthLevel2.shapeColor = "red";

  healthBlock2 = createSprite(windowWidth-19,100,40,45);
  healthBlock2.shapeColor = "black";

  healthBlock1.depth = healthLevel2.depth;
  healthLevel2.depth -= 1;

  // Buttons 
  Lbtn = createButton('');
  Lbtn.position(50,windowHeight-150);
  Lbtn.style('width','60px');
  Lbtn.style('height','60px');
  Lbtn.style('background','orangered');
  Lbtn.style('border-radius','20px');
  Lbtn.style('color','yellow');
  Lbtn.style('font-size','20px');

  Rbtn = createButton('');
  Rbtn.position(150,windowHeight-150);
  Rbtn.style('width','60px');
  Rbtn.style('height','60px');
  Rbtn.style('background','orangered');
  Rbtn.style('border-radius','20px');
  Rbtn.style('color','yellow');
  Rbtn.style('font-size','20px');
  
  UPbtn = createButton('');
  UPbtn.position(100,windowHeight-200);
  UPbtn.style('width','60px');
  UPbtn.style('height','60px');
  UPbtn.style('background','orangered');
  UPbtn.style('border-radius','20px');
  UPbtn.style('color','yellow');
  UPbtn.style('font-size','20px');

  DWbtn = createButton('');
  DWbtn.position(100,windowHeight-100);
  DWbtn.style('width','60px');
  DWbtn.style('height','60px');
  DWbtn.style('background','orangered');
  DWbtn.style('border-radius','20px');
  DWbtn.style('color','yellow');
  DWbtn.style('font-size','20px');

  // restart btn
  restart = createButton('RESTART');
  restart.position(windowWidth/2-60,windowHeight/2-100);
  restart.style('width','120px');
  restart.style('height','60px');
  restart.style('border-radius','20px');
  restart.style('color','black');
  restart.style('font-size','20px');
  restart.hide();
  restart.mousePressed(() => {
    gameState = "play";
    healthLevel1.x = 175;
    healthLevel2.x = windowWidth-175;
    Player1.x = 400;
    Player2.x =windowWidth-400;
  })

  // check box
  select = createSelect();
  select.position(25, 25);
  select.style('width', '125px');
  select.style('height', '40px');
  select.option('ON');
  select.option('OFF');
  select.changed(() => {
    let val = select.value();
    if(val === "ON") {
      Lbtn.show();
      Rbtn.show();
      UPbtn.show();
      DWbtn.show();
    }else {
      Lbtn.hide();
      Rbtn.hide();
      UPbtn.hide();
      DWbtn.hide();
    }
  });
}

function draw() {
  background(BG);  

  // Gravity
  Player1.velocityY += 0.8;
  Player2.velocityY += 0.8;

  if(gameState === "play") {

    frameRate(50);
    restart.hide();
  
  /* -------------------------------------------------------------------- */

  // Function for right movement of player 1
  if(keyDown("D")){
    Player1.x += 6;
    if(Player1.x<Player2.x) {
      Player1.changeAnimation("right_LS_1",Player1_LS_anim_move_right);
    }else if(Player1.x>Player2.x) {
      Player1.changeAnimation("right_RS_1",Player1_RS_anim_move_right);
    }
  }else {
    if(Player1.x<Player2.x) {
      Player1.changeAnimation("Normal_LS_1",Player1_LS_anim_norm);
    }else if(Player1.x>Player2.x) {
      Player1.changeAnimation("Normal_RS_1",Player1_RS_anim_norm);
    }
  }

  Rbtn.mousePressed(() => {
      Player1.x += 6;
      if(Player1.x<Player2.x) {
        Player1.changeAnimation("right_LS_1",Player1_LS_anim_move_right);
      }else if(Player1.x>Player2.x) {
        Player1.changeAnimation("right_RS_1",Player1_RS_anim_move_right);
      }
  })

  // Function for left movement of player 1
  if(keyDown("A")){
    Player1.x -= 6;
    if(Player1.x<Player2.x) {
      Player1.changeAnimation("left_LS_1",Player1_LS_anim_move_left);
    }else if(Player1.x>Player2.x) {
      Player1.changeAnimation("left_RS_1",Player1_RS_anim_move_left);
    }
  }

  // Function for jumping of player 1
  if(keyDown("W") && Player1.y > invisibleGround.y-150) {
    Player1.velocityY = -15;
    if(Player1.x<Player2.x) {
      Player1.changeAnimation("jump_LS_1",Player1_LS_anim_jump);
    }else if(Player1.x>Player2.x) {
      Player1.changeAnimation("jump_RS_1",Player1_RS_anim_jump);
    }
  }

  // Function for crouching of Player 1
  if(keyDown("S") && Player1.y > invisibleGround.y-140) {
    if(Player1.x<Player2.x) {
      Player1.changeAnimation("crouch_LS_1",Player1_LS_anim_crouch);
    }else if(Player1.x>Player2.x) {
      Player1.changeAnimation("crouch_RS_1",Player1_RS_anim_crouch);
    }
    if(Player1.y>invisibleGround.y-99) {
      if(Player1.x<Player2.x) {
        Player1.changeAnimation("crouch_still_LS_1",Player1_LS_crouch_still);
      }else if(Player1.x>Player2.x) {
        Player1.changeAnimation("crouch_still_RS_1",Player1_RS_crouch_still);
      }
    }
  }

  // Blocking mechanism
  if(keyDown("B")) {
    bmode1 = 1;
    if(Player1.x<Player2.x) {
      Player1.changeAnimation("block_LS_still_1",Player1_LS_block_still);
    }else if(Player1.x>Player2.x) {
      Player1.changeAnimation("block_RS_still_1",Player1_RS_block_still);
    }
  }else {
    bmode1 = 0;
  }

  // Function for punching of player 1
  if(keyDown("R")) {
    if(Player1.x<Player2.x) {
      Player1.changeAnimation("punch_LS_1",Player1_LS_anim_punch);
    }else if(Player1.x>Player2.x) {
      Player1.changeAnimation("punch_RS_1",Player1_RS_anim_punch);
    }
    if(Player1.isTouching(Player2) && bmode2 !== 1) {
      healthLevel2.x += 0.5;
    }
  }

  // Function for kicking of player 1
  if(keyDown("E")) {
    if(Player1.x<Player2.x) {
      Player1.changeAnimation("kick_LS_1",Player1_LS_anim_kick);
    }else if(Player1.x>Player2.x) {
      Player1.changeAnimation("kick_RS_1",Player1_RS_anim_kick);
    }
    if(Player1.isTouching(Player2) && bmode2 !== 1) {
      healthLevel2.x += 0.5;
    } 
  }

/* ---------------------------------------------------------------------- */

  // Function for right movement of player 2
  if(keyDown(RIGHT_ARROW)){
    Player2.x += 6;
    if(Player2.x>Player1.x) {
      Player2.changeAnimation("right_RS_2",Player2_RS_anim_move_right);
    }else if(Player2.x<Player1.x) {
      Player2.changeAnimation("right_LS_2",Player2_LS_anim_move_right);
    }
  }else {
    if(Player2.x>Player1.x) {
      Player2.changeAnimation("Normal_RS_2",Player2_RS_anim_norm);
    }else if(Player2.x<Player1.x) {
      Player2.changeAnimation("Normal_LS_2",Player2_LS_anim_norm);
    }
  }

  // Function for left movement of player 2
  if(keyDown(LEFT_ARROW)){
    Player2.x -= 6;
    if(Player2.x>Player1.x) {
      Player2.changeAnimation("left_RS_2",Player2_RS_anim_move_left);;
    }else if(Player2.x<Player1.x) {
      Player2.changeAnimation("left_LS_2",Player2_LS_anim_move_left);
    }
  }

  // Function for jumping of Player 2 
  if(keyDown(UP_ARROW) && Player2.y > invisibleGround.y-150) {
    Player2.velocityY = -15;
    if(Player2.x>Player1.x) {
      Player2.changeAnimation("jump_RS_2",Player2_RS_anim_jump);;
    }else if(Player2.x<Player1.x) {
      Player2.changeAnimation("jump_LS_2",Player2_LS_anim_jump);
    }
  }

  // Function for crouching of Player 2 
  if(keyIsDown(DOWN_ARROW) && Player2.y > invisibleGround.y-140) {  
    if(Player2.x>Player1.x) {
      Player2.changeAnimation("crouch_RS_2",Player2_RS_anim_crouch);
    }else if(Player2.x<Player1.x) {
      Player2.changeAnimation("crouch_LS_2",Player2_LS_anim_crouch);
    }
    if(Player2.y>invisibleGround.y-99) {
      if(Player2.x>Player1.x) {
        Player2.changeAnimation("crouch_still_RS_2",Player2_RS_crouch_still);
      }else if(Player2.x<Player1.x) {
        Player2.changeAnimation("crouch_still_LS_2",Player2_RS_crouch_still);
      }
    }
  }

  // Blocking mechanism
  if(keyDown("L")) {
   bmode2 = 1;
    if(Player2.x>Player1.x) {
      Player2.changeAnimation("block_RS_still_2",Player2_RS_block_still);
    }else if(Player2.x<Player1.x) {
      Player2.changeAnimation("block_LS_still_2",Player2_LS_block_still);
    }
  }else {
    bmode2 = 0;
  }

  // Function for punching of Player 2 
  if(keyDown("P")) {
    if(Player2.x>Player1.x) {
      Player2.changeAnimation("punch_RS_2",Player2_RS_anim_punch);
    }else if(Player2.x<Player1.x) {
      Player2.changeAnimation("punch_LS_2",Player2_LS_anim_punch);
    }
    if(Player2.isTouching(Player1) && bmode1 !== 1) {
      healthLevel1.x -= 0.5;
    }
  }

  // Function for kicking of Player 2 
  if(keyDown("O")) {
    if(Player2.x>Player1.x) {
      Player2.changeAnimation("kick_RS_2",Player2_RS_anim_kick);
    }else if(Player2.x<Player1.x) {
      Player2.changeAnimation("kick_LS_2",Player2_LS_anim_kick);
    }
    if(Player2.isTouching(Player1) && bmode1 !== 1) {
      healthLevel1.x -= 0.5;
    }
  }

  /* -------------------------------------------------------------------------------- */

  if(healthLevel1.x<-105) {
    gameState = "redWin";
  }

  if(healthLevel2.x>windowWidth+105) {
    gameState = "blueWin";
  }

}else if (gameState === "redWin") {

  textSize(25);
  fill("red");
  text("RED WINS!!",windowWidth/2-70,windowHeight/2-125);
  restart.style('background','red');
  restart.show();
  frameRate(25);

  Player2.changeAnimation("win2",Player2_win);

  if(Player1.x<Player2.x) {
      Player1.changeAnimation("lose_LS_still_1",Player1_LS_lose_still);
  }else if(Player1.x>Player2.x) {
      Player1.changeAnimation("lose_RS_still_1",Player1_RS_lose_still);
  }

}else if(gameState === "blueWin") {

  textSize(25);
  fill("blue");
  text("BLUE WINS!!",windowWidth/2-70,windowHeight/2-125);
  restart.style('background','blue');
  restart.show();
  frameRate(25);

  Player1.changeAnimation("win1",Player2_win);

  setTimeout(() => {
    Player1.changeAnimation("win1_still",Player1_win_still);
  }, 1000);

  if(Player2.x>Player1.x) {
      Player2.changeAnimation("lose_RS_still_2",Player2_RS_lose_still);
  }else if(Player2.x<Player1.x) {
      Player2.changeAnimation("lose_LS_still_2",Player2_LS_lose_still);
  }
}

// Screen walk management
if(Player1.x<0) {
  Player1.x = windowWidth;
}else if(Player1.x>windowWidth) {
  Player1.x = 0;
}

if(Player2.x<0) {
  Player2.x = windowWidth;
}else if(Player2.x>windowWidth) {
  Player2.x = 0;
}

  // collision
  Player1.collide(invisibleGround);
  Player2.collide(invisibleGround);
  drawSprites();
}