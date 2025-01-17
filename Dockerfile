# -----> Building

FROM node:22.13.0-alpine3.21 as builder
WORKDIR /app

COPY package*.json ./

RUN npm install -g pnpm@latest-10
RUN pnpm install

# Copy the rest of the files to the container
COPY . .

RUN pnpm build
# Remove dev dependecies
RUN pnpm prune --production

# -----> Running
FROM node:22.13.0-alpine3.21
WORKDIR /app

COPY --from=builder /app/package.json ./
COPY --from=builder /app/pnpm-lock.yml ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.react-router ./react-router
COPY --from=builder /app/react-router.config.ts ./
COPY --from=builder /app/public ./public

EXPOSE 5173
CMD ["pnpm", "preview"]