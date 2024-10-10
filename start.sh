# ayuda montage del docker https://medium.com/@leytor/como-dockerizar-una-aplicaci%C3%B3n-en-react-v18-con-typescript-77aeec01756c
# instalar tailwindcss https://tailwindcss.com/docs/guides/create-react-app


# arrancar contenedor
#!/bin/bash

# Construir la imagen de Docker
docker build -t pruebadorlet .

# Arrancar el contenedor en modo desarrollo
docker run -d -p 3000:3000 -v $(pwd):/app -v /app/node_modules --name pruebadorlet pruebadorlet