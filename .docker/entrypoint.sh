#!/bin/bash

# Copier les node_modules dans le répertoire de travail si nécessaire
if [ -d "/app/node_modules" ] && [ ! -d "./node_modules" ]; then
  cp -r /app/node_modules ./node_modules
fi

# Exécuter la commande spécifiée dans le Dockerfile
exec "$@"