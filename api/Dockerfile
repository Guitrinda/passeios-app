FROM node:22-alpine

WORKDIR /app

RUN npm config set strict-ssl false

COPY ./db.production.json /app/

RUN npm install json-server@0.17.4


EXPOSE 4000

CMD ["npx", "json-server", "--watch", "db.production.json", "--host", "0.0.0.0", "--port", "4000"]