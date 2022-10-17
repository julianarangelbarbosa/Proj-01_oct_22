var canvas = document.getElementById('canvas')
var container = canvas.getContext('2d')
let obstacles =[];
var frames = 0;
var controls = null;
var intervalId = null;
//var background = new Image();

// imagem de fundo 
//function drawBackGround() {
  //background.src = '../images/area.pmg';
  //drawImage(background, 0, 0, 800, 600);
//}

// comandos referentes ao operador de serviço
var operador1 = 
{
    px: 400,
    py: 30,
    tx: 80,
    ty: 80,
    dir:8,
    img: new Image()
}

// função para desenhar o opperador de serviço
function Draw() 
{
    operador1.img.src='docs/assets/images/operador_1.png';
    container.drawImage(operador1.img,operador1.px,operador1.py,operador1.tx,operador1.ty);
    //container.fillRect(operador1.px, operador1.py, operador1.tx, operador1.ty)
    container.fillText("Warehouse Manager: Go Go => Unload the max of truck per day",20,30)
    container.fillText("Score1: "+pts,20,80)
}

// comendo para desenhar o container e inicializar o score
container.font = "25px Arial"
var pts = 0;

// função para inicializar o jogo
function Main() {
    

    controls = new Controls(this.operador1);
    controls.keyboardEvents();
    intervalId = setInterval(update, 1000/60);
}

setInterval(Main,50)

// função para atualizar os obstaculos
update = () => {
    frames++;
    container.clearRect(0,0,800,650)
    updateObstacles();
    Draw();
   // drawBackground();
};

  // função para desenhar os obstaculos
 function updateObstacles() {

  for (let i = 0; i < obstacles.length; i++) {
        obstacles[i].drawBar();   
    }

    if (frames % 1200 === 0 && obstacles.length<4) {
     obstacles.push(new Enemy(container));
    }
  }

 


 



 