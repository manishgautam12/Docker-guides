# Docker-guides
To create a docker image, first, install docker in your system.

## first create an account on the docker hub.
### Open vs code or any IDE, and open the terminal.

### Login Docker
```bash
docker login
```
### Create a Docker file with the name 'Dockerfile' 
```base
FROM node:18.12.1

WORKDIR /user/src/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8005

CMD ["node","index.js"]
```
### Build the Docker image
```base
docker build -t <docker hub username>/<image name>:tag .
```

### Verify the created Docker image
```base
docker images
```
### Run the Docker image
```base
docker run -d -p 8005:8005  your-image-name:tag
```

## Push the docker image on docker hub
### Log in to Docker Hub
```base
docker login
```
### Tag your docker image
```base
docker tag  image-id  docker-hub-username/repo-name:latest
```
### Push the Docker image
```base
docker push <docker-hub-username>/<repository-name>:<tag>
```

For source code check my repo.
                              
