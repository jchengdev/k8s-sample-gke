# defaults
ARG node_v=16.14.2
ARG node_image=node:$node_v-alpine
ARG BUILD_DATE=not-set 
ARG SOURCE_COMMIT=not-set
ARG NEXT_PORT=3000
ARG NEXT_PUBLIC_SOMEBACKEND_URI=http://localhost:80
# redeclare ARGs defined outside FROM scope for its default value (https://docs.docker.com/engine/reference/builder/#understand-how-arg-and-from-interact)

FROM $node_image as dependencies
COPY package*.json ./ 
RUN npm config list \ 
  && npm ci \ 
  && npm cache clean --force

FROM $node_image as dev
ARG BUILD_DATE
ARG SOURCE_COMMIT
ARG NEXT_PORT
ENV NODE_ENV=development
ENV PORT $NEXT_PORT
EXPOSE $PORT
RUN echo "BUILD_DATE: $BUILD_DATE"
RUN echo "SHA: $SOURCE_COMMIT"
RUN mkdir /node && chown -R node:node /node
USER node
WORKDIR /node
COPY . .
COPY --from=dependencies ./node_modules ./node_modules
CMD [ "npm", "run", "dev"]

FROM $node_image as builder
ARG BUILD_DATE
ARG SOURCE_COMMIT
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
RUN echo "BUILD_DATE: $BUILD_DATE"
RUN echo "SHA: $SOURCE_COMMIT"
RUN mkdir /node && chown -R node:node /node
USER node
WORKDIR /node
COPY . .
COPY --from=dependencies ./node_modules ./node_modules
RUN sed -i "s~%%COMMIT_SHA%%~$SOURCE_COMMIT~g" ./src/pages/index.tsx
RUN npm run build

FROM $node_image as prod
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
RUN echo "BUILD_DATE: $BUILD_DATE"
RUN echo "SHA: $SOURCE_COMMIT"
RUN mkdir /node && chown -R node:node /node
USER node
WORKDIR /node
COPY --from=builder /node/.next ./.next
COPY --from=builder /node/node_modules ./node_modules
COPY --from=builder /node/public ./public
COPY --from=builder /node/server ./server
COPY --from=builder /node/.env ./.env
COPY --from=builder /node/next.config.js ./next.config.js
COPY --from=builder /node/package.json ./package.json
CMD [ "npm", "run", "start"]
