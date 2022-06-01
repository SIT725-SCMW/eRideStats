FROM node:14-alpine

WORKDIR /app

COPY . .

EXPOSE 8000

RUN npm install

RUN cp .env.example .env

CMD ["npm", "start"]