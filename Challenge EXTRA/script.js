
window.onload = function() {
   alert('bye bye Honey')

function constructor(){
	var body = document.getElementsByTagName("body");
	var container = document.createElement("div");
	container.setAttribute("id","main");
	//container.setAttribute("style","margin: 0 auto;");
	container.setAttribute("style","width: 50vw;");
	container.style.height = "100vh";
	container.style.backgroundColor = "red"
	var header = document.createElement("h1");
	header.innerHTML = ("TO-DO List");
	container.textContent = "12";
	container.setAttribute("style", "{backgroundColor : "re}")
	document.body.appendChild(container); 
}
constructor();


};