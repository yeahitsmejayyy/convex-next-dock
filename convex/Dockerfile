# /convex/Dockerfile

FROM node:18-alpine

WORKDIR /app

# Install Convex CLI globally
RUN npm install -g convex@latest

# Copy the Convex project files
COPY . .

# Expose Convex ports
EXPOSE 3210
EXPOSE 3211

CMD ["convex", "dev", "--hostname", "0.0.0.0"]
