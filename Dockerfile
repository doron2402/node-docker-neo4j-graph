FROM strongloop/node:latest

WORKDIR /var/www/api
ADD . /var/www/api
RUN npm cache clean && npm install

ENV NODE_ENV develop 
ENV PORT 9999
EXPOSE 9999

CMD ["node", "app.js"]


