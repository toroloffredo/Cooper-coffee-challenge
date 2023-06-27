
class Game {
  constructor() {
    this.startScreen = document.getElementById("splash-screen");
    this.gameScreen = document.getElementById("game-screen");
    //this.gameplay = document.getElementById("gameplay");
    this.gameEndScreen = document.getElementById("game-over");
    this.scoresChecker = document.getElementById("score");
    this.timer = document.getElementById("timer");
    this.board = document.getElementById("scoreTimer")
    this.height = 830;
    this.width = 95;
 
    this.player = new Player(this.gameScreen);
    this.obstacles = [new Obstacle(this.gameScreen)];
    this.score = 0;
    this.isGameOver = false;
    this.animateId;
  }

  start() {
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    // -- leave commented out for now -- this.gameplay.style.display = "block";

    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}vw`;

    this.scoresChecker.style.display = "inline-block";
    this.timer.style.display = "inline-block";
    this.board.style.display = "inline-block";
    
  
    this.gameLoop();
  }


  gameLoop() {
    this.update();


    if (this.animateId % 200 === 0) {
      this.obstacles.push(new Obstacle(this.gameScreen));
    }
    console.log(this.animateId);
    if (this.isGameOver) {
      console.log("Game Over");
      this.gameScreen.style.display = "none";
      this.gameEndScreen.style.display = "block";
    } else {
      this.animateId = requestAnimationFrame(() => this.gameLoop());
    }
  }

  update() {
    //console.log("Update");
    this.player.move();
    const obstaclesToKeep = [];
    this.obstacles.forEach((obstacle) => {
      obstacle.move();
      if (this.player.didCollide(obstacle)) {
        console.log('hit')
        obstacle.element.remove();
        this.score += 1;
        this.scoresChecker.textContent = `${this.score}`
      } else if (obstacle.left > this.gameScreen.offsetWidth) {
        this.scoresChecker = `${this.score}`;
      } else {
        obstaclesToKeep.push(obstacle);
      }
    });
    this.obstacles = obstaclesToKeep;

  }
}






    /* Replace with timer count down instead.
    if (this.lives <= 0) {
      this.isGameOver = true;
      this.player.element.remove();
      this.obstacle.element.remove();
    }
    */