setup:
	./bin/setup.sh

build:
	./bin/build.sh

start:
	npx webpack-dev-server --color

deploy:
	./bin/deploy.sh
