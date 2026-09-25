# CloudMart — User Service

## Project Description

Manages customer records for CloudMart. Backed by Cloud SQL for MySQL,
sharing the same Cloud SQL instance as Product Service but its own logical
database (`userdb`), keeping each microservice's schema independently owned.

## Technology Stack

- Java 25
- Spring Boot 4.0.7 (Spring Web MVC)
- Spring Data JPA + MySQL (Google Cloud SQL)
- Spring Cloud Eureka Client + Config Client
- PM2 (process management on the deployed VM)

## API

| Method | Path              | Description    |
| ------ | ----------------- | -------------- |
| GET    | `/api/users`      | List all users |
| GET    | `/api/users/{id}` | Get one user   |
| POST   | `/api/users`      | Create a user  |
| DELETE | `/api/users/{id}` | Delete a user  |

## Setup / Getting Started

### Prerequisites

- Java 25 JDK, Maven 3.9+
- A MySQL instance reachable locally (or via Cloud SQL Auth Proxy)

### Run locally

```bash
mvn clean package
java -jar target/user-service.jar
```

## Student Information

- **Student Name:** A.G.Vihana Pathum Piyasiri
- **Student Number:** 2301692038
- **Slack Handle:**
- **GCP Project ID:** project-f45a7f6e-0370-44ea-b74
