# Define base stage
FROM node:20.18.0-alpine

RUN apk add --no-cache curl

WORKDIR /app

COPY package.json /app
COPY yarn.lock /app

RUN yarn install

COPY . /app

ARG NEXT_PUBLIC_API_BASE_URL
ENV NEXT_PUBLIC_API_BASE_URL=$NEXT_PUBLIC_API_BASE_URL

RUN yarn build


EXPOSE $PORT

CMD ["sh", "-c", "yarn start -p $PORT"]