# Configuration Steps

- Update package-lock.json

  ```bash
  docker build -t npm-util -f ./npm-util/Dockerfile .
  docker run --rm -it -v "$(pwd)/sample-app:/npm-context" npm-util install --package-lock-only
  ```

- Create project from UI: `https://gitlab.com/jchengdev/k8s-sample-gke`
  - change CI/CD configuration file path to `ci/.gitlab-ci.yml`
  - change default branch to `master` and unprotect `main` branch
  - configure push rules (enable force push to `structure-pipeline`)
- Configure dual remote Git:

  ```bash
  git checkout master
  git remote -v
  git remote add gitlab git@gitlab.com:jchengdev/k8s-sample-gke.git
  git fetch gitlab
  git push gitlab master
  git checkout -B structure/pipeline
  git push -u origin structure/pipeline                              (GitHub default remote, no CI/CD)
  git push gitlab structure/pipeline
  git push --delete gitlab main
  ```

- Other Gitlab configurations
  - disable `master` push
  - deployment variables/tokens
  - (... global and per-project configurations)
- Create and run scheduled pipelines (e.g. daily cache renewal)
- Create merge request (& fix pipeline errors)
