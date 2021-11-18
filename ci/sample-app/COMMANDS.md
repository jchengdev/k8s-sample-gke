# SCRIPTS

## DEV

- `BUILD_DATE=$(date -u +"%Y-%m-%dT%H:%M:%SZ") COMMIT=$(git rev-parse --short HEAD) docker compose up -d --build`

## PROD (DockerHub -> K8s cluster)

- `docker build -t ci-cd-app:latest --target=prod --build-arg BUILD_DATE="$(date -u +"%Y-%m-%dT%H:%M:%SZ")" --build-arg SOURCE_COMMIT="$(git rev-parse --short HEAD)" -f ./Dockerfile .`
- `docker tag ci-cd-app:latest jchengdeveng/k8s-sample-gke-ci-cd-app:latest`
- `docker push jchengdeveng/k8s-sample-gke-ci-cd-app:latest`
- `docker tag ci-cd-app:latest jchengdeveng/k8s-sample-gke-ci-cd-app:"$(git rev-parse HEAD)"`
- `docker push jchengdeveng/k8s-sample-gke-ci-cd-app:"$(git rev-parse HEAD)"`
- `docker run --rm -d -p 80:80 jchengdeveng/k8s-sample-gke-ci-cd-app:"$(git rev-parse HEAD)"`
- `kubectl apply -k ./k8s/stg/.`
- `kubectl set image deploy/ci-cd-app-stg ci-cd-app-stg=jchengdeveng/k8s-sample-gke-ci-cd-app:latest`
- `kubectl apply -k ./k8s/prod/.`
- `kubectl set image deploy/ci-cd-app ci-cd-app=jchengdeveng/k8s-sample-gke-ci-cd-app:$(git rev-parse HEAD)`
