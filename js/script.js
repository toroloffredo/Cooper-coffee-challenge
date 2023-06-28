window.addEventListener("load", () => {
  const startButton = document.getElementById("start-button");
  const restartButton = document.getElementById("restart-button");
  let game;

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
            game.player.shooter();
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
