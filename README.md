# Proyecto de Juego en React + TypeScript

Este proyecto es un juego simple implementado en React utilizando TypeScript. A continuación, se presentan las instrucciones para implementar y ejecutar el proyecto localmente, así como la documentación del código.

### Prerequisitos

Antes de comenzar, asegúrate de tener instalados los siguientes programas en tu computadora:

- **Node.js**: [Descargar Node.js](https://nodejs.org/)
- **npm** (que se incluye con Node.js): Para manejar las dependencias del proyecto.

### Instrucciones para Ejecutar el Proyecto

## 1. Clonación de archivos

Debe clonar el siguiente repositorio: https://github.com/javxdev/juego-interactivo.git

## 2. Instalar Dependencias

Una vez clonado el repositorio, abre la carpeta donde está guardado el proyecto con visual studio code o tu editor de código de preferencia.
Hecho esto, instala las dependencias del proyecto utilizando el siguiente comando:

npm install

## Por último, para iniciar la aplicación, usa el siguiente comando:

npm run dev

# Documentación del Código

## App.tsx

Contiene el componente principal de la aplicación. Aquí se manejan:

- El estado del juego.
- El canvas para representar el juego.
- Los eventos de clic del usuario.

## game.ts

Aquí se define el estado inicial del juego y se implementan funciones para actualizar el estado y comprobar los clics. Las funciones son:

### `initialState`
Define el estado inicial del juego, que incluye:
- La puntuación del jugador.
- La posición de la bola.

### `updateGameState`
Genera nuevas coordenadas para la bola dentro de un área delimitada. Limita su aparición a un 10% del margen inferior.

### `increaseScore`
Incrementa la puntuación del jugador en uno.

### `checkClick`
Comprueba si el clic del ratón está dentro del área de la bola.
