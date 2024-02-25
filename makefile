.PHONY: build up down migrate console

build:
	docker-compose build

up:
	docker-compose up

down:
	docker-compose down

restart:
	make down && make up

create:
	docker-compose run web bundle exec rails db:create

migrate:
	docker-compose run web bundle exec rails db:migrate

rollback:
	docker-compose run web bundle exec rails db:rollback

seed:
	docker-compose run web bundle exec rails db:seed_fu

console:
	docker-compose run web bundle exec rails c
