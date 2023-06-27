
class Obstacle {
  constructor(gameScreen) {
    this.gameScreen = gameScreen;
    this.width = 80;
    this.height = 150;
    // Rememenber to double check the "left" amount if you change to px units.
    this.left = 80; 
    this.top = Math.floor(Math.random() * 300 + 70);
    this.directionX = 0;
    this.directionY = 0;
    this.element = document.createElement("img");
    this.element.src = "./images/Bob.png";
    this.element.style.position = "absolute";

    this.element.style.width = `${this.width}px`;
    this.element.style.height = `${this.height}px`;

    this.element.style.top = `${this.top}px`;
    // Using vw as UNIT so its dinamic towards window width. Change to px
    // if this gives you problems.
    this.element.style.left = `${this.left}vw`;

    this.gameScreen.appendChild(this.element);
  }

  move() {
    this.left -= 0.5;
    
    this.updatePosition();
  }

  updatePosition() {
    // Using vw as UNIT so its dinamic towards window width. Change to px 
    // if this gives you problems.
    this.element.style.left = `${this.left}vw`;
    
  }
}
