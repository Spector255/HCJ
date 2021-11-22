function draw(){
	var pamatne = document.getElementById("Audeklis");
	var zimejums = pamatne.getContext("2d");
	zimejums.lineWidth = 5; // līnijas biezums
	//zimejums.strokeStyle="green"; līnijas krāsa
	zimejums.strokeRect(0,0,150,75);
	zimejums.lineWidth = 8;
	zimejums.beginPath();
	zimejums.rect(10,12.5,50,50);
	zimejums.strokeStyle="#FF0000";
	zimejums.fillStyle= "green";
	zimejums.fill();   //aizpildījums
	zimejums.stroke(); //rāmis
	zimejums.strokeStyle="#000000";
}

function erase(){
	var pamatne = document.getElementById("Audeklis");
	var zimejums = pamatne.getContext("2d");
	zimejums.clearRect(0, 0, pamatne.width, pamatne.height); //clear html5 canvas
}