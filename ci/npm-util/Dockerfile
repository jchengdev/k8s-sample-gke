FROM node:16-alpine 
USER node 
# check https://github.com/nodejs/docker-node/blob/master/Dockerfile-slim.template 
# local uid and gid (e.g. cooperator) must match container's so to avoid permission issues 
WORKDIR /npm-context
ENTRYPOINT [ "npm" ]
