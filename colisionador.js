function init() {
	var elements = [];
	elements.push(new Elemento(50, 50, 50, 50, "red"));
	// elements.push(new Elemento(500, 500, 50, 50, "green"));
	// elements.push(new Elemento(400, 400, 50, 50, "blue"));
	// elements.push(new Elemento(400, 300, 50, 50, "purple"));

	var ventana = new Ventana(700, 700, "beige", elements);
	ventana.asignarCanvas("colisionador");
	ventana.pintarElementos();
	ventana.escucharEventos();
}

class Elemento {
	constructor(x, y, height, width, color, forma) {
		this.x = x;
		this.y = y;
		this.height = height;
		this.width = width;
		this.color = color;
		this.forma = forma;
	}

	mover() {

	}

	colisionar(elemento) {

	}
}

class Ventana {
	constructor(width, height, color, elementos) {
		this.width = width;
		this.height = height;
		this.color = color;
		this.canvas;
		this.ctx;
		this.elementos = elementos;
	}

	asignarCanvas(nombreCanvas) {
		this.canvas = document.getElementById(nombreCanvas);
		this.canvas.width = this.width;
		this.canvas.height = this.height;
		this.canvas.setAttribute("style", "background-color: " + this.color + ";");
		if (this.canvas.getContext) {
			this.ctx = this.canvas.getContext("2d");
		}
	}

	pintarElementos() {
		this.ctx.fillStyle = this.color;
			this.ctx.fillRect(0, 0, this.width, this.height);
		this.elementos.forEach((elemento)=> {
			this.ctx.fillStyle = elemento.color;
			this.ctx.fillRect(elemento.x, elemento.y, elemento.width, elemento.height);
		});
	}

	oMousePos(canvas, evt) {
		var rect = canvas.getBoundingClientRect();
		return { // devuelve un objeto
			x: Math.round(evt.clientX - rect.left),
			y: Math.round(evt.clientY - rect.top)
		};
	}

	escucharEventos() {
		var elementoActual;
		var inicioX;
		var inicioY

		this.canvas.addEventListener("mousedown", (evt) => {
			console.log("clientX: " ,evt.clientX, "clientY: ", evt.clientY)
			var mousePos = this.oMousePos(this.canvas, evt);
			this.elementos.forEach((elemento)=>{
				console.log("element: ", elemento.x," - ", elemento.y);
				if (this.ctx.isPointInPath(mousePos.x, mousePos.y)) {
					elementoActual=elemento;
inicioX = evt.clientX-elemento.x;
inicioY = evt.clientY-elemento.Y;
					console.log(" -- "+ elementoActual);
				}
			});
			// var mousePos = this.oMousePos(this.canvas, evt);
			// if (this.ctx.isPointInPath(mousePos.x, mousePos.y)) {
			// 	arrastrar = true;
			// 	delta.x = X - mousePos.x;
			// 	delta.y = Y - mousePos.y;
			// }
		}, false);

		this.canvas.addEventListener("mousemove", (evt) => {
			console.log(elementoActual + " -- ")
			if(elementoActual != null){
				elementoActual.x = evt.clientX;
				elementoActual.y = evt.clientY;
			}
			this.pintarElementos();
			// var mousePos = this.oMousePos(this.canvas, evt);
			// console.log("se movio")
			// if (arrastrar) {
			// 	this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
			// 	X = mousePos.x + delta.x, Y = mousePos.y + delta.y
			// }
		}, false);

		this.canvas.addEventListener("mouseup", (evt) => {
			elementoActual = null;
		}, false);
	}
}
