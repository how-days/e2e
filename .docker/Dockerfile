FROM node:20-bullseye AS prebuild-test

# Custom entrypoint to reuse dependencies
COPY .docker/entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

RUN npx playwright install --with-deps

RUN mkdir /app-deps && mv node_modules /app-deps/node_modules