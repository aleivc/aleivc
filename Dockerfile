FROM node:12
RUN mkdir -p /usr/src/next-website/test1
WORKDIR /usr/src/next-website/test1
COPY . .
RUN yarn cache clean && yarn --update-checksums
RUN yarn build 

EXPOSE 3000

CMD ["yarn", "start"]
