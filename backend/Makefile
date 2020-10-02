.DEFAULT: dev
.PHONY: build

up: 
	pm2 start ecosystem.config.js --attach

down:
	pm2 delete ecosystem.config.js
