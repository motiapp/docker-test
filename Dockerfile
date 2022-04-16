FROM node:lts-bullseye
RUN mkdir -p /demo-app

WORKDIR /demo-app

COPY ./app /demo-app

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]