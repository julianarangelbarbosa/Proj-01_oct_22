var canvas = document.getElementById('canvas')
var container = canvas.getContext('2d')
let obstacles =[];
var frames = 0;
let controls = null;
var intervalId = null;
let scoreAdd = 0;
var cont = 1;
var cont2 = 0;
let song = new Audio('docs/assets/sounds/song.wav');
song.loop = false;

// comendo para desenhar o container e inicializar o score
container.font = "25px Arial"
var pts = 0;

// função para inicializar o jogo
function main() {
    if (!intervalId)
    {
     operador1 = new Player(200, 80, 50, 50, container);
     controls = new Controls(operador1);
     controls.keyboardEvents();
     intervalId = setInterval(update, 1000/60);
    }
    
}

//setInterval(main,50)

// função para atualizar os obstaculos
const update = () => {
  frames++;
  container.clearRect(0,0,500,480)
  operador1.draw();
  updateObstacles();
  checkGameOver();
  score();
  timer();
};
//main()

  // função para desenhar os obstaculos
 function updateObstacles() {

  for (let i = 0; i < obstacles.length; i++) {
        obstacles[i].drawBar();   
    }

    if (frames % 80 === 0 && obstacles.length<120) {
     obstacles.push(new Enemy(container));
    }
  }

  function checkGameOver() 
  {
    const crashed = obstacles.some((obstacle, i) => {
      if(operador1.crashWith(obstacle)){
        obstacles.splice(i, 1)
        song.play();
      }
      return operador1.crashWith(obstacle);
    });

    if (crashed) {
      //this.stop();
      scoreAdd += 1;
    }
  }

  function stop() 
  {
    clearInterval(intervalId);
    intervalId = null;
    if (scoreAdd > 0) {container.fillText(`Game Over: Job done => Unload: ${scoreAdd} Trucks`, 50, 450);}
    else {container.fillText(`Game Over: Bad Job => Unload: ${scoreAdd} Trucks`, 50, 450);}
    
  }

  function score() 
  {
    container.font = '18px serif';
    container.fillStyle = 'black';
    container.bold = "black";
    //const score = Math.floor(this.frames / 5);
    console.log(scoreAdd);
    container.fillText(`Job Start`, 60, 30);
    container.fillText(`Score: ${scoreAdd}`, 60, 50);
  }

   function timer() 
   {
    container.font = "18px serif";
    container.fillStyle = "black";
    container.bold ="black";
    let seconds = Math.floor(60 - (frames / 30))
    if (seconds <= 0) stop()
    container.fillText(`Timer: 00:${seconds}`, 60, 70);
    };

 


 



 