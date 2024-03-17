.PHONY: build build-no-cache up down restart create migrate rollback seed console

build:
	docker-compose build

build-no-cache:
	docker-compose build --no-cache

up:
	docker-compose up

down:
	docker-compose down

restart:
	make down && make up

create:
	docker-compose run --rm web bundle exec rails db:create

migrate:
	docker-compose run --rm web bundle exec rails db:migrate

rollback:
	docker-compose run --rm web bundle exec rails db:rollback

seed:
	docker-compose run --rm web bundle exec rails db:seed_fu

console:
	docker-compose run --rm web bundle exec rails c
