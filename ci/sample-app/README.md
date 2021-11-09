# Installation Scripts

- Update package-lock.json

  ```bash
  docker build -t npm-util -f ./npm-util/Dockerfile ./npm-util
  docker run --rm -it -v "$(pwd):/app" npm-util install --package-lock-only
  ```
