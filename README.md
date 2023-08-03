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

# Push the docker image on AWS ECR
 To push the docker image on aws ECR, first AWS and create a repository in ECR.
 ### Login using AWS credential
 ```base
aws configure
```
 And find all commands from the ECR. And push the docker image on AWS ECR.
 After successful push the docker image in ECR.
 ### Create an EC2 instance and enable your port in the security group
 Connect the terminal.

 ### Update System Packages
 ```base
sudo apt update
```
### Install AWS CLI using apt
```base
sudo apt install awscli
```
### Install Docker
```base
sudo apt install docker.io
```
### Start and Enable Docker Service
```base
sudo systemctl start docker
sudo systemctl enable docker
```
### Pull the Docker Image
```base
docker pull image-name:tag
```
### Verify the Pulled Image
```base
docker images
```
### Run the Docker Image
```base
docker run -p 8008:8008 -d <docker-image-name>
 ```
## check your Ip 
#### IP_address:8008
 

                              
