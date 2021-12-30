FROM node:lts-alpine
WORKDIR /app
COPY package*.json /app/
COPY . ./
RUN npm install
RUN npm run build
EXPOSE 8200
CMD ["npm", "run", "serve"]
