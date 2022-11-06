FROM node:14-alpine
RUN mkdir -p /home/pstmts
WORKDIR /home/pstmts
COPY package.json ./
RUN npm install
COPY . .


ARG USE_DEVTOOLS=false

ENV USE_DEVTOOLS=$USE_DEVTOOLS

RUN npm run build

EXPOSE 3000

ENTRYPOINT [ "node", "nodeServer.js" ]