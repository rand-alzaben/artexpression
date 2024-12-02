# Use the official Node.js 16 image.
FROM node:16

# Set the working directory in the Docker container
WORKDIR /app

# Copy package.json and package-lock.json to work directory
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the rest of your app's source code from your host to your image filesystem.
COPY . .

# Expose port 5173, since this is the port your app runs on
EXPOSE 5173

# Command to run your app using Vite
CMD ["npm", "run", "dev"]
