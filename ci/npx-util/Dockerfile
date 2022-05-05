FROM node:18.1.0-alpine
COPY entrypoint.sh /
RUN chmod +x entrypoint.sh
WORKDIR /app
USER node
ENTRYPOINT [ "sh", "/entrypoint.sh", "node:18.1.0-alpine", "npx" ]