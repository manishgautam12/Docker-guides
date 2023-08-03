// first login docker
// 1-> docker login
// 2-> create docker file using and also create .dockerignore file
//3-> Build the Docker image
//  ->  docker build -t your-image-name:tag .
//4->  Verify the created Docker image
//  -> docker images
//5->  Run the Docker image
//  -> docker run -d -p 8005:8005  your-image-name:tag


// push the docker image on docker hub
//// 1->Tag your Docker image
 //    ->docker tag <local-image> <docker-hub-username>/<repository-name>:<tag>

// 2-> Log in to Docker Hub
 //  -> docker login
// 3-> tag docker image
 //  -> docker tag  image-id  docker-hub-username/repo-name:latest
// 3-> Push the Docker image
 //   ->  docker push <docker-hub-username>/<repository-name>:<tag>
 

 
