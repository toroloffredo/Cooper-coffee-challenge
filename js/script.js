window.addEventListener("load", () => {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const intructionsButton = document.getElementById("instructions-button");
  const backButton = document.getElementById("back-button");
  let spaceBarPressed = false;
  let game;

  function howToPlay() {
    //console.log("instructions screen");
    game = new Game();
    game.instructions();
  }

  function displayHighScore() {
    const highScoreElement = document.getElementById("high-score");
    highScoreElement.textContent = game.highScore;
  }

  function startGame() {
    //console.log("start game");
    game = new Game();
    game.start();

  

    document.addEventListener("keydown", (event) => {
      const key = event.key;
      const possibleKeystrokes = ["ArrowUp", "ArrowDown", " "];

      /*playerSpeed sets how fast Cooper moves up and down */
      const playerSpeed = 2;
      
      if (possibleKeystrokes.includes(key)) {
        switch (key) {
          case "ArrowUp":
            game.player.directionY = -playerSpeed;
            break;
          case "ArrowDown":
            game.player.directionY = playerSpeed;
            break;
          case " ":
            if(!spaceBarPressed){
              spaceBarPressed= true;
              game.player.shoot = true;
              game.shooter();
            }
            break;
        }
        game.player.move();
      }
    });

    document.addEventListener("keyup", (event) => {
      const key = event.key;
      const possibleKeystrokes = ["ArrowUp", "ArrowDown", " "];
      if (possibleKeystrokes.includes(key)) {
        switch (key) {
          case "ArrowUp":
          case "ArrowDown":
            game.player.directionY = 0;
            break;
          case " ":
            spaceBarPressed = false;
            game.player.shoot = false;
            break;
        }
      }
    });
  }

  startButton.addEventListener("click", function () {
    startGame();
  });

  intructionsButton.addEventListener("click", function () {
    howToPlay();
  });

  backButton.addEventListener("click", () => {
    location.reload();
  });

  restartButton.addEventListener("click", () => {
    location.reload();
    displayHighScore();
  });
});
