# Use a imagem node como base
FROM node:20-alpine

# Diretório de trabalho no contêiner
WORKDIR /app

# Copie o arquivo package.json e package-lock.json para o diretório de trabalho
COPY package*.json ./

# Instale as dependências
RUN npm install

# Copie todos os arquivos do projeto para o diretório de trabalho
COPY . .

# Execute o servidor de desenvolvimento do React
CMD ["npm", "start"]
