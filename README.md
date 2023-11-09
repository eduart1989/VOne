# Visione - TypeScript Node.js Express Application

## Overview

Visione is a TypeScript-based Node.js Express application, leveraging the power of TypeScript throughout the codebase. Key features include:

- **Middleware Implementation:** Middleware for CORS, body parsing, and error handling ensures a robust and secure application.

- **Jest Unit Testing:** Comprehensive unit tests using Jest, ensuring the reliability of the application.

- **Generics and Simplified Queries:** Utilizes TypeScript generics to simplify database queries, enhancing code readability and maintainability.

## Prerequisites

Make sure you have Node.js (version 18.0.0 or higher) installed on your machine.

## Getting Started

1. check out my branch: `git checkout Eduart-Hoxha/code-challenge`
2. Install dependencies: `yarn install`
3. Initialize the database schema and run seed data: `yarn init-db`
4. Run the development server: `yarn start` or `yarn watch`
5. Open your browser and navigate to [http://localhost:3000](http://localhost:3000)

## You can run the app in docker follow the commands below.

1. `yarn docker-build`: Build a Docker image for the application.
2. `yarn docker-run`: Run the Docker container on port 3000.

## Running Tests

Run tests using Jest: `yarn test`

## Running Lint

Lint the TypeScript files using ESLint: `yarn lint`

## Scripts

- `init-db`: Initialize the database schema and run seed data.
- `start`: Run the application in development mode using ts-node.
- `watch`: Run the application in watch mode using ts-node-dev.
- `build`: Build the application using TypeScript.
- `lint`: Lint the TypeScript files using ESLint.
- `test`: Run tests using Jest.
- `docker-build`: Build a Docker image for the application.
- `docker-run`: Run the Docker container on port 3000.

## upload postman file

New Collection.postman_collection.json

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
