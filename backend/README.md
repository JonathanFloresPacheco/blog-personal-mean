# Template-Master-Typescript-Docker
Plantilla Maestra para Proyectos en Typescript con Docker

#### Prerequisites

To follow this tutorial, you will need the following:

A machine with Docker installed
A Node.js application

#### Creating a Dockerfile

The first step is to create a Dockerfile file. This file is a script that tells Docker how to build your image.

The following is an example of a Dockerfile for a Node.js application:


    FROM node:18.17.1

    WORKDIR /app

    COPY . .

    RUN npm install

    EXPOSE 3000

    CMD ["npm", "run", "start"]


This Dockerfile does the following:

Uses the node:18.17.1 image as a base.
Sets the working directory to /app.
Copies all files from the current directory to the working directory.
Runs the npm install command to install dependencies.
Exposes port 3000.
Runs the npm run start command to start the application.

#### Building the image

Once you have created the Dockerfile file, you can build the image using the following command:

    docker build -t apitypescriptfirst .

This command will build the image with the name apitypescriptfirst.

If you have any problems building the image, please consult the troubleshooting section of this article.


#### Running the image

Once you have built the image, you can run it using the following command:

docker run -p 3000:3000 apitypescriptfirst

This command will run the image in a container and map the container's port 3000 to your local machine's port 3000.


#### Testing the application

To test the application, you can use Postman or any other HTTP client.

In Postman, create a new HTTP GET request to http://localhost:3000.

If everything has gone well, you will receive an HTTP 200 response with the following content


#### Troubleshooting

If you have any problems building the image, here are a few tips:

Make sure you have read permission for the Dockerfile file.

    chmod +r Dockerfile

Make sure you are using the correct version of the Docker CLI.
Try running the docker build command as an administrator.
If you are using the --no-cache flag, make sure your project files have not changed since the last time you built the image.

    docker buildx build --tag apitypescriptfirst --no-cache .
