FROM node:16.15.0-alpine

WORKDIR /app

COPY package.json .

RUN npm install -g serve
RUN npm install

COPY . .
RUN npm run build

CMD serve --single build