# Base node image
FROM node:22.13.0-alpine3.21
# Set working directory
WORKDIR /app
COPY package*.json ./
RUN npm install -g pnpm@latest-10
RUN pnpm install
# Copy the rest of the files to the container
COPY . .
EXPOSE 5173
CMD ["pnpm", "dev"]