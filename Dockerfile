FROM node:16-alpine
ENV TZ=Europe/Rome
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm ci
COPY . ./
RUN npm run build
ENV HOST 0.0.0.0
EXPOSE 3000
CMD [ "npm", "start" ]