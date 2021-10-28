FROM node:14.13.1-slim as build
RUN mkdir -p /usr/src/next-website/test1
WORKDIR /usr/src/next-website/test1
COPY . .
RUN yarn cache clean && yarn --update-checksums
RUN yarn install
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
