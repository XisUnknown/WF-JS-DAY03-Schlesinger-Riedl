playerArray=[];
function PlayerConstructor(){
	this.name;
	this.winCounter;
	this.sum;
	this.getName = function(){
		this.name = prompt("Enter Your Name:");
	}
	this.makeMove = function(){
		for (var i = 0; i < 2; i++) {
			sum +=Math.floor(Math.random() * 7);
		}

	}
}
for (var i = 0; i < 2; i++){
	playerArray.push(new PlayerConstructor());
	playerArray[i].getName();
}