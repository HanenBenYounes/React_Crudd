# Étape 1 : Utiliser une image Node.js officielle
FROM node:18

# Étape 2 : Définir le répertoire de travail
WORKDIR /app

# Étape 3 : Copier les fichiers package.json et package-lock.json
COPY package.json package-lock.json ./

# Étape 4 : Installer les dépendances
RUN npm install

# Étape 5 : Copier tous les fichiers du projet
COPY . .

# Étape 6 : Construire l'application React
RUN npm run build

# Étape 7 : Utiliser "serve" pour servir l'application
RUN npm install -g serve
CMD ["serve", "-s", "build"]

# Étape 8 : Exposer le port 3000
EXPOSE 3000
