![MercadoLibre](./src/favicon.svg "MercadoLibre")
# MercadoLibre challenge
Basado en el challenge de [goncy.](https://www.twitch.tv/goncypozzo)
Disponible en [mercadolibre-details-challenge.](https://github.com/goncy/mercadolibre-details-challenge)

Por [donosti1](https://github.com/donosti1/) con el objetivo de tener algo para mostrar en react (+ algo de typescript) en el portfolio. Se puede ver online en [Github Pages.](https://donosti1.github.io/mercadolibre-details-challenge/) Al final del documento original se encuentra el estado de avance del challenge.

# MercadoLibre challenge
Debemos crear un clon de [la página de detalle de producto](https://articulo.mercadolibre.com.ar/MLA-741093357-peluche-stitch-angel-lilo-1-metro-100cm-reales-gigante-_JM#position=5&search_layout=stack&type=item&tracking_id=839ad6c1-5098-41e7-914b-75a960f45a3b) de Mercado Libre.

# API
Podés encontrar los mocks necesarios para empezar a trabajar en `./src/product/mocks` con sus respectivos types. Sin embargo, algunos de los campos necesarios para completar la pantalla no están ahí, queda en vos agregarlos!

## Definición funcional
Debemos intentar llegar a un resultado visual lo más aproximado posible, siendo los siguientes los elementos requeridos.

* Carousel que cambia de imágen al clickear (no en hover).
* Area de detalle del producto (condición, cantidad vendida, título, precio).
* Botones de `Comprar ahora` y `Agregar al carrito`.
* Sección de preguntas y respuestas.

El resto de los elementos son opcionales pero altamente recomendados.

## Definiciones técnicas
* La aplicación debe estar publicada y debe ser accesible mediante un link.
* El código de la aplicación debe estar subida a un repositorio de público acceso.

> El repositorio cuenta con TypeScript y ChakraUI ya configurados, pero cualquier librería puede ser usada.

## Puntos extra
* - [x] Poder agregar comentarios (no deben guardarse en ningun lado)
* - [x] Poder puntuar opiniones
* - [x] Poder ver opiniones por tipo
* - [x] Modo oscuro

---

No te quedes acá, el repositorio ya tiene el router configurado para agregar la pantalla de inicio, agregá todas las pantallas que quieras!

---
---

#### Bugs encontrados a la fecha
- Fuentes
- Carousel: recuadro imagen seleccionada al cargar
- Convertir en links la cabecera de la interna de detalle (breadcrumbs)
- 
#### Próximos pasos (luego de alguno de los puntos extras)
- Completar el header
- Hover de la imagen visualizada del producto
- Productos del mismo vendedor