/*
class Projectiles {
  constructor(gameScreen, playerTop, playerWidth) {
    this.gameScreen = gameScreen;
    this.top = 0;
    this.height = 40;
    this.width = 30;
    this.speed = 7;
    this.positionX = 0;
    this.positionY = 0;
    this.element = null;

    this.playerTop = playerTop;
    this.playerWidth = playerWidth;
  }

  create() {
    this.element = document.createElement("img");
    this.element.src = "./images/cupOjoe.png";
    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;

    this.gameScreen.appendChild(this.element);
  }

  move() {
    this.positionX += this.speed;
    this.updatePosition();

    if (this.positionX > this.gameScreen.offsetWidth) {
      this.destroy();
    }
  }

  updatePosition() {
    this.element.style.left = `${this.positionX}px`;
  }

  destroy() {
    this.element.remove();
  }
}

class Player {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.width = 70;
    this.height = 135;
    this.left = 47;
    this.top = 680;
    this.directionY = 0;
    this.shoot = false;
    this.projectiles = [];

    this.element = document.createElement("img");
    this.element.src = "./images/download.png";
    this.element.style.position = "absolute";

    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;

    this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;

    this.gameScreen.appendChild(this.element);
  }

  move() {
    this.top += this.directionY;
    if (this.top < 10) {
      this.top = 10;
    }
    if (this.top > this.gameScreen.offsetHeight - this.height - 10) {
      this.top = this.gameScreen.offsetHeight - this.height - 10;
    }

    this.updatePosition();
  }

  shooter() {
    if (this.shoot) {
      if (!this.isShooting) {
        const projectile = new Projectiles(
          this.gameScreen,
          this.top + this.height / 2 - 10,
          this.left + this.width
        );
        projectile.create();

        this.projectiles.push(projectile);
        this.isShooting = true;
      }
    } else {
      this.isShooting = false;
    }
  }

  updateProjectiles() {
    this.projectiles.forEach((projectile) => {
      projectile.move();

      if (projectile.positionX > this.gameScreen.offsetWidth) {
        projectile.destroy();
      }
    });

    this.projectiles = this.projectiles.filter(
      (projectile) => projectile.positionX <= this.gameScreen.offsetWidth
    );
  }

  updatePosition() {
    //this.element.style.left = `${this.left}px`;
    this.element.style.top = `${this.top}px`;
  }

  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}




  -- this was in projectile  --
  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }

  -- this was in obstacle --
  didCollide(obstacle) {
    const playerRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      playerRect.left < obstacleRect.right &&
      playerRect.right > obstacleRect.left &&
      playerRect.top < obstacleRect.bottom &&
      playerRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }


/*
   const projectilesToKeep = [];

    this.projectile.forEach((projectile) => {
      projectile.move();

      if (projectile.didCollide(this.obstacles)) {
        console.log("got him!");
        this.obstacles.element.remove();
        projectile.element.remove();
        this.score += 100;
        this.scoresChecker.textContent = `${this.score}`;
      } else {
        projectilesToKeep.push(projectile);
      }

    }

    );
     this.projectile = projectilesToKeep;
    */


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
    this.life = 5;
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
    this.player.shooter();
    this.player.updateProjectiles();

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
    this.player.updateProjectiles();
    this.player.move();

    const obstaclesToKeep = [];
    const projectilesToKeep = [];

    this.obstacles.forEach((obstacle) => {
      obstacle.move();

      if (this.player.didCollide(obstacle)) {
        console.log("Player got hit!");
        obstacle.destroy();
        this.life -= 1;
        this.lifesChecker.textContent = `${this.life}`;
      } else {
        obstaclesToKeep.push(obstacle);
      }
    });

    this.obstacles = obstaclesToKeep;

    this.projectiles.forEach((projectile) => {
      projectile.move();

      const collidedObstacle = this.obstacles.find((obstacle) =>
        projectile.didCollide(obstacle)
      );

      if (collidedObstacle) {
        console.log("Projectile hit obstacle!");
        projectile.destroy();
        collidedObstacle.destroy();
        this.score += 100;
        this.scoresChecker.textContent = `${this.score}`;
      } else if (projectile.positionX > this.gameScreen.offsetWidth) {
        projectilesToKeep.push(projectile);
      }
    });

    this.projectiles = projectilesToKeep;

    if (this.life <= 0) {
      this.isGameOver = true;
      console.log("Game Over");
    }
  }
}



class Projectiles {
  constructor(gameScreen, playerTop, playerWidth) {
    this.gameScreen = gameScreen;
    this.top = playerTop;
    this.height = 40;
    this.width = 30;
    this.speed = 7;
    this.positionX = playerWidth;
    this.positionY = playerTop + 45;
    this.element = null;

    this.create();
  }

  create() {
    this.element = document.createElement("img");
    this.element.src = "./images/cupOjoe.png";
    this.element.style.position = "absolute";
    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;

    this.gameScreen.appendChild(this.element);
    this.updatePosition();
  }

  move() {
    this.positionX += this.speed;
    this.updatePosition();
  }

  updatePosition() {
    this.element.style.left = `${this.positionX}px`;
    this.element.style.top = `${this.positionY}px`;
  }

  destroy() {
    this.element.remove();
  }

  didCollide(obstacle) {
    const projectileRect = this.element.getBoundingClientRect();
    const obstacleRect = obstacle.element.getBoundingClientRect();

    if (
      projectileRect.left < obstacleRect.right &&
      projectileRect.right > obstacleRect.left &&
      projectileRect.top < obstacleRect.bottom &&
      projectileRect.bottom > obstacleRect.top
    ) {
      return true;
    } else {
      return false;
    }
  }
}












