# SCRIPTS

## DEV

- `BUILD_DATE=$(date -u +"%Y-%m-%dT%H:%M:%SZ") COMMIT=$(git rev-parse --short HEAD) docker compose up -d --build`

## PROD (DockerHub -> K8s cluster)

- `docker build -t about-page:latest --target=prod --build-arg BUILD_DATE="$(date -u +"%Y-%m-%dT%H:%M:%SZ")" --build-arg SOURCE_COMMIT="$(git rev-parse --short HEAD)" -f ./Dockerfile .`
- `docker tag about-page:latest jchengdeveng/k8s-sample-gke-about`
- `docker push jchengdeveng/k8s-sample-gke-about`
- `docker run --rm -d -p 80:8080 jchengdeveng/k8s-sample-gke-about`
- `kubectl apply -f ./k8s/.`
