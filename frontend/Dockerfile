FROM node:14.6.0 AS base

ENV LANG C.UTF-8

WORKDIR /frontend/usr/app

###############################################################################

FROM base AS dependencies

COPY package*.json ./

RUN npm set progress=false && npm config set depth 0 && npm ci

###############################################################################

FROM base AS release

COPY --from=dependencies /frontend/usr/app/node_modules ./node_modules
COPY . .

EXPOSE 8080
CMD [ "npm", "run", "serve" ]
