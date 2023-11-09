# Use an official Node.js runtime as the base image
FROM node:18.0.0

# Set the working directory in the container
WORKDIR /src

# Copy package.json and yarn.lock to the working directory
COPY package.json yarn.lock ./

# Install project dependencies using Yarn
RUN yarn install

# Copy the rest of the application code to the working directory
COPY . .

# Build the TypeScript project
RUN yarn build

# Expose the port your Express.js application will run on
EXPOSE 3000

# Command to start your Express.js application
CMD ["yarn", "start"]
