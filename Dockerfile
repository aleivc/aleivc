FROM node:alpine
RUN mkdir -p /usr/src/next-website/test1
WORKDIR /usr/src/next-website/test1
COPY . .
RUN npm i
RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
