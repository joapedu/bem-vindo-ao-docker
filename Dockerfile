# Inicie sua imagem Docker com uma imagem node base
FROM node:18-alpine

# O diretório /app deve atuar como diretório principal da aplicação no ambiente Docker
WORKDIR /app

# Copiando e repassando o package.json
COPY package*.json ./

# Copie os diretórios locais aos diretórios do ambiente Docker (/app)
COPY ./src ./src
COPY ./public ./public

# Instalar node packages, instalar serve, buildar a aplicação, e remover as depêndencias ao fim.
RUN npm install \
    && npm install -g serve \
    && npm run build \
    && rm -fr node_modules

# Expor a porta.
EXPOSE 3000

# Iniciar aplicação.
CMD [ "serve", "-s", "build" ]