FROM node:14-alpine

WORKDIR /app

COPY . .

EXPOSE 8000

# dockerignore node, so that -> running all the npm
RUN npm install

# on a run create a .env file - copy .env.example file to .env file (cp = copy)
RUN cp .env.example .env

# command called ["npm", "start"] (how the image gonna run, on package.json we wrote script that npm start to run server.js)
CMD ["npm", "start"]

#docker build -t <docker_username>/<project_name> . (no uppercase for the project_name)