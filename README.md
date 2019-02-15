# ColisionadorDeElementos
A partir de dos elementos que se mueven en el entorno reportar la coalición al usuario.

## Desarrollado por
* Carmen Aldana
* Felipe Duitama

## Descripción del requerimiento
Entregar un modelado y una implementación que contenga la iteración de dos elementos, los cuales se pueden desplazar en una pantalla.

### Descripción de la interfaz (pantalla)
1. Debe ser de color beige.
2. Tiene un tamaño de 700 x 700 pixeles.
3. Debe contener los elementos que van a colisionar.

### Descripción de los elementos
Deben existir dos elementos con las siguientes caracteristicas: 
1. Los elementos corresponden a dos figuras cuadradas
2. Cada cuadrado debe tener un tamaño de 1.5 cm
3. Debe existir un cuadrado de color negro y otro de color verde.

### Movimeinto de los elementos
El movimiento puede ser originado por el usuario o aleatoriamente por cada elemento, a traves de un menú de opciones, se generara el movimiento de la siguiente manera: 
Flujo 1: Si el usuario selecciona el boton "Movimiento aleatorio" los dos elementos se moveran aleatoriamente, el sistema sera el responsable de generar el movimiento y la colisión de los mismos.
Flujo 2: Si el usuario no marca el boton "Movimiento aleatorio", indica que el usuario es quien selecciona los elementos, genera el movimiento sobre ellos y la colisión.



Cada vez que los dos colisionen, se debe advertir al usuario que dichos elementos colisionaron.

## Modelado

### Diagrama de caso de uso
![alt text](https://github.com/felipedc09/ColisionadorDeElementos/blob/master/Diagrama%20UML%20del%20caso%20de%20uso.png)

### Diagrama de clases

![alt text](https://github.com/felipedc09/ColisionadorDeElementos/blob/master/Diagrama%20de%20clases.png)
