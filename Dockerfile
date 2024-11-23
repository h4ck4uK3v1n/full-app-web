# Define base stage
FROM node:20.18.0-alpine
WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN yarn install

COPY . /app

RUN yarn build


EXPOSE $PORT

CMD ["sh", "-c", "yarn start -p $PORT"]