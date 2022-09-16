# Stage 0, "build-stage", based on Node.js to build the frontend
FROM node:alpine as build
WORKDIR /app
COPY package*.json /app/
RUN yarn install
COPY . ./
RUN yarn run build
    
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]