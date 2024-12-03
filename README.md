# ArtExpression Platform

ArtExpression is an innovative platform designed to showcase and manage artistic creations. This application provides a robust framework, comprising frontend, backend, and admin panels, each deployed within separate Docker containers for streamlined management and scalability.

## Prerequisites

Before deploying the ArtExpression platform, ensure the following requirements are met:

- Docker and Docker Compose are installed on your system.
- Active accounts for MongoDB and Cloudinary, as these services are integral to the backend's functionality.

## Project Structure

The ArtExpression platform is structured into three main directories:

- **frontend**: Contains the public-facing user interface.
- **backend**: Houses the API and data management logic.
- **admin**: A dedicated admin panel for managing creators and artwork.

## Installation and Deployment

### Clone the Repository

To set up the project, clone the repository using the following command:

```
git clone [repository-URL]
cd [project-directory]
```

### Edit Environment Configurations

Before running the application, ensure you modify the Docker Compose file `.docker-compose.yaml` located in the project directory to set:
- Host ports for the frontend,
- Admin panel credentials (email and password),
- MongoDB access credentials.

### Build and Run Docker Containers

Deploy the application using Docker Compose:
```
docker compose up -d --build
```


This command builds the project containers and starts the services as defined in the `docker-compose.yaml`.

## Accessing Admin Panel

The admin panel can be accessed at **http://localhost:5174**. Admin credentials, as set in the Docker Compose file, are required for access. If you need to set or update these, refer to the `artexpression-admin` service configuration in the Docker Compose file under `environment`.

## Ports Configuration

The services are configured to run on the following ports:

- **Frontend**: http://localhost:5173
- **Admin Panel**: http://localhost:5174
- **Backend/API**: http://localhost:4000

## API Documentation

Access the API documentation at http://localhost:4000/ to verify the API functionality.

## Author

Randal Alzaben - Initial creator and lead developer  
Email: rand.alzaben21@gmail.com
