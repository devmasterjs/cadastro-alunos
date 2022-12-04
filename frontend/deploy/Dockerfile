FROM nginx

WORKDIR /usr/share/react

RUN curl -fsSL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs
RUN npm install -g npm@9.1.3

COPY . .
RUN npm install

RUN npm run build

RUN rm -r /usr/share/nginx/html/*
RUN cp -a build/. /usr/share/nginx/html
