# MarvelApp

Данный проект реализует тестовое задание от STM labs Мишагиным А.М.

## Live demo

Ссылка на gh pages

## Задание

Используя публичный API https://developer.marvel.com/ реализовать приложение на React/Angular/Vue.

## Структура проекта
```
 marvel-app
├── src
	├── app
        ├── core - здесь находятся модели данных и сервис для использования marvel API

            ├── models
                ├── comics.ts
                └── hero.ts

            ├── services
                ├── using-marvel-api.service.spec.ts
                └── using-marvel-api.service.ts

		├── heroes-and-comics - домашний компонент и его дочерние компоненты, листы комиксов и листы геров, 
		у которых свои дочерние компоненты - компонент одного героя и одного комикса
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

		├── environments - здесь хранятся api keys и hash
			├── environment.prod.ts
			└── environment.ts

		├── favicon.ico
		├── index.html
		├── main.ts
		├── polyfills.ts
		├── styles.css
		└── test.ts
```
