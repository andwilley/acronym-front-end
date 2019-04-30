# build environment
FROM node as builder
RUN mkdir /usr/src/app
WORKDIR /usr/src/app
ARG REACT_APP_API_BASE_URL=localhost
ENV REACT_APP_API_BASE_URL $REACT_APP_API_BASE_URL
ENV PATH /usr/src/app/node_modules/.bin:$PATH
COPY package.json /usr/src/app/package.json
RUN npm install --silent
RUN npm install react-scripts -g --silent
COPY . /usr/src/app
RUN npm run build

# production environment
FROM nginx:latest
COPY --from=builder /usr/src/app/build /usr/share/nginx/html
EXPOSE 8080
CMD ["nginx", "-g", "daemon off;"]
