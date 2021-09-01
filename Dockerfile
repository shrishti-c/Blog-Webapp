FROM node:15.13-alpine
WORKDIR /newsapp
ENV PATH="./node_modules/.bin:$PATH"
COPY . .
RUN apt-get update && apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_8.x | bash -
RUN apt-get update && apt-get install -y nodejs
RUN npm run build
CMD ["npm", "start"]
