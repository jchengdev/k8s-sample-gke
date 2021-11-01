# Kubeless Configuration

- `kubectl create ns kubeless`
- `export RELEASE=$(curl -s https://api.github.com/repos/kubeless/kubeless/releases/latest | grep tag_name | cut -d '"' -f 4)`
- `curl -s -L https://github.com/kubeless/kubeless/releases/download/$RELEASE/kubeless-$RELEASE.yaml > kubeless-$RELEASE.yaml` (fix v1beta1 deprecations)
- `kubectl apply -f ./kubeless-$RELEASE.yaml`
- `kubeless function deploy hello-py36 --runtime python3.6 --from-file ./samples/hello-py37.py --handler test.hello`
- `kubectl apply -f ./samples/hello-nodejs14.yaml`
- `kubeless function ls`
- `kubectl get functions`
- `kubeless function call hello-py37 --data 'Hello world!'` (\*\*some issue with this default sample)
- `kubeless function call hello-nodejs14`
- `curl -s -L https://raw.githubusercontent.com/kubeless/kubeless-ui/master/k8s.yaml > ./ui/ui.yaml` (fix v1beta1 deprecations)
- `kubectl apply -f ./ui/ui.yaml`
- `kubectl port-forward service/ui 8080:3000 -n kubeless`
- edit `kubeless-ui.host.DNS` in `ui-ingress.yaml`
- `kubectl apply -f ./ui/ui-ingress.yaml`
