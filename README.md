# Generador de librería CSS para SVG
Tarea que genera una Librería CSS a partir de la definición de un diccionario que identifique diferentes capas al construir las imágenes vectoriales que permita diferenciar las partes de la imagen como el fondo,  modificar diferentes características como el color, añadir animaciones, etc.

## Requisitos
Tener NodeJS y NPM instalados y Gulp de manera global.

## Instalación
Clonar o descargar repositorio.
Instalar las dependencias
```bash
$ npm install
```
o
```bash
$ yarn
```

## Ejecutar

Para ejecutar la tarea puedes usar cualquiera de los comando siguientes

```bash
$ npm start
```
o
```bash
$ yarn start
```
o
```bash
$ gulp
```

## Configuración

En el archivo `./config.js` están definidas las opciones de configuración.
Clave | Descripción | Valor por defecto
--- | --- | ---
**src**  | Directorio donde se encuentran los SVG  | `./src/svg`
**dest** | Directorio donde se generara el sprite | `./build/svg`
**libname** | Nombre de la librería CSS resultante | `next-power-svg`


# Implementación

Incluir

```HTML

```
