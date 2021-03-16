FROM node:12.18.3-slim

WORKDIR /usr/app/00-static
COPY . .
RUN yarn

EXPOSE 9000
CMD yarn start