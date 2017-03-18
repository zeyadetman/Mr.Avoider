var unknown = document.querySelector("#unknown");
var unknownimg = document.createElement('img');
unknownimg.src = "assets/question_mark.png";
unknown.appendChild(unknownimg);
var orUnknownImageSrc = unknownimg.src.toString();


var char1 = document.querySelector("#char1");
var char1img = document.createElement('img');
char1img.setAttribute('id', 'char1');
char1img.src = "assets/char1.png";
char1.appendChild(char1img);
var x = document.getElementById("#char1");
char1.onclick = function() {
  unknownimg.src = char1img.src;
}



var char2 = document.querySelector("#char2");
var char2img = document.createElement('img');
char2img.setAttribute('id', 'char2');
char2img.src = "assets/char2.png";
char2.appendChild(char2img);
var x = document.getElementById("#char2");
char2.onclick = function() {
  unknownimg.src = char2img.src;
}

var char3 = document.querySelector("#char3");
var char3img = document.createElement('img');
char3img.setAttribute('id', 'char3');
char3img.src = "assets/char3.png";
char3.appendChild(char3img);
var x = document.getElementById("#char3");
char3.onclick = function() {
  unknownimg.src = char3img.src;
}

var char4 = document.querySelector("#char4");
var char4img = document.createElement('img');
char4img.setAttribute('id', 'char4');
char4img.src = "assets/char4.png";
char4.appendChild(char4img);
var x = document.getElementById("#char4");
char4.onclick = function() {
  unknownimg.src = char4img.src;
}


//el.onclick="unknowing.src=this.src";



var chars =[
  [char1,char1img,char1img.src.toString(),'#char1'],
  [char2,char2img,char2img.src.toString(),'#char2'],
  [char3,char3img,char3img.src.toString(),'#char3'],
  [char4,char4img,char4img.src.toString(),'#char4']
];

for (var i = 0; i < chars.length; i++) {
  chars[i][0].style.float = "left";
  chars[i][0].style.padding = "20px";
  chars[i][0].style.margin = "0px 0px 0px 27px";
  chars[i][1].setAttribute('class','chars');
}

unknown.style.margin = "200px 0px 0px 330px";



/*clickHandler();
function clickHandler() {
  for (var i = 0; i < chars.length; i++) {
    var x = document.getElementById(chars[i][2].toString());
    x.onclick = "unknown.src = this.src";
  }
}*/





var startButton = document.querySelector("#startButton");
startButton.addEventListener("click", startGameHandler , false);

function startGameHandler() {
  if(unknownimg.src.toString() === orUnknownImageSrc) window.alert(" Please Select character :) ");
  else {
render();}

}

var map = [
  [0,0,0,0,0,0,0],
  [1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1],
  [0,0,0,0,0,0,0],
  [1,1,1,1,1,1,1],
  [1,1,1,1,1,1,1],
  [0,0,0,0,0,0,0]
];

var grass = 5;
var car = 6;
var chara = 1;
var charmoveX = 6;
var charmoveY = 3;

var movemap = [
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,grass,0,grass,0,grass,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0],
  [0,0,0,0,0,0,0]
];

function render() {

document.getElementById("gameBody").innerHTML = "";
  var gameboard = document.querySelector('#gameBody');

  var Size = 10;
  var Space = 1;
  var mapRows = map.length;
  var mapColumns = map[0].length;


  for(var i = 0; i < mapRows; i++ ){
    for(var j=0;j< mapColumns ; j++){
      var celldiv = document.createElement("div");
      var cell = document.createElement("img");
      celldiv.setAttribute('class', 'cellsdiv');
      cell.setAttribute('class', 'cells');
      celldiv.appendChild(cell);
      gameboard.appendChild(celldiv);
      if(map[i][j] === 0 && j%2==0) { cell.src ="assets/safe2.svg"; cell.style.backgroundColor = "#89A41C";}
      else if(map[i][j] == 0 && i==3 && j%2==1) {cell.src = "assets/safe1.svg"; cell.style.backgroundColor = "#89A41C"; }
      else if(map[i][j] ===0 && j%2==1) {cell.src = "assets/safe2.svg"; cell.style.backgroundColor = "#89A41C"; }
      else if(map[i][j] == 1 && (i==1 || i==4)) {cell.src = "assets/road2.svg"; cell.style.backgroundColor = "#191919";}
      else if(map[i][j] ==1 && (i==2 || i == 5)){cell.src = "assets/road1.svg"; cell.style.backgroundColor = "#191919";}
      else if(map[i][j] ==1 && i==3){cell.src = "assets/road.svg"; cell.style.backgroundColor = "#191919";}
      cell.style.float = "left";

      if(i==charmoveX && j==charmoveY){
      cell.src = unknownimg.src;}
    }
}
console.log(unknownimg.src.toString());

}
window.addEventListener('keydown', keyHandler, false);

function keyHandler(event){
  if(event.keyCode == 38 && charmoveX>0 && movemap[charmoveX-1][charmoveY] ==0) {movemap[charmoveX][charmoveY] = 0; charmoveX--; movemap[charmoveX][charmoveY] = chara;}
  else if(event.keyCode == 40 && charmoveX < map.length-1 && movemap[charmoveX+1][charmoveY] ==0) {movemap[charmoveX][charmoveY] = 0; charmoveX++; movemap[charmoveX][charmoveY] = chara;}
  else if(event.keyCode == 39 && charmoveY < map[0].length-1&& movemap[charmoveX][charmoveY+1] ==0 ) {movemap[charmoveX][charmoveY] = 0; charmoveY++; movemap[charmoveX][charmoveY] = chara;}
  else if(event.keyCode == 37 && charmoveY>0&& movemap[charmoveX][charmoveY-1] ==0) {movemap[charmoveX][charmoveY] = 0; charmoveY--; movemap[charmoveX][charmoveY] = chara;}
  render();
}
