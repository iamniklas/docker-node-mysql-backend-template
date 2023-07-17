FROM node:14

WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

ARG PORT=3000
ENV PORT $PORT
EXPOSE $PORT

VOLUME [ "/app/node_modules" ]

# Run the application.
CMD node index.js
