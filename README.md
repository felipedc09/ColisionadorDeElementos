# ColisionadorDeElementos

## Desarrollado por
* Carmen Aldana
* Felipe Duitama

## Solicitud inicial
Entregar un modelado y una implementación de:
* A partir de dos elementos que se mueven en el entorno reportar la coalición al usuario.

## 1. Identificación de Requisitos
Para el caso de estudio se pretende realizar la identificación, análisis y descripción de los requerimientos asociados con:

* La interfaz.
* Los  elementos que interactúan.
* El movimiento o desplazamiento de los elementos.
* Colisión de elementos.
* Reportar al usuario la colisión de elementos.

## a.	Identificación del requerimiento:
Entregar un modelado y una implementación que contenga la iteración de dos elementos, los cuales se pueden desplazar en una pantalla, reportando al usuario la colisión de dichos elementos.
## b.	Interfaz (Ventana):
* La interfaz utilizada será una ventana.
* La dimensión definida para la ventana, corresponde a 700 x 700 pixeles.
* El color estimado para la ventana es beige.
* Contendrá dos elementos que van a colisionar.
* No permitirá el movimiento de los elementos fuera del contorno de la ventana.
* Controlará los eventos realizados 
## c.	Elementos:
* Los elementos corresponden a dos figuras geométricas cuadradas.
* La dimensión de cada elemento debe ser de 1.5 cm lado por lado.
* El color estimado para un elemento es de color rojo y para el otro elemento es de color verde.
* Los elementos se podrán desplazar por una ventana.
*	Los elementos tendrán un movimiento determinado por el usuario y asociado al movimiento del mouse.
*	Los elementos se ubicaran dentro de una ventana.
*	Ninguno de los elementos podrán ubicarse, ni desplazarse fuera de la ventana.
## d.	Movimiento de los elementos:
*	El movimiento será originado por el usuario.
*	El movimiento estará asociado y seguirá el movimiento del puntero del mouse.
*	El movimiento será controlado al escuchar los eventos que se generen sobre una ventana.
## e.	Colisión de elementos:
*	La colisión de los elementos se generará cuando dos elementos, en un mismo momento, ocupen el mismo espacio en una ventana.
## f.	Reportar al usuario la colisión de elementos:
*	La colisión de elementos se reportará mediante una ventana informativa.
*	El mensaje de reporte al usuario será: “Elementos colisionados”

## 2.	Análisis del requerimiento:
## a.	Interfaz (Ventana):
*	Se utilizará el elemento canvas de HTML para dibujar las dimensiones de la ventana.
*	El diseño (Relleno y trazado de la ventana ) y comportamiento (Acciones sobre la ventana) serán elaborados a través de sentencias de JavaScript.
*	Gráficamente, la ventana se visualizará de la siguiente manera:

![alt text](https://github.com/felipedc09/ColisionadorDeElementos/blob/master/Dise%C3%B1o_Ventana.png)

*	Mediante un método se construirá y se contendrán dos elementos en la ventana que gráficamente se visualizarán de la siguiente forma:

![alt text](https://github.com/felipedc09/ColisionadorDeElementos/blob/master/Elementos_Ventana.png)

*	Mediante los siguientes métodos se controlarán los eventos sobre la pantalla
   * Seleccionar elemento
   * Arrastrar elemento
   * Desmarcar elemento

## b.	Movimiento de los Elementos:

* El movimiento de los elementos se originará cuando el usuario realice movimientos con el mouse sobre la ventana.
* Los elementos se moverán mediante la implementación de un método que al escuchar los eventos que se generen sobre la ventana a través del mouse, realizaran las siguientes acciones:

* Seleccionar elemento – “mousedown”: Se utilizará para validar si el puntero del mouse está en la misma posición del elemento para dejar marcado dicho elemento.
* Arrastrar elemento  – “mousemove”: Se utilizará cuando se realice un clic sostenido sobre la ventana con el fin de llamar la función que pinte los elementos sobre la ventana y siga el puntero del mouse.
* Desmarcar elemento: “moveup”: Se utilizará para liberar el elemento luego de soltar el clic del mouse.

## c.	Pintar elementos:

Mediante un método se realizará dos acciones para pindar las figuras geometricas cuadradas:

* Pintar cada elemento en el canvas: Crea una figura geométrica cuadrada con la posición, el ancho y alto de cada elemento.
* Actualizar el fondo: Se re-pintará la ventana, recorriendo la lista de elementos que tiene la ventana y asignando su color.

## d.	Colisión de los Elementos:

Mediante un método, se controlará cuando los dos elementos en un mismo momento, ocupen el mismo espacio en la ventana.

## e.	Reporte de Colisión de los Elementos:

Mediante un método, se generará una alerta cuando los dos elementos, ocupen el mismo espacio en la ventana en un mismo momento.

## Modelado

## a. Identificación de casos de uso

![alt text](https://github.com/felipedc09/ColisionadorDeElementos/blob/master/Diagrama%20UML%20del%20caso%20de%20uso.png)

### b. Diagrama de clases

![alt text](https://github.com/felipedc09/ColisionadorDeElementos/blob/master/Diagrama%20de%20clases.png)
