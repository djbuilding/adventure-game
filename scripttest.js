var gamemap = [ 
    ["","","","","","","",""], 
    ["","","","","","","",""], 
    ["","","","","","","",""], 
	["","","","","","","",""], 
	["","","","","","","",""], 
	["","","","","","","",""], 
	["","","","","","","",""], 
	["","","","","","","",""], 
];

var challenge1 = {
	name: "ColdlightOracle",
	hitpoints: 10,
	prizename: "EnormousEelEgg"
}

var challenge2 = {
	name: "TwilightDrake",
	hitpoints: 20,
	prizename: "StrangeBloatedStomach"
}

var challenge3 = {
	name: "NorthSeaKraken",
	hitpoints: 30,
	prizename: "KrakenTooth"
}

var challenge4 = {
	name: "EydisDarkbane",
	hitpoints: 40,
	prizename: "NemesisBlade"
}

var challenge5 = {
	name: "EmperorVeklor",
	hitpoints: 50,
	prizename: "VeklorsDiadem"
}

var challenge6 = {
	name: "RagnarostheFirelord",
	hitpoints: 60,
	prizename: "SulfurasHandofRagnaros"
}

var challenge7 = {
	name: "YShaarjRageUnbound",
	hitpoints: 70,
	prizename: "PenetratingGazeofYShaarj"
}

var adventurer = {
	hitpoints: 100,
	locationa: 0,
	locationb: 0,
	prizes: ""
}

function startgame(array, object) {
	Sa = parseInt(Math.random()*8);
	Sb = parseInt(Math.random()*8);
	array[Sa][Sb] = "S";
	object.locationa = Sa;
	object.locationb = Sb;
	var Ga, Gb, W1a, W1b, W2a, W2b, W3a, W3b, P1a, P1b, P2a, P2b,
	C1a, C1b, C2a, C2b, C3a, C3b, C4a, C4b, C5a, C5b, C6a, C6b, C7a, C7b;
	do{
		Ga = parseInt(Math.random()*8);
		Gb = parseInt(Math.random()*8);
	}
	while(array[Ga][Gb] != "");
	array[Ga][Gb] = "G";
	
	do{
		W1a = parseInt(Math.random()*8);
		W1b = parseInt(Math.random()*8);
	}
	while(array[W1a][W1b] != "");
	array[W1a][W1b] = "W";
	
	do{
		W2a = parseInt(Math.random()*8);
		W2b = parseInt(Math.random()*8);
	}
	while(array[W2a][W2b] != "");
	array[W2a][W2b] = "W";
	
	do{
		W3a = parseInt(Math.random()*8);
		W3b = parseInt(Math.random()*8);
	}
	while(array[W3a][W3b] != "");
	array[W3a][W3b] = "W";
	
	do{
		P1a = parseInt(Math.random()*8);
		P1b = parseInt(Math.random()*8);
	}
	while(array[P1a][P1b] != "");
	array[P1a][P1b] = "P1";
	
	do{
		P2a = parseInt(Math.random()*8);
		P2b = parseInt(Math.random()*8);
	}
	while(array[P2a][P2b] != "");
	array[P2a][P2b] = "P2";
	
	do{
		C1a = parseInt(Math.random()*8);
		C1b = parseInt(Math.random()*8);
	}
	while(array[C1a][C1b] != "");
	array[C1a][C1b] = "C1";
	
	do{
		C2a = parseInt(Math.random()*8);
		C2b = parseInt(Math.random()*8);
	}
	while(array[C2a][C2b] != "");
	array[C2a][C2b] = "C2";
	
	do{
		C3a = parseInt(Math.random()*8);
		C3b = parseInt(Math.random()*8);
	}
	while(array[C3a][C3b] != "");
	array[C3a][C3b] = "C3";
	
	do{
		C4a = parseInt(Math.random()*8);
		C4b = parseInt(Math.random()*8);
	}
	while(array[C4a][C4b] != "");
	array[C4a][C4b] = "C4";
	
	do{
		C5a = parseInt(Math.random()*8);
		C5b = parseInt(Math.random()*8);
	}
	while(array[C5a][C5b] != "");
	array[C5a][C5b] = "C5";
	
	do{
		C6a = parseInt(Math.random()*8);
		C6b = parseInt(Math.random()*8);
	}
	while(array[C6a][C6b] != "");
	array[C6a][C6b] = "C6";
	
	do{
		C7a = parseInt(Math.random()*8);
		C7b = parseInt(Math.random()*8);
	}
	while(array[C7a][C7b] != "");
	array[C7a][C7b] = "C7";
}
function htmltable(array, object) {
    var result = "<div id='table'><table border=1>";
    for(var i=0; i<array.length; i++) {
        result += "<tr>";
        for(var j=0; j<array[i].length; j++){
            if(i==object.locationa&&j==object.locationb){
				result += "<td bgcolor='#00FF00'>"+array[i][j]+"</td>";
			}
			else
			result += "<td>"+array[i][j]+"</td>";
        }
        result += "</tr>";
    }
    result += "</table></div>";
	result += "<div id='button'><p><button type='button' onclick='leftup()'>&nbsp;&nbsp;LeftUp&nbsp;&nbsp;</button><button type='button' onclick='up()'>&nbsp;&nbsp;Up&nbsp;&nbsp;</button><button type='button' onclick='rightup()'>&nbsp;&nbsp;RightUp&nbsp;&nbsp;</button></p><p><button type='button' onclick='leftdown()'>LeftDown</button><button type='button' onclick='down()'>Down</button><button type='button' onclick='rightdown()'>RightDown</button></p></div>";
    return result;
}

