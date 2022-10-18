var canvas = document.getElementById('canvas')
var container = canvas.getContext('2d')
let obstacles =[];
var frames = 0;
let controls = null;
var intervalId = null;
let scoreAdd = 0;
var cont = 1;
var cont2 = 0;

//var background = new Image();

// comandos referentes ao operador de serviço
//var operador1 = 
//{
  //px: 400,
 //py: 30,
 //tx: 80,
    //ty: 80,
    //dir:8,
    //img: new Image()
//}

// comandos referentes ao operador de serviço
// função para desenhar o opperador de serviço
//function Draw() 
//{
  //  operador1.img.src='docs/assets/images/operador_1.png';
    //container.drawImage(operador1.img,operador1.px,operador1.py,operador1.tx,operador1.ty);
    //container.fillRect(operador1.px, operador1.py, operador1.tx, operador1.ty)
    //container.fillText("Warehouse Manager: Go Go => Unload the max of truck per day",20,30)
    //container.fillText("Score1: "+pts,20,80)
//}

// comendo para desenhar o container e inicializar o score
container.font = "25px Arial"
var pts = 0;

// função para inicializar o jogo
function main() {
    operador1 = new Player(200, 30, 50, 50, container);
    controls = new Controls(operador1);
    controls.keyboardEvents();
    intervalId = setInterval(update, 1000/60);
    
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
};
main()

  // função para desenhar os obstaculos
 function updateObstacles() {

  for (let i = 0; i < obstacles.length; i++) {
        obstacles[i].drawBar();   
    }

    if (frames % 120 === 0 && obstacles.length<10) {
     obstacles.push(new Enemy(container));
    }
  }

  function checkGameOver() 
  {
    const crashed = obstacles.some((obstacle, i) => {
      if(operador1.crashWith(obstacle)){
        obstacles.splice(i, 1)
      }
      return operador1.crashWith(obstacle);
    });

    if (crashed) {
      //this.stop();
      scoreAdd += 1;
      cont-=0.05;
    }

    if(cont2 <=-1){
      stop();
      container.fillText(`GAME OVER: OPERATOR UNLOAD ${scoreAdd} TRUCKS`,30,50);
    }
  }

 //function cronTimer(){
   // var cron;

    //cron = setInterval(() => {timer(); },10);
    //container.fillText(`Time to unload: ${cron}`, 100, 50);
  //}
   
//function timer() {
  //document.getElementById('counter').innerText = 'Teste';
//}
  

  function stop() 
  {
    clearInterval(this.intervalId);
  }

  function score() 
  {
    container.font = '18px monospace';
    container.fillStyle = 'black';
    //const score = Math.floor(this.frames / 5);
    console.log(scoreAdd);
    container.fillText(`Score: ${scoreAdd}`, 10, 30);
    let cont2 = cont.toFixed(3);
    container.fillText(`Time: ${cont2} min`,10,48);
  }




 


 



 