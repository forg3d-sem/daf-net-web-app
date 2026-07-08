FROM node:22-alpine AS build
WORKDIR /src
# Vite reads VITE_API_URL from the environment at build time and bakes it into
# the bundle (env vars present at build override .env files). Passed via
# docker-compose build.args.
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL
COPY package.json package-lock.json ./
RUN npm ci
COPY . .
RUN npm run build

FROM nginx:1.27-alpine AS runtime
RUN apk add --no-cache wget

# SPA fallback: unknown paths served by index.html.
RUN printf 'server {\n  listen 80;\n  root /usr/share/nginx/html;\n  location / { try_files $uri /index.html; }\n}\n' \
  > /etc/nginx/conf.d/default.conf

COPY --from=build /src/dist /usr/share/nginx/html

EXPOSE 80
# The nginx base image's default entrypoint/CMD serves the static build.