function leftup(){
	var remove1 = document.getElementById('table');
	remove1.parentNode.removeChild(remove1);
	var remove2 = document.getElementById('button');
	remove2.parentNode.removeChild(remove2);
	var remove3 = document.getElementById('text');
	remove3.parentNode.removeChild(remove3);
	if(adventurer.locationa == 0 || adventurer.locationb == 0){
		document.write("<div id='text'>You Cannot Move This Way!!</div>"+htmltable(gamemap, adventurer));
	}
	else{
		adventurer.locationa = adventurer.locationa - 1;
	    adventurer.locationb = adventurer.locationb - 1;
		document.write("<div id='text'></div>"+htmltable(gamemap, adventurer));
	}
}

function up(){
	var remove1 = document.getElementById('table');
	remove1.parentNode.removeChild(remove1);
	var remove2 = document.getElementById('button');
	remove2.parentNode.removeChild(remove2);
	var remove3 = document.getElementById('text');
	remove3.parentNode.removeChild(remove3);
	if(adventurer.locationa == 0){
		document.write("<div id='text'>You Cannot Move This Way!!</div>"+htmltable(gamemap, adventurer));
	}
	else{
		adventurer.locationa = adventurer.locationa - 1;
		document.write("<div id='text'></div>"+htmltable(gamemap, adventurer));
	}
}

function rightup(){
	var remove1 = document.getElementById('table');
	remove1.parentNode.removeChild(remove1);
	var remove2 = document.getElementById('button');
	remove2.parentNode.removeChild(remove2);
	var remove3 = document.getElementById('text');
	remove3.parentNode.removeChild(remove3);
	if(adventurer.locationa == 0 || adventurer.locationb == 7){
		document.write("<div id='text'>You Cannot Move This Way!!</div>"+htmltable(gamemap, adventurer));
	}
	else{
		adventurer.locationa = adventurer.locationa - 1;
	    adventurer.locationb = adventurer.locationb + 1;
		document.write("<div id='text'></div>"+htmltable(gamemap, adventurer));
	}
}

function leftdown(){
	var remove1 = document.getElementById('table');
	remove1.parentNode.removeChild(remove1);
	var remove2 = document.getElementById('button');
	remove2.parentNode.removeChild(remove2);
	var remove3 = document.getElementById('text');
	remove3.parentNode.removeChild(remove3);
	if(adventurer.locationa == 7 || adventurer.locationb == 0){
		document.write("<div id='text'>You Cannot Move This Way!!</div>"+htmltable(gamemap, adventurer));
	}
	else{
		adventurer.locationa = adventurer.locationa + 1;
	    adventurer.locationb = adventurer.locationb - 1;
		document.write("<div id='text'></div>"+htmltable(gamemap, adventurer));
	}
}

function down(){
	var remove1 = document.getElementById('table');
	remove1.parentNode.removeChild(remove1);
	var remove2 = document.getElementById('button');
	remove2.parentNode.removeChild(remove2);
	var remove3 = document.getElementById('text');
	remove3.parentNode.removeChild(remove3);
	if(adventurer.locationa == 7){
		document.write("<div id='text'>You Cannot Move This Way!!</div>"+htmltable(gamemap, adventurer));
	}
	else{
		adventurer.locationa = adventurer.locationa + 1;
		document.write("<div id='text'></div>"+htmltable(gamemap, adventurer));
	}
}

function rightdown(){
	var remove1 = document.getElementById('table');
	remove1.parentNode.removeChild(remove1);
	var remove2 = document.getElementById('button');
	remove2.parentNode.removeChild(remove2);
	var remove3 = document.getElementById('text');
	remove3.parentNode.removeChild(remove3);
	if(adventurer.locationa == 7 || adventurer.locationb == 7){
		document.write("<div id='text'>You Cannot Move This Way!!</div>"+htmltable(gamemap, adventurer));
	}
	else{
		adventurer.locationa = adventurer.locationa + 1;
	    adventurer.locationb = adventurer.locationb + 1;
		document.write("<div id='text'></div>"+htmltable(gamemap, adventurer));
	}
}

startgame(gamemap, adventurer);
document.write("<div id='text'></div>"+htmltable(gamemap, adventurer));