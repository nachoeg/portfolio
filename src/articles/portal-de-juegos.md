## Propuesta

Proyecto grupal propuesto por la materia de Seminario de Lenguajes: JS por la Facultad de Informática de la UNLP, con el fin de aprender a como armar una aplicación, tanto desde el front-end como desde el back-end.

<details>
  <summary > Consigna del Trabajo Práctico Integrador </summary>

Implemente un portal de juegos online como se describe a continuación.

El portal consta de una **página principal** que lista los juegos disponibles y permite acceder a cada uno de ellos para iniciar y jugar una partida.

Cada uno de los juegos tiene de 2 componentes:

- Una aplicación de front end que permite jugar desde el navegador.
- Una aplicación de back end implementada con nodejs que modela el juego con sus reglas y demás funcionalidades necesarias para permitir el desarrollo de una partida.

La comunicación entre ambas aplicaciones se realiza mediante una API REST.

Los juegos que deben implementarse son los que siguen.

- [Reversi](https://es.wikipedia.org/wiki/Reversi)
- [Batalla Naval](<https://es.wikipedia.org/wiki/Batalla_naval_(juego)>)

**Aclaración:** en este repositorio solo esta el Reversi, dado que el Batalla Naval no está 100% terminado y preferí no incluirlo.

### Consideraciones Generales

1. Todos los juegos se deben poder jugar normalmente de acuerdo a las reglas.
2. Las partidas deben poder ganarse, perderse o empatarse y el juego debe informar el resultado: ganador, perdedor, etc.
3. No debe ser posible hacer trampa o violar las reglas del juego usando las herramientas de desarrollo del navegador o invocando directamente a los servicios de la API REST. Por ejemplo, no puede ser posible que un mismo jugador coloque dos ﬁchas consecutivamente en el tablero del Reversi.
4. El trabajo debe ser desarrollado en grupo utilizando git. Los aportes de cada integrante del grupo deben verse reﬂejados en Gitlab.

### Consideraciones de la Aplicación de Back End

1. Debe estar implementada en Javascript usando nodejs teniendo en cuenta la posibilidad de que muchos jugadores se conecten y jueguen muchas partidas en forma simultánea.
2. Debe estar modularizada. Como mínimo es deseable que cada juego esté implementado en su propio módulo. En caso de tener funcionalidad común entre las implementaciones de dos o más módulos, esa funcionalidad puede ir en otro módulo que se comparta.
3. La API debe respetar los principios de una arquitectura REST.

### Consideraciones de la Aplicación de Front End

1. Si lo desea, puede utilizar librerías o frameworks para el desarrollo.
2. Ambos juegos requieren dos jugadores. Debe existir un mecanismo que permita a dos personas coordinarse para iniciar una partida entre sí.
3. Puede permitir continuar una partida luego de cerrar el navegador utilizando por ejemplo Cookies o LocalStorage.

</details>

<details>
  <summary >  Extras de la consigna </summary>

- Salas
- Selección de temas (claro, oscuro, clásico)
- Diseño responsive
- Ayudas con posibles movimientos
- Animaciones
- Sonidos
- Fullscreen

</details>

## Demo

<figure>

<img src="https://raw.githubusercontent.com/nachoeg/portal-juegos/master/screenshots/demo.gif">

<figcaption> Demo multijugador </figcaption>

</figure>

## Fotos

<figure>

<img src="https://raw.githubusercontent.com/nachoeg/portal-juegos/master/screenshots/inicio.webp">

<figcaption> Pagina de inicio </figcaption>

</figure>

<figure>

<img src="https://raw.githubusercontent.com/nachoeg/portal-juegos/master/screenshots/salas.webp">

<figcaption> Salas </figcaption>

</figure>

<figure>

<img src="https://raw.githubusercontent.com/nachoeg/portal-juegos/master/screenshots/reversi-claro.webp">

<figcaption> Reversi </figcaption>

</figure>

<figure>

<img src="https://raw.githubusercontent.com/nachoeg/portal-juegos/master/screenshots/reversi-oscuro.webp">

<figcaption> Tema oscuro </figcaption>

</figure>

<figure>

<img src="https://raw.githubusercontent.com/nachoeg/portal-juegos/master/screenshots/reversi-clasico.webp">

<figcaption> Tema clásico </figcaption>

</figure>
