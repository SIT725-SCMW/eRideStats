FROM node:16

WORKDIR /app

COPY . .

EXPOSE 3000

# dockerignore node, so that
RUN npm install

# on a run create a .env file - copy .env.example file to .env file (cp = copy)
RUN cp .env.example .env

# command called ["npm", "start"] (how the image gonna run, on package.json we wrote script that npm start to run server.js)
CMD ["npm", "start"]