#!/bin/bash

# Nombre del contenedor
CONTAINER_NAME=pruebadorlet

# Detener el contenedor
docker stop $CONTAINER_NAME

# Eliminar el contenedor
docker rm $CONTAINER_NAME