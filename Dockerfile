# 1️⃣ Базовый образ
FROM node:20.17.0-alpine AS base

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json yarn.lock ./
RUN yarn install

# 2️⃣ Билд-стадия
FROM base AS build

COPY . .

# Генерируем Prisma Client
RUN yarn prisma generate
RUN yarn build

# 3️⃣ Production-стадия
FROM node:20.17.0-alpine AS production

ENV NODE_ENV=production

WORKDIR /app

# Копируем только нужные файлы
COPY --from=build /app/package.json /app/yarn.lock ./
RUN yarn install --production

# Копируем сгенерированный Prisma Client и схему
COPY --from=build /app/node_modules/.prisma /app/node_modules/.prisma
COPY --from=build /app/prisma/schema.prisma /app/prisma/schema.prisma

# Копируем скомпилированный код NestJS
COPY --from=build /app/dist ./dist 

CMD ["node", "dist/main"]
