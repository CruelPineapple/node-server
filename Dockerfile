FROM node:14.16.0

WORKDIR /usr/app/00-static
COPY . .
RUN yarn

EXPOSE 9000
CMD yarn start