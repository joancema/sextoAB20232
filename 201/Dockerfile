FROM node
COPY paackage.json /var/www
WORKDIR /var/www
# COPY ./dist ./dist
RUN npm install
EXPOSE 3000
ENTRYPOINT [ "npm","start" ]