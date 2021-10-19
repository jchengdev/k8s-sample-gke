# Installation Scripts

- `kubectl create ns kwv-system`
- `kubectl apply -k .`
- `kubectl port-forward service/kube-web-view 8080:80 -n kwv-system`
- edit `kube-web-view.host.DNS` in `ingress.yaml`
- `kubectl apply -f ingress.yaml`
