# Configuration Steps

- Project created: `https://gitlab.com/jchengdev/k8s-sample-gke`
- Configure dual remote Git:

  ```bash
  git checkout master
  git remote -v
  git remote add gitlab git@gitlab.com:jchengdev/k8s-sample-gke.git
  git fetch gitlab
  git push gitlab master
  ```

  - change default branch to `master` and unprotect `main` branch from UI
  - change CI/CD configuration file path to `ci/.gitlab-ci.yml`

  ```bash
  git push --delete gitlab main
  git checkout -B structure/pipeline
  git push -u origin structure/pipeline (GitHub default remote, no CI/CD)
  git push gitlab structure/pipeline
  ```

- Update package-lock.json

  ```bash
  docker build -t npm-util -f ./npm-util/Dockerfile .
  docker run --rm -it -v "$(pwd)/sample-app:/npm-context" npm-util install --package-lock-only
  ```
