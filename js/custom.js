//Ejes de orientacion (Grados)

function deviceOrientationListener(event) {

	let Z = Math.round(event.alpha);
	let Y = Math.round(event.beta) * 4; //Multiplica el valor de giro del dispositivo para que la rotacion del objeto sea mayor Ej: Giro = 30º X 4 = 120º
	let X = Math.round(event.gamma) * 4;

	//Se aplican los valores obtenidos del dispositivo en un estilo que haga girar el cubo

	$('.cubo').css({
		"transform" : "rotateX("+ -Y + "deg)" + "rotateY("+ -X + "deg)" + "rotateZ("+ -Z + "deg)"
	});

}

//Sensilibilidad de Movimiento (m/s)

function deviceMotionListener(event) {

	let X = Math.round(event.accelerationIncludingGravity.x);

	if(X > 10){ //Si la velocidad del movimiento alcanza los 10m/s hace algo

		//Movimiento fuerte a la izquierda aplica la clase 

		$('.cubo').addClass('BlackAndWhite')

	}else if (X < -10){ //Si la velocidad del movimiento alcanza los -10m/s hace otra cosa

		//Movimiento fuerte a la derecha quita la clase 

		$('.cubo').removeClass('BlackAndWhite')

	}
}

	
//Si se detectan eventos de movimiento ejecuta la funcion de movimiento

if (window.DeviceMotionEvent) {

	window.addEventListener('devicemotion', deviceMotionListener);

}else{

	console.log("Sorry, your browser doesn't support Motion Events");

}

//Si se detectan eventos de orientacion ejecuta la funcion de orientacion

if (window.DeviceOrientationEvent) {

	window.addEventListener("deviceorientation", deviceOrientationListener);

} else {

	console.log("Sorry, your browser doesn't support Device Orientation");

}