playerArray=[];
document.getElementById("UES").addEventListener("click",makeMove);
document.getElementById("UES").addEventListener("click",display);
var sum =[0,0];
function PlayerConstructor(){
	this.name;
	this.winCounter =0;
	this.sum;
	this.getName = function(){
		this.name = prompt("Enter Your Name:");
	}
}
function gameSetup(){
for (var i = 0; i < 2; i++){
	playerArray.push(new PlayerConstructor());
	playerArray[i].getName();
	document.getElementById("player"+(i+1)+"Name").innerHTML = playerArray[i].name;
	document.getElementById("winP"+(i+1)).innerHTML = playerArray[i].winCounter;
}
}



function makeMove(){
		for (var j = 0; j < 2; j++) {
	
		for (var i = 0; i < 3; i++) {
			sum[j] +=Math.floor(Math.random() * 7);
		}
		document.getElementById("lgzP"+(j+1)).innerHTML = sum[j];

}

}
function display(){
		//console.log(playerArray[0].sum);
		//console.log(playerArray[1].sum);
		if(sum[0]>sum[1]){
			playerArray[0].winCounter++;
			document.getElementById("winP1").innerHTML = playerArray[0].winCounter;
		}
		else if(sum[0]<sum[1]){
			playerArray[1].winCounter++;
			document.getElementById("winP2").innerHTML = playerArray[1].winCounter;
		}
		else{
			playerArray[0].winCounter++;
			document.getElementById("winP1").innerHTML = playerArray[0].winCounter;
			playerArray[1].winCounter++;
			document.getElementById("winP2").innerHTML = playerArray[1].winCounter;
		}
		sum = [0,0];
}
gameSetup();