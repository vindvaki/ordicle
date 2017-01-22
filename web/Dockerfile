FROM node:7.4

# Install yarn
RUN apt-get update && apt-get install apt-transport-https
RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add -
RUN echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list
RUN apt-get update && apt-get install yarn

# create app directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

# install app dependencies
COPY package.json /usr/src/app
COPY yarn.lock /usr/src/app
RUN yarn install

# bundle app source
COPY . /usr/src/app

EXPOSE 8000
CMD ["yarn", "start"]
