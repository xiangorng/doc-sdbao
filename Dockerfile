FROM node:lts

WORKDIR /usr/src/app
# COPY docs/ ./docs
COPY package.json ./
RUN npm install

EXPOSE 3000
EXPOSE 35729
CMD [ "npm", "start" ]
