
class Game {
  constructor() {
    this.startScreen = document.getElementById("splash-screen");
    this.gameScreen = document.getElementById("game-screen");
    //this.gameplay = document.getElementById("gameplay");
    this.gameEndScreen = document.getElementById("game-over");
    this.scoresChecker = document.getElementById("score");
    this.lifesChecker = document.getElementById("life");  
    this.timer = document.getElementById("timer");
    this.board = document.getElementById("scoreTimer");
    this.height = 650;
    this.width = 1100;
    this.player = new Player(this.gameScreen);
    this.obstacles = [new Obstacle(this.gameScreen)];
    this.life = 1;
    this.score = 0;
    this.isGameOver = false;
    this.animateId;
  }

  start() {
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    // -- leave commented out for now -- this.gameplay.style.display = "block";

    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;

    this.scoresChecker.style.display = "inline-block";
    //this.timer.style.display = "inline-block";
    this.board.style.display = "inline-block";
    
  
    this.gameLoop();
  }


  maxwidth(){
    if (this.width >= 1000){
      this.width === 1000;
    }
  }

  gameLoop() {
    this.update();


    if (this.animateId % 170 === 0) {
      this.obstacles.push(new Obstacle(this.gameScreen));
    }
    console.log(this.animateId);
    if (this.isGameOver) {
      console.log("Game Over");
      this.gameScreen.style.display = "none";
      this.board.style.display = "none";
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
        console.log("hit");
        obstacle.element.remove();
        /* -- saving it so we can use it for projectiles. --
        this.score += 1; */
        this.life -= 1;
        /* -- saving it so we can use it for projectiles. --
        this.scoresChecker.textContent = `${this.score}` */
        this.lifesChecker.textContent = `${this.life}`;
      } else if (obstacle.left > this.gameScreen.offsetWidth) {
        this.scoresChecker = `${this.score}`;
      } else {
        obstaclesToKeep.push(obstacle);
      }
    });
    this.obstacles = obstaclesToKeep;
    if (this.life <= 0){
      this.isGameOver = true;
      
      console.log("Game Over");
       
    }
  }
}
