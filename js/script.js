window.addEventListener("load", () => {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game;

  function startGame() {
    console.log("start game");
    game = new Game();
    game.start();
    document.addEventListener("keydown", (event) => {
      // console.log(event);
      const key = event.key;
      const possibleKeystrokes = ["ArrowUp", "ArrowDown", "Space"];
      if (possibleKeystrokes.includes(key)) {
        switch (key) {
          case "ArrowUp":
            game.player.directionY = -10;
            break;
          case "ArrowDown":
            game.player.directionY = 10;
            break;
            case "Space":
            game.player.shoot = true;
            break;
        }
        game.player.move();
      }
    });

    document.addEventListener("keyup", (event) => {
      const key = event.key;
      // console.log(key);
      const possibleKeystrokes = ["ArrowUp", "ArrowDown", "Space"];
      if (possibleKeystrokes.includes(key)) {
        switch (key) {
          case "ArrowUp":
          case "ArrowDown":
            game.player.directionY = 0;
          case "Space":
            game.player.shoot = false;
            break;
        }
      }
      game.player.directionY = 0;
    });
  }

  startButton.addEventListener("click", function () {
    startGame();
  });
  restartButton.addEventListener("click", () => {
    location.reload();
    console.log("reload");
  });
});
