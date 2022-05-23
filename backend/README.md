# Require docker and docker-compose

# Setup with docker UNIX

- docker-compose up -d


# Set up set in server docker:

- docker exec -it backend_php_1 bash
- composer install
- cp .env.example .env
- php artisan config:clear
- php artisan key:generate
- php artisan migrate
- php artisan db:seed
- php artisan passport:install

# Run
- php artisan serve --host=0.0.0.0