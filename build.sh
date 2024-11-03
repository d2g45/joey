#!/bin/bash

git pull

npm install

php-8.2 composer install

# for dreamhost
php-8.2 craft project-config/apply --interactive=0
php-8.2 craft update all --interactive=0

npm run prod
