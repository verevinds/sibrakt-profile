
FROM node:14

RUN mkdir -p /app
COPY . /app

WORKDIR /app

RUN yarn install
RUN npm install pm2 -g

CMD ["pm2-runtime", "./src/index.ts"]