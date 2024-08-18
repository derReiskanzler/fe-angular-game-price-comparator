FROM node:21 AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# Debug
RUN ls -R /app/dist  # This will list the contents of your dist folder


FROM nginx:alpine

# ARG API_BASE_URL=http://localhost:8080/api
# ARG ENV=local

COPY .ops/nginx.conf /etc/nginx/conf.d/default.conf

COPY --from=build /app/dist/ /usr/share/nginx/html

# Create a config file with placeholders
# RUN echo "window.ENV = API_BASE_URL: '${API_BASE_URL}', ENV: '${ENV}' }" > /usr/share/nginx/html/env-vars.js

# COPY ./src/assets/env-vars/env-vars.sample.js /usr/share/nginx/html/assets/env-vars/env-vars.js

COPY .ops/entrypoint.sh /
RUN chmod +x /entrypoint.sh

EXPOSE 80

ENTRYPOINT ["/entrypoint.sh"]