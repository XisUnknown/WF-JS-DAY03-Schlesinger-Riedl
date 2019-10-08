function calc(){
	var km = Number(document.getElementById("km").value);
	var liters = Number(document.getElementById("liters").value);

	document.getElementById("result").innerHTML = liters/km *100;
}

function HotelConstructor() {
       this.available_nights= Math.floor(Math.random() * 11);
       }
var Price =[11,12,31,22,11];
 var hotels=[];
 var Items=[];
for (var i = 1; i < 4; i++) {
	hotels.push(new HotelConstructor());
	var	url= i + ".jpg";
	var img = document.createElement("img");
	var p_text = document.createElement("p");
	var btn = document.createElement("button");
	var input_txt = document.createElement("input");
	input_txt.setAttribute("type", "text");
	input_txt.setAttribute("id","txtid"+i);
	btn.setAttribute("id","btnid"+i);
	btn.setAttribute("onclick", "calc(this.id)");
	p_text.innerHTML = Price[i-1]+"€";
	btn.innerHTML = "calc";
	img.src = url;
	document.getElementById("Item"+i).appendChild(img);
	document.getElementById("Item"+i).appendChild(p_text);
	document.getElementById("Item"+i).appendChild(input_txt);
	document.getElementById("Item"+i).appendChild(btn);
}
function calc(idi){
	
	document.getElementById("result").innerHTML = Number(hotels[idi[5]].available_nights) - Number(document.getElementById("txtid"+idi[5]));
}


