Require docker and docker-compose

# Setup with docker UNIX

- docker-compose up -d


# Set up set in server docker:

- docker exec -it backend_php_1 bash
- composer install
- cp .env.example .env
- php artisan config:clear
- php artisan key:generate
- php artisan migrate
- php artisan passport:install
- php artisan serve --host=0.0.0.0

//Phuong
//Các câu lệnh chạy laravel passport
composer require laravel/passport:7.5.1
php artisan migrate
composer require lcobucci/jwt=3.3.3
//EndPhuong

//hieu -- thay đổi kiểu DL column migration
composer require doctrine/dbal:2.*
//