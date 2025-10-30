# Multi-stage build for React frontend
# Stage 1: Build the React app
FROM node:20-alpine as build

WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy source code
COPY . .

# Set build-time environment variable for API URL
ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

# Build the React app for production
RUN npm run build

# Stage 2: Serve the built files using NGINX
FROM nginx:alpine

# Copy built files from build stage
COPY --from=build /app/dist /usr/share/nginx/html

# Copy nginx configuration
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 8080 (Cloud Run standard)
EXPOSE 8080

# Start NGINX
CMD ["nginx", "-g", "daemon off;"]