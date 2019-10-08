/*
var geburtstag = ["16","1","1992"];
var date = new Date;
var day = date.getDay();
var month = date.getMonth();
var year = date.getFullYear();
console.log(geburtstag[2]-year);
*/
/*
var text = prompt("please enter your sentence!");
var cut = prompt("how many letters do you want to show, please enter a Number!");
var res = text.slice(0, cut);
console.log(res);*/

/*
var name = prompt("enter your name");
var age = prompt("enter your age");
var profession = prompt("enter your profession");

var x = document.getElementById("textfeld").innerHTML=("Hi I am " + name + " I am " + age + " years old and I am a "+profession + ".");
console.log(x);
*/
/* come back later to fix this */
/*
var km = prompt("please enter how many kilometers you want to drive. Only Numbers!");
var liters = prompt("please enter how mane liters you need to drive this distance. Only Numbers!");

while(km == NaN || liters == NaN){
var km = prompt("please enter how many kilometers you want to drive. Only Numbers!");
var liters = prompt("please enter how mane liters you need to drive this distance. Only Numbers!");
}

var result = (liters/km) * 100;
console.log(result);
*/
document.getElementById("i1");

var hotelHilton = {
	//variables in our object
	name: "hilton",
	available: Math.floor(Math.random()*10)+1,
	rooms: ["SingleRooms","BigRooms","ExtraBigRooms"],

	//function which give us the result how many free rooms we have
   checkAvailability: function() {
   	var i1 = document.getElementById("i1").value;
   	var i1 = parseInt(i1);
    var result = this.available - i1;
    var result2 = i1 - this.available;

    //if enough space -> book if not --> now   
    if(result >= 0){
	document.getElementById("erg1").innerHTML=("I´ll book your request");
	var btn = document.createElement("BUTTON");  
	btn.innerHTML = "Book NOW!";                  
	document.getElementById("butto").appendChild(btn);
	btn.id ='someId';
	document.getElementById("button1").style.backgroundColor = "green";
	}else{
	document.getElementById("erg1").innerHTML=("Sorry, no free room for " + i1 + " nights. We can offer you " + result2 + " nights." )
	document.getElementById("button1").style.backgroundColor = "red";
}
}
}

document.getElementById("i1");

var hotelArcotel = {
	//variables in our object
	name: "Arcotel",
	available: Math.floor(Math.random()*10)+1,
	rooms: ["SingleRooms","BigRooms","ExtraBigRooms"],

	//function which give us the result how many free rooms we have
   checkAvailability: function() {
   	var i1 = document.getElementById("i2").value;
   	var i1 = parseInt(i1);
    var result = this.available - i1;
    var result2 = i1 - this.available;

    //if enough space -> book if not --> now   
    if(result >= 0){
	document.getElementById("erg2").innerHTML=("I´ll book your request");
	var btn = document.createElement("BUTTON");  
	btn.innerHTML = "Book NOW!";                  
	document.getElementById("butt").appendChild(btn);
	btn.id ='someId';
	document.getElementById("button2").style.backgroundColor = "green";
	}else{
	document.getElementById("erg2").innerHTML=("Sorry, no free room for " + i1 + " nights. We can offer you " + result2 + " nights." )
	document.getElementById("button2").style.backgroundColor = "red";
}
}
}

document.getElementById("i1");

var hotelSven = {
	//variables in our object
	name: "Sven´s",
	available: Math.floor(Math.random()*10)+1,
	rooms: ["SingleRooms","BigRooms","ExtraBigRooms"],

	//function which give us the result how many free rooms we have
   checkAvailability: function() {
   	var i1 = document.getElementById("i3").value;
   	var i1 = parseInt(i1);
    var result = this.available - i1;
    var result2 = i1 - this.available;

    //if enough space -> book if not --> now   
    if(result >= 0){
	document.getElementById("erg3").innerHTML=("I´ll book your request");
	var btn = document.createElement("BUTTON");  
	btn.innerHTML = "Book NOW!";                  
	document.getElementById("but").appendChild(btn);
	btn.id ='someId';
	document.getElementById("button3").style.backgroundColor = "green";
	}else{
	document.getElementById("erg3").innerHTML=("Sorry, no free room for " + i1 + " nights. We can offer you " + result2 + " nights." )
	document.getElementById("button3").style.backgroundColor = "red";
}
}
}
