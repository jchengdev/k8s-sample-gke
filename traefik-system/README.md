# Traefik Ingress Configuration

- `kubectl create ns traefik-system`
- `helm repo add traefik https://helm.traefik.io/traefik`
- `helm repo update`
- `helm install --namespace=traefik-system --set="additionalArguments={--providers.kubernetesingress=true}" traefik-ingress-controller traefik/traefik`
- `kubectl get svc -n traefik-system`
- edit `traefik.host.DNS` in `dashboard-ingressroute.yaml`
- `kubectl apply -f ./dashboard-ingressroute.yaml`
- associate A record `*.domain.com` with IP of `kubectl get svc traefik-ingress-controller -n traefik-system -o jsonpath='{.status.loadBalancer.ingress[0].ip}'`
