window.addEventListener("load", () => {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  const intructionsButton = document.getElementById("instructions-button");
  const backButton = document.getElementById("back-button");
  let game;

  function howToPlay() {
    console.log("instructions screen");
    game = new Game();
    game.instructions();
  }

  function startGame() {
    console.log("start game");
    game = new Game();
    game.start();

    document.addEventListener("keydown", (event) => {
      const key = event.key;
      console.log(event);

      const possibleKeystrokes = ["ArrowUp", "ArrowDown", " "];
      if (possibleKeystrokes.includes(key)) {
        switch (key) {
          case "ArrowUp":
            game.player.directionY = -10;
            break;
          case "ArrowDown":
            game.player.directionY = 10;
            break;
          case " ":
            game.player.shoot = true;
            game.shooter();
            break;
        }
        game.player.move();
      }
    });

    document.addEventListener("keyup", (event) => {
      const key = event.key;
      console.log(event);

      const possibleKeystrokes = ["ArrowUp", "ArrowDown", " "];
      if (possibleKeystrokes.includes(key)) {
        switch (key) {
          case "ArrowUp":
          case "ArrowDown":
            game.player.directionY = 0;
            break;
          case " ":
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
    console.log("back");
  });

  restartButton.addEventListener("click", () => {
    location.reload();
    console.log("reload");
  });
});
