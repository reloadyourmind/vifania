FROM node:18
WORKDIR /var/www/html
COPY --chown=node:node package.json .
RUN yarn install
COPY --chown=node:node . .
USER node
CMD yarn run build
