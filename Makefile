install:
	npm ci
publish:
	npm publish --dry-run
lint:
	px eslint .