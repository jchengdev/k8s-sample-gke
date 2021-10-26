# Image based on reference https://lipanski.com/posts/smallest-docker-image-static-website

FROM alpine:3.13.6 AS builder
ARG THTTPD_VERSION=2.29
RUN apk add gcc musl-dev make
RUN wget http://www.acme.com/software/thttpd/thttpd-${THTTPD_VERSION}.tar.gz \
  && tar xzf thttpd-${THTTPD_VERSION}.tar.gz \
  && mv /thttpd-${THTTPD_VERSION} /thttpd
RUN cd /thttpd \
  && ./configure \
  && make CCOPT='-O2 -s -static' thttpd
RUN adduser --disabled-password static

# Switch to the busy image
FROM busybox AS prod

ARG BUILD_DATE=not-set 
ARG SOURCE_COMMIT=not-set 
LABEL org.opencontainers.image.authors=jcheng.deveng@gmail.com
LABEL org.opencontainers.image.created=$BUILD_DATE 
LABEL org.opencontainers.image.revision=$SOURCE_COMMIT 
LABEL org.opencontainers.image.title="About page for K8s cluster sample" 
LABEL org.opencontainers.image.licenses=MIT 
EXPOSE 8080

COPY --from=builder /etc/passwd /etc/passwd
COPY --from=builder /thttpd/thttpd /
USER static
WORKDIR /home/static/www

# Copy the static website
# Use the .dockerignore file to control what ends up inside the image!
COPY --chown=static:static ./static .
RUN sed -i "s~%%COMMIT_SHA%%~$SOURCE_COMMIT~g" ./index.html

# Run thttpd
CMD ["/thttpd", "-D", "-h", "0.0.0.0", "-p", "8080", "-d", "/home/static/www", "-u", "static", "-l", "-", "-M", "60"]
