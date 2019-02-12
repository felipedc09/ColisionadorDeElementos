function init(){
	var ventana = new Ventana (700, 700);
	ventana.pintarElementos();
}

class Elemento {
	constructor (x, y, height, width, color, forma) {
		this.x = x;
		this.y = y;
		this.height = height;
		this.width = width;
		this.color = color; 
		this.forma = forma;
	}
	
	
}

class Ventana {
	constructor (height, width, color) {
		this.canvas = document.getElementById('colisionador');
		this.height = height;
		this.width = width;
		this.color = color;
	}

	crearElementos () {
		var elemento1 = new Elemento (50, 50, 50, 50, "black");
		var elemento2 = new Elemento (500, 500, 50, 50, "green");
		return [elemento1, elemento2]
	}

	 pintarElementos(){
		if (this.canvas.getContext) {
			var ctx = this.canvas.getContext('2d');
			this.crearElementos().forEach(function(element) {
				ctx.fillStyle = element.color;
				ctx.fillRect(element.x, element.y, element.width, element.height);
			});
		}
	}
	
	oMousePos(canvas, evt) {
      var rect = canvas.getBoundingClientRect();
      return { // devuelve un objeto
        x: Math.round(evt.clientX - rect.left),
        y: Math.round(evt.clientY - rect.top)
      };
    }
}


///////////////////////////////////////////////////
class Poligono {
constructor (height, width) {
this.height = height;
this.width = width;
}
// Getter
get   area  ()   {
return this.calcArea();
}
// Método
calcArea () {
return this.height * this.width ;
}
}

const cuadrado = new Poligono (10, 10);

console.log(cuadrado.area); // 100 
