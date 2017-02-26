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

var unknown = document.querySelector("#unknown");
var unknownimg = document.createElement('img');
unknownimg.src = "assets/question_mark.png";
unknown.appendChild(unknownimg);

var chars =[
  [char1,char1img.src.toString(),'#char1'],
  [char2,char2img.src.toString(),'#char2'],
  [char3,char3img.src.toString(),'#char3'],
  [char4,char4img.src.toString(),'#char4']
];

for (var i = 0; i < chars.length; i++) {
  chars[i][0].style.float = "left";
  chars[i][0].style.padding = "20px";
  chars[i][0].style.margin = "0px 0px 0px 27px";
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
  render();
}
