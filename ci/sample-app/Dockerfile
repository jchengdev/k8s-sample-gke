# Switch to the scratch image
FROM nginx:1.20.1-alpine AS prod

ARG BUILD_DATE=not-set 
ARG SOURCE_COMMIT=not-set 
LABEL org.opencontainers.image.authors=jcheng.deveng@gmail.com
LABEL org.opencontainers.image.created=$BUILD_DATE 
LABEL org.opencontainers.image.revision=$SOURCE_COMMIT 
LABEL org.opencontainers.image.title="NodeJS app for CI/CD sample in K8s cluster"
LABEL org.opencontainers.image.licenses=MIT 
EXPOSE 80

COPY ./static /usr/share/nginx/html

RUN sed -i "s~%%COMMIT_SHA%%~$SOURCE_COMMIT~g" /usr/share/nginx/html/index.html
