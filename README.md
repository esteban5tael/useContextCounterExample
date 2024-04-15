# Aplicación de Contador con React y Contexto

Esta aplicación de contador desarrollada en React utiliza el Context API para administrar el estado del contador en toda la aplicación de manera eficiente. Permite a los usuarios realizar operaciones básicas como incrementar, decrementar y reiniciar el contador.

## Descripción del Proyecto

El proyecto consta de varios componentes clave que trabajan juntos para crear una experiencia de usuario fluida y receptiva:

-   **App.jsx**: Este componente sirve como la raíz de la aplicación. Aquí, importamos el componente `App` y lo envolvemos dentro de un contenedor `div` con una clase de Bootstrap para mejorar la estructura visual de la aplicación.

-   **CounterProvider.jsx**: En este archivo, creamos un contexto de contador utilizando la función `createContext()` de React. Luego, definimos el componente `CounterProvider`, que es un proveedor de contexto que envuelve toda la aplicación. Este proveedor de contexto proporciona el estado del contador y las funciones para modificarlo a través del contexto.

-   **CounterHeader.jsx**: Este componente funcional muestra el valor actual del contador. Utiliza el hook `useContext` para acceder al contexto del contador y mostrar el valor en un elemento `span`.

-   **CounterControlls.jsx**: Este componente funcional proporciona botones para incrementar, decrementar y reiniciar el contador. Al igual que `CounterHeader.jsx`, utiliza el hook `useContext` para acceder al contexto del contador y llamar a las funciones apropiadas para actualizar el estado del contador.

## Funcionalidades Principales

-   **Incrementar el Contador**: Al hacer clic en el botón "Incrementar Contador", el valor del contador aumenta en uno.
-   **Decrementar el Contador**: Al hacer clic en el botón "Decrementar Contador", el valor del contador disminuye en uno.
-   **Reiniciar el Contador**: Al hacer clic en el botón "Reiniciar Contador", el valor del contador se restablece a cero.

## Instrucciones de Uso

1. Clona el repositorio en tu máquina local:

```bash
git clone <URL_DEL_REPOSITORIO>
```

2. Navega hasta el directorio del proyecto:

```bash
cd nombre_del_proyecto
```

3. Instala las dependencias necesarias:

```bash
npm install
```

4. Inicia la aplicación:

```bash
npm start
```

5. Abre tu navegador web y ve a `http://localhost:3000` para ver la aplicación en funcionamiento.

## Contribución

¡Las contribuciones son bienvenidas! Si deseas contribuir a este proyecto, no dudes en abrir un problema o enviar una solicitud de extracción en el repositorio.
