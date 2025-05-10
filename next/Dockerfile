# /next/Dockerfile

FROM --platform=linux/amd64 node:18-slim

WORKDIR /app

# Copy package files first, install deps
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the project AFTER deps are installed
COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
