# SCRIPTS

## DEV

- `docker run --rm -it -v $(pwd):/app npx-util create-next-app@latest --ts`
- `cd sample-app`
- `BUILD_DATE=$(date -u +"%Y-%m-%dT%H:%M:%SZ") COMMIT=$(git rev-parse --short HEAD) INT_PORT=3456 EXT_PORT=80 docker compose convert`
- `BUILD_DATE=$(date -u +"%Y-%m-%dT%H:%M:%SZ") COMMIT=$(git rev-parse --short HEAD) docker compose build --progress plain`
- `INT_PORT=3000 EXT_PORT=3000 docker compose up -d`
- `docker run --rm -v $(pwd):/app npm-util install -D @next/bundle-analyzer`
- `docker run --rm -v $(pwd):/app npm-util install express @emotion/react @emotion/styled @mui/material @mui/styles @mui/icons-material`

## PRE-COMMIT

- `docker run --rm -v $(pwd):/app npm-util run type-check`
- `docker run --rm -v $(pwd):/app npm-util run lint`
- `docker run --rm -v $(pwd):/app npm-util run analyze-bundle`

## PROD (DockerHub -> K8s cluster)

- `BUILD_DATE=$(date -u +"%Y-%m-%dT%H:%M:%SZ") COMMIT=$(git rev-parse --short HEAD) docker run --rm -v $(pwd):/app npm-util run build`

<!-- TODO: adjust below commands for production deployment -->
- `docker build -t ci-cd-app:latest --target=prod --build-arg BUILD_DATE="$(date -u +"%Y-%m-%dT%H:%M:%SZ")" --build-arg SOURCE_COMMIT="$(git rev-parse --short HEAD)" -f ./Dockerfile .`
- `docker tag ci-cd-app:latest jchengdeveng/k8s-sample-gke-ci-cd-app:latest`
- `docker push jchengdeveng/k8s-sample-gke-ci-cd-app:latest`
- `docker tag ci-cd-app:latest jchengdeveng/k8s-sample-gke-ci-cd-app:"$(git rev-parse HEAD)"`
- `docker push jchengdeveng/k8s-sample-gke-ci-cd-app:"$(git rev-parse HEAD)"`
- `docker run --rm -d -p 80:80 jchengdeveng/k8s-sample-gke-ci-cd-app:"$(git rev-parse HEAD)"`
- `kubectl apply -k ./k8s/stg/.`
- `kubectl set image deploy/ci-cd-app-stg ci-cd-app-stg=jchengdeveng/k8s-sample-gke-ci-cd-app:$(git rev-parse HEAD)`
- `kubectl apply -k ./k8s/prod/.`
- `kubectl set image deploy/ci-cd-app ci-cd-app=jchengdeveng/k8s-sample-gke-ci-cd-app:$(git rev-parse HEAD)`
