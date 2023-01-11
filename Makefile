.PHONY: dev docker

dev:
	@npm run dev

docker:
	@docker build -t echo-headers:latest .
	@docker run -d -p 3000:3000 echo-headers:latest
