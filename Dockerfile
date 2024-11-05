FROM node:18

RUN npm install -g npm@10.5.0

WORKDIR /app

RUN npm i -g @othentic/othentic-cli

ENTRYPOINT [ "othentic-cli" ]
