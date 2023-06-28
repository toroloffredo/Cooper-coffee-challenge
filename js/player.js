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
      const projectile = new Projectiles(this.gameScreen,this.top + this.height /2,this.width);
      projectile.create();
      projectile.positionX = this.left + this.width;
      projectile.positionY = this.top + this.height / 2 - projectile.height / 2;
      
      this.projectiles.push(projectile);
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
