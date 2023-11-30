### API Documentation

#### Introduction

Welcome to the Secure API! This API provides user registration, authentication, and access to a secure endpoint. Below, you will find comprehensive documentation on how to interact with the API.

### Table of Contents

1. [Registration](#registration)
2. [Authentication](#authentication)
3. [Secure Endpoint](#secure-endpoint)

### 1. Registration

#### Endpoint

`POST /api/users/signup`

#### Request

-   **Method:** POST
-   **Headers:**
    -   `Content-Type: application/json`

#### Request Body

```json
{
    "username": "your_username",
    "email": "your_email@example.com",
    "password": "your_password"
}
```

#### Response

-   **Status Code:** 201 Created
-   **Response Body:**

```json
{
    "message": "User registered successfully",
    "newUser": {
        "id": "generated_string",
        "username": "your_username",
        "email": "your_email@example.com",
        "password": "hashed_password"
    }
}
```

-   **Status Code:** 409 Conflict (If username or email already exists)
-   **Response Body:**

```json
{
    "name": "alreadyExistsError",
    "message": "Username or email is already exist",
    "status": 409
}
```

### 2. Authentication

#### Endpoint

`POST /api/users/login`

#### Request

-   **Method:** POST
-   **Headers:**
    -   `Content-Type: application/json`

#### Request Body

```json
{
    "username": "your_username",
    "email": "your_email",
    "password": "your_password"
}
```

#### Response

-   **Status Code:** 200 OK
-   **Response Body:**

```json
{
    "message": "Login successful",
    "token": "your_jwt_token"
}
```

-   **Status Code:** 401 Unauthorized (Invalid credentials)
-   **Response Body:**

```json
{
    "name": "badRequestError",
    "message": "Invalid credentials",
    "status": 401
}
```

### 3. Secure Endpoint

#### Endpoint

`GET /api/users/secret`

#### Request

-   **Method:** GET
-   **Headers:**
    -   `Authorization: Bearer your_jwt_token`

#### Response

-   **Status Code:** 200 OK
-   **Response Body:**

```json
{
    "message": "Secure endpoint accessed successfully"
}
```

-   **Status Code:** 401 Unauthorized (Token not available)
-   **Response Body:**

```json
{
    "name": "unauthorizedError",
    "message": "Unauthorized",
    "status": 401
}
```

-   **Status Code:** 500 Internal Server Error (Invalid token)
-   **Response Body:**

```json
{
    "name": "JsonWebTokenError",
    "message": "invalid token",
    "status": 500
}
```

-   **Status Code:** 429 Too Many Requests (Rate limit exceeded)
-   **Response Body:**

```json
{
    "message": "You have exceeded your 5 requests per minute limit"
}
```

#### Rate Limiting

To enhance security, the `/api/users/secret` has a rate limit of 5 requests per minute. If this limit is exceeded, a status code of 429 (Too Many Requests) will be returned with an appropriate message.
