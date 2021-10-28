FROM node:alpine
RUN mkdir -p /usr/src/next-website/test1
WORKDIR /usr/src/next-website/test1
COPY . .
RUN yarn
RUN yarn build

EXPOSE 3000

CMD ["yarn", "start"]
