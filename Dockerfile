FROM node:18.12.1

WORKDIR /user/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8005

CMD ["node","index.js"]