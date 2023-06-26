class Game {
  constructor() {
    this.startScreen = document.getElementById("splash-screen");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-over");
    this.scoresChecker = document.getElementById("score");
    this.timer = document.getElementById("timer");
    this.height = 800;
    this.width = 900;

    this.player = new Player(this.gameScreen);
    this.obstacles = [new Obstacle(this.gameScreen)];
    this.score = 0;
    this.isGameOver = false;
    this.animateId;
  }

  start() {
    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;

    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";
    this.gameloop();
  }

  gameLoop() {
    this.update();

    if (this.animateId % 200 === 0) {
      this.obstacles.push(new Obstacle(this.gameScreen));
    }
    console.log(this.animateId)
    if (this.isGameOver) {
      console.log("Game Over");
      this.gameScreen.style.display = "none";
      this.gameEndScreen.style.display = "block";
    } else {
      this.animateId = requestAnimationFrame(() => this.gameloop());
    }
  }

  update() {
    console.log("Update");
    this.player.move();
    const obstaclesToKeep = [];
    this.obstacles.forEach((obstacle) => {
      obstacle.move();
      if (this.player.didCollide(obstacle)) {
        obstacle.element.remove();
      } else if (obstacle.top > this.gameScreen.offsetHeight) {
        this.score += 1;
        this.scoresChecker = `${this.score}`;
      } else {
        obstaclesToKeep.push(obstacle);
      }
    });
    this.obstacles = obstaclesToKeep;
    
    
    /* Replace with timer count down instead.
    if (this.lives <= 0) {
      this.isGameOver = true;
      this.player.element.remove();
      this.obstacle.element.remove();
    }*/ 
  }
}



