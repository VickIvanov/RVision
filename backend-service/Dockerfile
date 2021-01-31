FROM node:12.13-alpine As development

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm install

CMD ["npm", "run", "start:dev"]
