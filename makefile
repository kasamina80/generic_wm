.PHONY: build up down migrate console

build:
	docker-compose build

up:
	docker-compose up

down:
	docker-compose down

migrate:
	docker-compose run web bundle exec rails db:migrate

rollback:
	docker-compose run web bundle exec rails db:rollback

console:
	docker-compose run web bundle exec rails c
