Esta api fue desarrollada en Node Js con el framework Express

### Endpoints :

1. GET/products </br>
-respuesta: todos los productos.
2. GET/categories </br>
-respuesta: todas las categorias.
3. GET/products?name=(productName) </br>
-respuesta: devuelve los productos relacionados con una palabra clave (productName).
4. GET/products/discount?value=(true, false)&sort=(asc, des) </br>
-respuesta: devuelve los productos que no tienen descuento en caso value sea false, de lo contrario, aquellos productos con descuesto. Con sort igual a asc o des para ordenar los productos con descuesto ascendente o descendentemente respectivamente.
5. GET/products/name?sort=(asc, des) </br>
-respuesta: devuelve los productos ordenamos alfabeticamente con sort igual a asc(A - Z) o des (Z - A).
6. GET/products/price?sort=(asc, des) </br>
-respuesta: devuelve los productos ordenamos por precio con sort igual a asc(menor a mayor) o des (mayor a menor).
7. GET/products/category?name=(categoryName) </br>
-respuesta: devuelve aquellos productos perteneciente a una categoria en particular (categoryName).


### Pasos para levantar el servidor en el puerto 3000:
1. npm install
2. npm start
