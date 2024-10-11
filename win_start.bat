@echo off
REM ayuda montage del docker https://medium.com/@leytor/como-dockerizar-una-aplicaci%C3%B3n-en-react-v18-con-typescript-77aeec01756c
REM instalar tailwindcss https://tailwindcss.com/docs/guides/create-react-app

REM Construir la imagen de Docker
docker build -t pruebadorlet .

REM Arrancar el contenedor en modo desarrollo
docker run -d -p 3000:3000 -v %cd%:/app -v /app/node_modules --name pruebadorlet pruebadorlet