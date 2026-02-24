FROM node:22 AS build

WORKDIR /app

COPY ./package.json ./package-lock.json ./
RUN npm config set strict-ssl false

RUN npm install

COPY . .

RUN npm run build -- --configuration production

# etapa 2: rodar a aplicação

FROM nginx:alpine

RUN rm -rf /usr/share/nginx/html/*

COPY --from=build /app/dist/passeio-app/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]

