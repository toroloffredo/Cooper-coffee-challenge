// -- stop here! --

class Game {
  constructor() {
    this.startScreen = document.getElementById("splash-screen");
    this.gameScreen = document.getElementById("game-screen");
    this.gameEndScreen = document.getElementById("game-over");
    this.scoresChecker = document.getElementById("score");
    this.lifesChecker = document.getElementById("life");
    this.timer = document.getElementById("timer");
    this.board = document.getElementById("scoreTimer");
    this.height = 650;
    this.width = 1100;
    this.player = new Player(this.gameScreen);
    this.obstacles = [new Obstacle(this.gameScreen)];
    this.projectiles = [];
    this.life = 3;
    this.score = 0;
    this.isGameOver = false;
    this.animateId;
  
  }

  start() {
    this.startScreen.style.display = "none";
    this.gameScreen.style.display = "block";

    this.gameScreen.style.height = `${this.height}px`;
    this.gameScreen.style.width = `${this.width}px`;

    this.scoresChecker.style.display = "inline-block";
    this.board.style.display = "inline-block";

    this.gameLoop();
  }

  gameLoop() {
    this.update();
    this.player.move();
    this.player.updateProjectiles();

    this.projectiles.forEach((projectile) => {
      projectile.move();
    });

    if (this.animateId % 170 === 0) {
      this.obstacles.push(new Obstacle(this.gameScreen));
    }

    //console.log(this.animateId);

    if (this.isGameOver) {
      console.log("Game Over");
      this.gameScreen.style.display = "none";
      this.board.style.display = "none";
      this.gameEndScreen.style.display = "block";
    } else {
      this.animateId = requestAnimationFrame(() => this.gameLoop());
    }
  }

  shooter() {
    if (this.player.shoot) {
      
        const projectile = new Projectiles(
          this.gameScreen,
          this.player.top + this.player.height / 10,
          this.player.left + this.player.width
        );
        projectile.create();
        projectile.positionX = this.player.left + this.player.width;
        projectile.positionY =
          this.player.top + this.player.height / 2 - projectile.height / 2;

        this.projectiles.push(projectile);
        this.player.shoot = true;
      
    } else {
      this.player.shoot = false;
    }
  }

  update() {
    this.player.updateProjectiles();
    this.player.move();

    const obstaclesToKeep = [];
    const projectilesToKeep = [];

    // Check collision between player and obstacles
    this.obstacles.forEach((obstacle) => {
      obstacle.move();
      if (this.player.didPlayerCollide(obstacle)) {
        console.log("Player collided with obstacle");
        obstacle.element.remove();
        this.life -= 1;
        this.lifesChecker.textContent = `${this.life}`;
      } else {
        obstaclesToKeep.push(obstacle);
      }
    });

    // Check collision between projectile and obstacles
    this.projectiles.forEach((projectile) => {
      projectile.move();
      this.obstacles.forEach((obstacle) => {
        if (projectile.didProjectileCollide(obstacle)) {
          console.log("Projectile collided with obstacle");
          obstacle.element.remove();
          this.score += 100;
          this.scoresChecker.textContent = `${this.score}`;
        }
      });

      if (projectile.positionX < this.width) {
        projectilesToKeep.push(projectile);
      }
    });

    this.obstacles = obstaclesToKeep;
    this.projectiles = projectilesToKeep;

    if (this.life <= 0) {
      this.isGameOver = true;
      console.log("Game Over");
    }
  }
}
