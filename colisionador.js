function init() {
	var elements = [];
	elements.push(new Elemento(150, 150, 50, 50, "red"));
	elements.push(new Elemento(500, 500, 50, 50, "green"));
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

	mover(newX, newY) {
		this.x = newX;
		this.y = newY;
	}

	colisionar(elementos) {
		elementos.forEach((elemento) => {
			if (this.x < elemento.x + elemento.width &&
				this.x + this.width > elemento.x &&
				this.y < elemento.y + elemento.height &&
				this.height + this.y > elemento.y 
				&& elemento !== this) {
				// collision detected!
				alert("se dieroon");
			}
		});
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

	posicionMouse(evt) {
		var rect = this.canvas.getBoundingClientRect();
		return {
			x: Math.round(evt.clientX - rect.left),
			y: Math.round(evt.clientY - rect.top)
		};
	}

	escucharEventos() {
		var elementoActual;
		var inicioX;
		var inicioY;

		this.canvas.addEventListener("mousedown", (evt) => {
			var mousePos = this.posicionMouse(evt);
			this.elementos.forEach((elemento)=>{
				if (elemento.x < mousePos.x && (elemento.x + elemento.width) > mousePos.x
				&& elemento.y < mousePos.y && (elemento.y + elemento.height) > mousePos.y ) {
					elementoActual=elemento;
					inicioX = mousePos.x-elemento.x;
					inicioY = mousePos.y-elemento.y;
				}
			});
		}, false);

		this.canvas.addEventListener("mousemove", (evt) => {
			var mousePos = this.posicionMouse(evt);
			if(elementoActual){
				elementoActual.mover(mousePos.x - inicioX, mousePos.y - inicioY);
				elementoActual.colisionar(this.elementos);
			}
			
			this.pintarElementos();
		}, false);

		this.canvas.addEventListener("mouseup", (evt) => {
			elementoActual = null;
		}, false);
	}
}
