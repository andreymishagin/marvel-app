# MarvelApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.0.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

Данный проект реализует тестовое задание от STM labs Мишагиным А.М.

## Структура проекта

```
 marvel-app
├── src
	├── app
        ├── core
            ├── models
                ├── comics.ts
                └── hero.ts
            ├── services
                ├── using-marvel-api.service.spec.ts
                └── using-marvel-api.service.ts
		├── heroes-and-comics
			├── comics
				├── comic
					├── comic.component.css
					├── comic.component.html
					├── comic.component.spec.ts
					└── comic.component.ts
				├── comics.component.css
				├── comics.component.html
				├── comics.component.spec.ts
				└── comics.component.ts
			├── heroes
				├── hero
					├── hero.component.css
					├── hero.component.html
					├── hero.component.spec.ts
					└── hero.component.ts
				├── heroes.component.css
				├── heroes.component.html
				├── heroes.component.spec.ts
				└── heroes.component.ts
			├── heroes-and-comics.component.css
			├── heroes-and-comics.component.html
			├── heroes-and-comics.component.spec.ts
			└── heroes-and-comics.component.ts
        ├── app.component.css
        ├── app.component.html
        ├── app.component.spec.ts
	    ├── app.component.ts
	    ├── app.module.ts
	    └── ngmaterial.module.ts
		├── assets
			├── .gitkeep
			└── GitHub-Mark-32px.png
		├── environments
			├── environment.prod.ts
			└── environment.ts
		├── favicon.ico
		├── index.html
		├── main.ts
		├── polyfills.ts
		├── styles.css
		└── test.ts

```