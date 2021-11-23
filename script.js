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
	zimejums.font = "20px Arial";
	zimejums.fillText("Mans zīmejums", 10, 100);
}

function erase(){
	var pamatne = document.getElementById("Audeklis");
	var zimejums = pamatne.getContext("2d");
	zimejums.clearRect(0, 0, pamatne.width, pamatne.height); //clear html5 canvas
}

function ving1(){
	let SkA, SkB, SkC, SkD, SkE;
	SkB = Number(prompt("Ievadiet pirmo skaitli (B)"));
	SkC = Number(prompt("Ievadiet otro skaitli (C)"));
	SkD = Number(prompt("Ievadiet trešo skaitli (D)"));
	SkE = Number(prompt("Ievadiet ceturto skaitli (E)"));
	SkA = (2*SkB+SkC)/(SkD-SkE)
	alert("Skaitlis A ir vienāds ar: " + SkA);
}

function ving2(){
	let R, X, Y, Z, A, C, P;
	R = Number(prompt("Ievadiet radiusu (R)"));
	C = parseInt(Math.round(2*Math.PI*R))
	X = Number(prompt("Ievadiet skaitli (X)"));
	P = Number(prompt("Ievadiet pakāpe (P)"));
	Y = Math.pow(X, P);
	Z = Math.sqrt(Y);
	A = Math.abs(X-R)
	alert("Skaitlis A ir vienāds ar: " + A);
}

function ving3(){
	var pamatne = document.getElementById("Audeklis");
	var zimejums = pamatne.getContext("2d");
	let platums, augstums;
	platums = Number(prompt("Ievadiet taisnstūra platumu (platums)"));
	augstums = platums / 2;
	zimejums.lineWidth = 5; // līnijas biezums
	//zimejums.strokeStyle="green"; līnijas krāsa
	zimejums.strokeRect(15,15,platums,augstums);
}