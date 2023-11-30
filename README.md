# Secure API

Welcome to the Secure API! This API provides user registration, login, and access to a secure endpoint.

## Table of Contents

1. [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
2. [Running the API](#running-the-api)
3. [API Documentation](#api-documentation)

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed on your machine:

-   [Node.js](https://nodejs.org/)
-   [PostgreSQL](https://www.postgresql.org/)

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/rakesh-kumar-18/secure-api-project.git
    ```

2. Navigate to the project directory:

    ```bash
    cd secure-api-project
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

4. Set up the PostgreSQL database:

    - Create a new database and user.
    - Update the database connection string in `/.env`.

5. Run Prisma migrations:

    ```bash
    npx prisma migrate dev
    ```

## Running the API

To start the API, run the following command:

```bash
npm start
```

The API will be available at [http://localhost:3000](http://localhost:3000).

## API Documentation

For detailed information on how to use the API, refer to the [API Documentation](./API_DOCUMENTATION.md).

---
