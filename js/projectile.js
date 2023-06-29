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
  /* stop here */
  move() {
    this.positionX += this.speed;
    this.updatePosition();
  }

  updatePosition() {
    this.element.style.left = `${this.positionX}px`;
    this.element.style.top = `${this.top}px`; // Set the top position of the element
  }

  didProjectileCollide(obstacle) {
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

  destroy() {
    this.element.remove();
  }
};
