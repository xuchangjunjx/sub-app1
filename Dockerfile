# # node打包
# FROM node:12.8.0-alpine as build
# WORKDIR /tmp
# COPY . .
# RUN npm install --registry https://registry.npm.taobao.org
# RUN npm run build
# nginx部署
FROM nginx:1.12.2
WORKDIR /usr/share/nginx/html/sub-app1/
RUN rm -f *
COPY docs .
COPY default.conf /etc/nginx/conf.d/default.conf
