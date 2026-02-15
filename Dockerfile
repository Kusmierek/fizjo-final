# Use official Node.js image
FROM node:20-alpine AS deps
WORKDIR /app

# Install pnpm globally
RUN npm install -g pnpm

# Copy manifest files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install --frozen-lockfile

# Build
FROM node:20-alpine AS builder
WORKDIR /app
RUN npm install -g pnpm
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

# Runtime
FROM node:20-alpine AS runner
WORKDIR /app
RUN npm install -g pnpm
ENV NODE_ENV=production

COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

EXPOSE 3000
CMD ["pnpm", "start"]