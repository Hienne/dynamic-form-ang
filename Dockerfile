# Stage 1
FROM node:16-alpine as builder
# tạo thư mục app
RUN mkdir /app
# cd vào thư mục app
WORKDIR /app
# copy file package.json, package-lock.json vào thư mục app
COPY . .

RUN npm install

RUN npm run build --prod

# Stage 2
FROM nginx:alpine

COPY --from=builder /app/dist/dynamic-form-ang /usr/share/nginx/html

EXPOSE 80