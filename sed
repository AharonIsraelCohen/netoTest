apiVersion: apps/v1
kind: Deployment
metadata:
  name: netomedia-deployment
  labels:
    app: netomedia-test
spec:
  replicas: 2
  selector:
    matchLabels:
      app: netomedia-test
  template:
    metadata:
      labels:
        app: netomedia-test
    spec:
      containers:
      - name: nodejs
        image: ac770/netomedia:33
        ports:
        - containerPort: 9090
        resources:
          limits:
            cpu: 500m
          requests:
            cpu: 200m
