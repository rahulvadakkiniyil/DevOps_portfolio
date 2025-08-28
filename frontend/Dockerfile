# Build stage
FROM node:18-alpine AS build

WORKDIR /app

# Accept dynamic IP from build args
ARG INSTANCE_IP

# Copy package files first for better caching
COPY package*.json ./

# Replace homepage with http://<instance_ip> dynamically
RUN sed -i 's|"homepage": "https://rahulvadakkiniyil.github.io/DevOps_portfolio/"|"homepage": "/"|g' package.json
RUN npm install

# Copy the rest of the application
COPY . ./

# Build the application
RUN npm run build

# Production stage with Nginx
FROM nginx:alpine AS stage-1

# Copy the build output
COPY --from=build /app/build /usr/share/nginx/html

# Copy custom nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
