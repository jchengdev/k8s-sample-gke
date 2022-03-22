# SCRIPTS

## DEV

- `docker run --rm -it -v $(pwd):/app npx-util create-next-app@latest --ts`
- `cd sample-app`
- `BUILD_DATE=$(date -u +"%Y-%m-%dT%H:%M:%SZ") COMMIT=$(git rev-parse --short HEAD) INT_PORT=3456 EXT_PORT=80 docker compose convert`
- `BUILD_DATE=$(date -u +"%Y-%m-%dT%H:%M:%SZ") COMMIT=$(git rev-parse --short HEAD) docker compose build --progress plain`
- `INT_PORT=3000 EXT_PORT=3000 docker compose up -d`
- `docker run --rm -v $(pwd):/app npm-util install -D @next/bundle-analyzer @typescript-eslint/eslint-plugin prettier eslint-config-prettier`
- `docker run --rm -v $(pwd):/app npm-util install express @emotion/react @emotion/styled @mui/material @mui/styles @mui/icons-material`

## PRE-COMMIT

- `docker run --rm -v $(pwd):/app npx-util prettier --check .`
- `docker run --rm -v $(pwd):/app npm-util run type-check`
- `docker run --rm -v $(pwd):/app npm-util run lint`
- `rm -rf .next && docker run --rm -v $(pwd):/app npm-util run analyze-bundle`

## PROD (Gitlab repo -> K8s cluster)

- `docker build -t ci-cd-app:latest --target=prod --build-arg BUILD_DATE="$(date -u +"%Y-%m-%dT%H:%M:%SZ")" --build-arg SOURCE_COMMIT="$(git rev-parse --short HEAD)" --progress=plain -f ./Dockerfile .`
- `docker tag ci-cd-app:latest jchengdeveng/k8s-sample-gke-ci-cd-app:latest`
- `docker run --rm -p 3000:3000 jchengdeveng/k8s-sample-gke-ci-cd-app:latest`
