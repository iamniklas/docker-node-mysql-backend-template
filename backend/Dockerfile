# Stage 1: Install dependencies
FROM node:16 AS dependencies
WORKDIR /app
COPY package*.json ./
RUN npm install

# Stage 2: Copy project files and dependencies
FROM node:16-slim
WORKDIR /app
COPY --from=dependencies /app/node_modules ./node_modules
COPY . .

# Expose port (if your app listens on a port)
EXPOSE 3000

# Command to run your app
CMD ["node", "index.js"]
