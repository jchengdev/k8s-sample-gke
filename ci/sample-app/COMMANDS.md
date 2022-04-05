# SCRIPTS

## DEV

### Initialize Project

- `docker run --rm -it -v $(pwd):/app npx-util create-next-app@latest --ts`
- `cd sample-app`
- `BUILD_DATE=$(date -u +"%Y-%m-%dT%H:%M:%SZ") COMMIT=$(git rev-parse --short HEAD) INT_PORT=3456 EXT_PORT=80 docker compose convert`
- `docker build -t ci-cd-app:dependencies --target=dependencies --build-arg BUILD_DATE="$(date -u +"%Y-%m-%dT%H:%M:%SZ")" --build-arg SOURCE_COMMIT="$(git rev-parse --short HEAD)" --progress=plain -f ./Dockerfile .` <!-- create image tag -->
- `docker build -t ci-cd-app:node-base --target=node-base --build-arg BUILD_DATE="$(date -u +"%Y-%m-%dT%H:%M:%SZ")" --build-arg SOURCE_COMMIT="$(git rev-parse --short HEAD)" --progress=plain -f ./Dockerfile .` <!-- create image tag -->
- `docker run --rm ci-cd-app:dependencies list --depth=0`
- `BUILD_DATE=$(date -u +"%Y-%m-%dT%H:%M:%SZ") COMMIT=$(git rev-parse --short HEAD) docker compose build --progress plain nextjs-app` <!-- create image tag -->
- `INT_PORT=3000 EXT_PORT=3000 docker compose up -d nextjs-app`

### Change Dependencies

- `docker compose down`
- `docker run --rm -v $(pwd):/app npm-util install -D @next/bundle-analyzer @typescript-eslint/eslint-plugin prettier eslint-config-prettier`
- `docker run --rm -v $(pwd):/app npm-util install express @emotion/react @emotion/styled @mui/material @mui/styles @mui/icons-material uuid chroma-js react-copy-to-clipboard rc-slider react-color react-material-ui-form-validator react-sortable-hoc array-move emoji-mart react-transition-group`
- `docker run --rm -v $(pwd):/app npm-util install -D @types/uuid @types/chroma-js @types/react-copy-to-clipboard @types/react-color @types/react-material-ui-form-validator @types/emoji-mart @types/react-transition-group`
- `docker build -t ci-cd-app:dependencies --target=dependencies --build-arg BUILD_DATE="$(date -u +"%Y-%m-%dT%H:%M:%SZ")" --build-arg SOURCE_COMMIT="$(git rev-parse --short HEAD)" --progress=plain -f ./Dockerfile .` <!-- override image tag -->
- `docker run --rm ci-cd-app:dependencies list --depth=0`
- `BUILD_DATE=$(date -u +"%Y-%m-%dT%H:%M:%SZ") COMMIT=$(git rev-parse --short HEAD) docker compose build --progress plain nextjs-app` <!-- override image tag -->
- `INT_PORT=3000 EXT_PORT=3000 docker compose up -d nextjs-app`

### Update Dependencies

- `docker run --rm -it -v $(pwd):/app npm-util outdated`
- `docker run --rm -v $(pwd):/app npm-util update`
- `rm -rf node_modules/`
- `docker run --rm -v $(pwd):/app npm-util ci`

### Storybook

- `docker run --rm -v $(pwd):/app npx-util sb init --builder webpack5`
- `INT_PORT=6006 EXT_PORT=6006 docker compose up -d storybook`

### pre-commit

- `docker run --rm -v $(pwd):/app npx-util prettier --check .`
- `docker run --rm -v $(pwd):/app npm-util run type-check`
- `docker run --rm -v $(pwd):/app npm-util run lint`
- `rm -rf .next && docker run --rm -v $(pwd):/app npm-util run analyze-bundle`

### Debugging Image Build

- `docker build -t ci-cd-app:builder --target=builder --build-arg BUILD_DATE="$(date -u +"%Y-%m-%dT%H:%M:%SZ")" --build-arg SOURCE_COMMIT="$(git rev-parse --short HEAD)" --progress=plain -f ./Dockerfile .`
- `docker run --rm ci-cd-app:node-base run-script hang-container`
- `docker run --rm -it -v $(pwd):/node ci-cd-app:node-base run-script debug-it-bash`
- `docker run --rm ci-cd-app:builder list --depth=0`
- `docker run --rm -it ci-cd-app:builder run-script debug-it-bash`

## PROD

### Local test

- `docker build -t ci-cd-app:latest --target=prod --build-arg BUILD_DATE="$(date -u +"%Y-%m-%dT%H:%M:%SZ")" --build-arg SOURCE_COMMIT="$(git rev-parse --short HEAD)" --progress=plain -f ./Dockerfile .`
- `docker run --rm -p 3000:3000 ci-cd-app:latest`

### Sync DockerHub

 <!-- ! this is optional, gitlab-ci.yml already executes this syncing step -->

- `docker tag ci-cd-app:latest jchengdeveng/k8s-sample-gke-ci-cd-app:latest`
- `docker push jchengdeveng/k8s-sample-gke-ci-cd-app:latest`
- `docker tag ci-cd-app:latest jchengdeveng/k8s-sample-gke-ci-cd-app:"$(git rev-parse HEAD)"`
- `docker push jchengdeveng/k8s-sample-gke-ci-cd-app:"$(git rev-parse HEAD)"`

### Activate CI/CD

- `git push gitlab` <!-- add `-o ci.skip` to skip pipeline -->
