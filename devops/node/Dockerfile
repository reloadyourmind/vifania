# Base Image
FROM node:18-alpine

# Working Directory
WORKDIR /var/www/html
# Copying Dependencies
COPY package.json yarn.lock tsconfig.json webpack.config.js ./
# Install Dependencies
RUN yarn install
# Change permissions
#RUN chown -R node:node ./node_modules
## Build frontend app
#RUN yarn run build
EXPOSE 3000
