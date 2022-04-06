# defaults
ARG node_v=16.14.2
ARG node_image=node:$node_v-alpine
ARG BUILD_DATE=not-set 
ARG SOURCE_COMMIT=not-set
ARG NEXT_PORT=3000
ARG NEXT_PUBLIC_SOMEBACKEND_URI=http://localhost:80
# redeclare ARGs defined outside FROM scope for its default value (https://docs.docker.com/engine/reference/builder/#understand-how-arg-and-from-interact)

FROM $node_image as dependencies
ARG BUILD_DATE
ARG SOURCE_COMMIT
LABEL org.opencontainers.image.created=$BUILD_DATE 
LABEL org.opencontainers.image.revision=$SOURCE_COMMIT 
# Check https://github.com/nodejs/docker-node/tree/b4117f9333da4138b03a546ec926ef50a31506c3#nodealpine to understand why libc6-compat might be needed.
RUN apk add --no-cache libc6-compat
COPY package*.json ./ 
RUN npm config list \ 
  && npm ci \ 
  && npm cache clean --force
ENTRYPOINT [ "npm" ] 

FROM $node_image as node-base
ARG BUILD_DATE
ARG SOURCE_COMMIT
LABEL org.opencontainers.image.created=$BUILD_DATE 
LABEL org.opencontainers.image.revision=$SOURCE_COMMIT 
RUN mkdir /node && chown -R node:node /node
USER node
WORKDIR /node

FROM node-base as dev
ARG BUILD_DATE
ARG SOURCE_COMMIT
ARG NEXT_PORT
LABEL org.opencontainers.image.created=$BUILD_DATE 
LABEL org.opencontainers.image.revision=$SOURCE_COMMIT 
ENV NODE_ENV=development
ENV PORT $NEXT_PORT
EXPOSE $PORT
COPY . .
COPY --from=dependencies ./node_modules ./node_modules
RUN echo "BUILD_DATE: $BUILD_DATE"
RUN echo "SHA: $SOURCE_COMMIT"
CMD [ "node", "./server/index.js" ]

FROM node-base as builder
ARG BUILD_DATE
ARG SOURCE_COMMIT
LABEL org.opencontainers.image.created=$BUILD_DATE 
LABEL org.opencontainers.image.revision=$SOURCE_COMMIT 
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
COPY . .
USER root
RUN sed -i "s~%%COMMIT_SHA%%~$SOURCE_COMMIT~g" ./src/common/containers/GlobalContainer/index.tsx
RUN sed -i "s~%%COMMIT_SHA%%~$SOURCE_COMMIT~g" ./src/pages/_document.tsx
USER node
COPY --from=dependencies ./node_modules ./node_modules
RUN rm -rf ./.next \
  && ./node_modules/.bin/next build
RUN echo "BUILD_DATE: $BUILD_DATE"
RUN echo "SHA: $SOURCE_COMMIT"
ENTRYPOINT [ "npm" ] 
# ENTRYPOINT if this image ever needs debugging

FROM node-base as prod
ARG node_v
ARG BUILD_DATE
ARG SOURCE_COMMIT
ARG NEXT_PORT
LABEL org.opencontainers.image.authors=jcheng.deveng@gmail.com
LABEL org.opencontainers.image.created=$BUILD_DATE 
LABEL org.opencontainers.image.revision=$SOURCE_COMMIT 
LABEL org.opencontainers.image.title="NodeJS app for CI/CD sample in K8s cluster" 
LABEL org.opencontainers.image.licenses=MIT
ENV NODE_VERSION=$node_v-alpine
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT $NEXT_PORT
EXPOSE $PORT
COPY package*.json ./ 
RUN npm config list \ 
  && npm ci --production \ 
  && npm cache clean --force
COPY --from=builder --chown=node:node /node/.next ./.next
# TODO: revisit with-docker example after `outputStandalone: true` being promoted from experimental
COPY --from=builder --chown=node:node /node/public ./public
COPY --from=builder --chown=node:node /node/server ./server
COPY --from=builder --chown=node:node /node/.env ./.env
COPY --from=builder --chown=node:node /node/next.config.js ./next.config.js
COPY --from=builder --chown=node:node /node/package.json ./package.json
RUN echo "BUILD_DATE: $BUILD_DATE"
RUN echo "SHA: $SOURCE_COMMIT"
CMD [ "node", "./server/index.js" ]
