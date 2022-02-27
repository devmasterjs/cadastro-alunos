FROM node:lts-alpine

# update npm
RUN npm install -g npm@8.5.2

# install pm2
RUN npm install pm2 -g

# workspace folder
RUN mkdir -p /app/static/uploads/images
WORKDIR /app

# copy /dist contents
COPY ./dist .

# install app dependencies
RUN npm install

# copy .env file
COPY ./deploy/.env .

# run pm2
CMD ["pm2-runtime", "server.js"]
