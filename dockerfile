# Stage 1: Build
FROM node:20-alpine AS build
# Directorio donde se mantendrán los archivos de la app
WORKDIR /app
# Copiar el package.json y el package-lock en nuestro WORKDIR
COPY package*.json ./
# Instalar dependencias
RUN npm install
# RUN npm install --legacy-peer-deps
# permitir que el directorio node_modules/.cache sea accesible
RUN mkdir node_modules/.cache && chmod -R 777 node_modules/.cache
# RUN mkdir -p node_modules/.cache && chmod -R 777 node_modules/.cache
# Copiar todos los archivos
COPY . .
# Exponer el puerto en el que la aplicación se ejecutará
EXPOSE 3000

# Comando para iniciar la aplicación en modo desarrollo
CMD ["npm", "start"]

# construcción imagen
# docker build -t pruebadorlet .