class Projectiles {
  constructor(gameScreen, playerTop, playerWidth) {
    this.gameScreen = gameScreen;
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

    // this.element.style.left = `${this.positionX}px`;

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
