FROM node:14.9

WORKDIR /api

ENV PATH /app/node_modules/.bin:$PATH

COPY package*.json ./
RUN npm install --silent

COPY . ./
EXPOSE 1337
CMD ["node", "server.js"]
