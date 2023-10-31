# development
FROM node:18.17.0-alpine3.18 AS development

# Setting up the work directory
WORKDIR /app

# Copying all the files in our project
COPY . .

RUN yarn install

# building
FROM node:18.17.0-alpine3.18 AS builder

# Setting up the work directory
WORKDIR /app

# Copying all the files in our project
COPY . .

# From development
COPY --from=development /app/node_modules ./node_modules

# Build the app
RUN yarn build

# hosting
# Bundle static assets with nginx
FROM nginx:1.23-alpine AS production

ENV NODE_ENV production

RUN echo "http://uk.alpinelinux.org/alpine/v3.8/main" > /etc/apk/repositories ; \
    echo "http://uk.alpinelinux.org/alpine/v3.8/community" >> /etc/apk/repositories ; \
    apk add --no-cache bash ; \
    echo "http://dl-cdn.alpinelinux.org/alpine/v3.8/main" > /etc/apk/repositories ; \
    echo "http://dl-cdn.alpinelinux.org/alpine/v3.8/community" >> /etc/apk/repositories

COPY    ./entrypoint.sh /entrypoint.sh

# Copy built assets from builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Add your nginx.conf
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port
EXPOSE 80

# Start nginx
RUN     chmod +x /entrypoint.sh
CMD     [ "/entrypoint.sh" ]