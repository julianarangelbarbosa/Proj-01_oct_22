window.onload = () => {
    document.getElementById('start-button').onclick = () => {
      main();
    };

    document.getElementById('restart-button').onclick = () => {
      window.location.reload();
    }
  
    function startGame() {
      //let game = new Game();
      //game.main();
        main();
    }
  };