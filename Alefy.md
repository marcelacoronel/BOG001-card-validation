# All Drive

##### _Viaja donde quieras y disfruta de las mejores vistas de Colombia en los coches de All Drive._

## 1. Preámbulo

El [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn),también llamado algoritmo de módulo 10, es un método de suma de verificación, se utiliza para validar números de identificación; tales como el IMEI de los celulares, tarjetas de crédito, etc.

## 2. Definición del producto

All Drive es una companía que ofrece el servicio de renta de autovomiles en Colombia. Nuestro aplicación web de alquiler permite que las personas puedan tener una experiencia más fácil y sencilla para adquirir este tipo de servicio de acuerdo a su necesidad.  El sistema de alquiler se limitó a la selección del tiempo de uso por el usuario sea por horas o días, la validación de una tarjeta de crédito para realizar el pago electrónico del servicio seleccionado utilizando el [algoritmo de Luhn](https://es.wikipedia.org/wiki/Algoritmo_de_Luhn) y la implementación de otra funcionalidad permite ocultar todos los digitos de la tarjeta ingresada menos los últimos cuatro para mayor seguridad. Para esto, utilizamos HTML, CSS y JavaScript como herramientas.

## 4. Objetivo general 

Construir una aplicación web que le permita al usuario interactuar con un servicio de alquiler de autos validando su tarjeta de crédito como método de pago utilizando HTML, CSS y JavaScript como tecnologías.

## 6. Funcionalidades

- Solo permite el uso de caracteres numéricos [0 - 9] para el ingreso del número de tarjeta.
- Se realiza la validación de número de tarjeta usando el algoritmo de Luhn:
    - Obtenemos la reversa del número a verificar.
    - A todos los números que ocupan una posición par se les debe multiplicar por dos, si este número es mayor o igual a 10, debemos sumar los dígitos del resultado
    - Verificamos que el número es válido cuando la suma de sus digitos finales es un múltiplo de 10.
- Se ocultan todos los dígitos de de la tarjeta ingresada menos los últimos cuatro. 

## 5. Producto final


## 7. Investigación (UX) - Interfaz de usuario (UI)

### Definición del producto 

- **El usuario:** Personas mayores de 18 años con tarjeta de crédito bancaria con licencia de conducción vigente y válida en el territorio colombiano que viajan desde/hacia fuera de la ciudad, realizan viajes de negocios, turismo  o simplemente son  residentes locales que requieren el servicio.

- **Relación usuario/producto:** Producto de uso ante necesidad de solicitar un medio tranporte vehicular particular de pago mediante tarjeta de crédito. 

- **Solución:** La aplicación web presentada debe permite al usuario realizar un pago electrónico seguro mediante la validación de su tarjeta de crédito mientras navega por una interfaz amigable para acceder al servicio de alquiler del vehículo.

## Interfaz de usuario 

- ##### Sketch
    Se recomendó hacerlo a papel y lápiz, finalmente lo realizamos con paint, nos resultó más fácil en su momento. 
![view 2](https://trello-attachments.s3.amazonaws.com/5ed5317b0550d78851ce8b88/5ed538fbfdfb6e5186c74bb4/443cba574732e19ed11a6e4760a158d7/image.png)

    **Feedback:** _La aplicación es clara en cuanto a temática, interfaz amigable y usabilidad. Mejorar encabezado, unificar tamaños de los textos en los mensajes de salida y botones._
 - ##### Prototipo I
    Se usó Figma como herramienta de diseño y realizamos el primer prototipo. La vista 1 consta de dos secciones simples, la primera es de información personal en esta, el usuario debe ingresar su nombre completo e identificación, en la segunda sección información de pago, debe ingresar su número de tarjeta. Se eligió una paleta de colores y las dos tipografías a utilizar: [Cabin](https://fonts.google.com/specimen/Rock+Salt?query=Rock+sa&selection.family=Cabin|Rock+Salt&sidebar.open) y [Rock Salt](https://fonts.google.com/specimen/Cabin?query=Rock+sa&selection.family=Cabin|Rock+Salt&sidebar.open).
![view 2](https://i.imgur.com/oX9AnZT.png)
![view 2](https://i.imgur.com/v6T5aAE.jpg)
    **Feedback:** _El formulario debe ser más intuitivo con el usuario, se recomienda usar nuevos botones para refrescar la información y/o volver a empezar, el contraste del color de fondo con el color de letra hace que sea poco legible._

 - ##### Prototipo II
    El diseño inicial cambió radicalmente, se añadió una barra de navegación, se posicionó la ventana de validación al lado izquierdo, se añadieron nuevos botones y se cambio el fondo por algo más llamativo y relacionado al servicio que se quiere prestar. Se revisó el contraste de los elementos y la legibilidad de cada texto. 
![view 2](https://i.imgur.com/ZYaZI6N.jpg)
    **Feedback:** Se necesita un background más acorde a los colores del tema. Una menú inicial donde se describan los serivicios pues aún no es claro de qué trata el aplicativo web. Títulos más amigables con el usuario. 
- ##### Prototipo Final
    Nueva vista inicial con elementos descriptivos de los serivicios prestados. Botones más intuitivos y funcionales para navegar entre regresar o seleccionar un servicio diferente. 
![view 2](https://i.imgur.com/ZYaZI6N.jpg)