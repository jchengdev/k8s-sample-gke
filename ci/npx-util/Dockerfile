FROM node:18.5.0-alpine
COPY entrypoint.sh /
RUN chmod +x entrypoint.sh
WORKDIR /app
ENTRYPOINT [ "sh", "/entrypoint.sh", "node:18.5.0-alpine", "npx" ]
