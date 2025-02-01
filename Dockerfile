# Step 1: Build the React app
FROM node:18-alpine AS build

# Set working directory
WORKDIR /app
# Copy the package.json and package-lock.json (if present)
COPY package*.json ./
# Copy the rest of the application code
RUN npm install
COPY . .
# Build the React app
EXPOSE 3000
CMD ["npm", "run", "start"]
