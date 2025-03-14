FROM node:20.17.0-alpine AS base

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install

FROM base AS build

COPY . .

RUN yarn prisma generate

RUN yarn build 

FROM base AS production

ENV NODE_ENV=production

EXPOSE 5000

WORKDIR /app

COPY --from=build /app/package.json /app/yarn.lock

RUN yarn install --production

COPY --from=build /app/dist ./dist 
COPY --from=build /app/prisma/__generated__ ./prisma/__generated__ 

CMD ["node", "dist/main"]