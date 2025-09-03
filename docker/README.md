# Docker Configuration

This directory contains Docker configuration files for the Helix project.

## Files

- `Dockerfile` - Production Dockerfile for deployment (requires environment variables from build environment)
- `Dockerfile.dev` - Development Dockerfile for manual builds with local environment variables
- `docker-compose.dev.yml` - Docker Compose configuration for development builds

## Usage

### Development Build (with .env file)

```bash
# Using Docker Compose (recommended)
docker-compose -f docker/docker-compose.dev.yml up --build

# Or using Docker directly
docker build -f docker/Dockerfile.dev --env-file .env -t helix-dev .
docker run -p 3000:3000 helix-dev
```

### Production Build

```bash
# Build (environment variables should be provided by build environment)
docker build -f docker/Dockerfile -t helix .

# Run
docker run -p 3000:3000 helix
```

## Environment Variables

The following environment variables are required:

- `CLERK_SECRET_KEY`
- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`
- `NEXT_PUBLIC_CONVEX_URL`

Create a `.env` file in the project root with these variables for development builds.
