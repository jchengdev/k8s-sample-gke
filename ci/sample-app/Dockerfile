# defaults
ARG BUILD_DATE=not-set 
ARG SOURCE_COMMIT=not-set
ARG NEXT_PORT=3000
ARG NEXT_PUBLIC_SOMEBACKEND_URI=http://localhost:80

FROM node:16.14.2-alpine as node-base
# redeclare ARGs defined outside FROM scope for its default value (https://docs.docker.com/engine/reference/builder/#understand-how-arg-and-from-interact)
ARG BUILD_DATE
ARG SOURCE_COMMIT
RUN echo "BUILD_DATE: $BUILD_DATE"
RUN echo "SHA: $SOURCE_COMMIT"
LABEL org.opencontainers.image.authors=jcheng.deveng@gmail.com
LABEL org.opencontainers.image.created=$BUILD_DATE 
LABEL org.opencontainers.image.revision=$SOURCE_COMMIT 
LABEL org.opencontainers.image.title="NodeJS app for CI/CD sample in K8s cluster" 
LABEL org.opencontainers.image.licenses=MIT
ENV NODE_VERSION=16.14.2-alpine
ENV NODE_ENV=production
RUN mkdir /node && chown -R node:node /node
USER node
WORKDIR /node
COPY package*.json ./ 
RUN npm config list \ 
  && npm ci \ 
  && npm cache clean --force

FROM node-base as dev
ARG BUILD_DATE
ARG SOURCE_COMMIT
RUN echo "BUILD_DATE: $BUILD_DATE"
RUN echo "SHA: $SOURCE_COMMIT"
ARG NEXT_PORT
ENV NODE_ENV=development
ENV PORT $NEXT_PORT
COPY . .
EXPOSE $PORT
CMD [ "npm", "run", "dev"]

# FROM base as build
# ARG BUILD_DATE
# ARG SOURCE_COMMIT
# RUN echo "BUILD_DATE: $BUILD_DATE"
# RUN echo "SHA: $SOURCE_COMMIT"
# LABEL org.opencontainers.image.authors=jcheng.deveng@gmail.com
# LABEL org.opencontainers.image.created=$BUILD_DATE 
# LABEL org.opencontainers.image.revision=$SOURCE_COMMIT 
# LABEL org.opencontainers.image.title="NodeJS app for CI/CD sample in K8s cluster" 
# LABEL org.opencontainers.image.licenses=MIT
# EXPOSE 80 
# CMD []
# TODO deployment of next start (built-in) or server.js (customized)
# FROM build as prod
# TODO COPY --from=build
