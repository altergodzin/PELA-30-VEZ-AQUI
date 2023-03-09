canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

img_width = 300;
img_height = 100;

var img_image;


img_x = 100;
img_y = 100;

function add() {
	Img_imgTag = new Image();
	Img_imgTag.onload = uploading;
	Img_imgTag.src = img_image;  
}

function uploading() {

	ctx.drawImage(Img_imgTag, img_x, img_y, img_width, img_height);
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e) {
	keyPressed = e.keyCode;
	console.log(keyPressed);

	if ((keyPressed >= 97 && keyPressed <= 122) || (keyPressed >= 65 && keyPressed <= 90)) {
		aplhabetkey()
		document.getElementById("d1").value = "Você pressionou uma Tecla alfabética";
	}

	else if ((keyPressed >= 48 && keyPressed <= 57)) {
		numberkey()
		document.getElementById("d1").value = "Você pressionou um número";
		
	}

	else if ((keyPressed >= 37 && keyPressed <= 40)) {
		arrowkey()
		document.getElementById("d1").value = "Você pressionou uma setinha";
	}

	else if ((keyPressed = 18, 19, 27)) {
		specialkey()
		document.getElementById("d1").value = "Você pressionou uma tecla especial";
	}


	else {
		otherkey();
		document.getElementById("d1").innerHTML = "Você pressionou um símbolo ou outra tecla";
	}
}

function aplhabetkey() {
	img_image = "alfabeto.png";
	add();
	console.log(my_keydown)
}
function numberkey() {
	img_image = "número.png";
	add();
}
function arrowkey() {
	img_image = "direcional.png";
	add();
}
function specialkey() {
	img_image = "especial.png";
	add();
}
function otherkey() {
	img_image = "outras.png";
	add();
}

