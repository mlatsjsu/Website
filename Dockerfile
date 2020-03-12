# base image
FROM node:12.2.0-alpine

EXPOSE 3000
# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install and cache app dependencies
COPY package.json /app/package.json

RUN npm install

COPY . .

# start app
CMD ["npm", "start"]
