FROM node:lts-bullseye
RUN mkdir -p /demo-app

WORKDIR /demo-app

COPY ./app /demo-app

RUN npm install -g pm2

RUN npm install

EXPOSE 3000

CMD ["pm2-dev", "src/index.js"]