FROM node:14 as build
WORKDIR /app

COPY package*.json ./

COPY . .
RUN npm run build

# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
# new
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]