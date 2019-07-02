# MarvelApp

Данный проект реализует тестовое задание от STM labs Мишагиным А.М.

## Live demo

Ссылка на gh pages

## Задание

Используя публичный API https://developer.marvel.com/ реализовать приложение на React/Angular/Vue.

### Бизнес требования:

#### Главная страница

* Описание проекта

* Переход на список героев

* Переход на список комиксов

#### Страница со списком героев

* Краткое описание

* Превью изображения героя (thumbnail)

* Возможностью поиска

* Постраничный просмотр

* Переход на страницу героя

#### Персональная страница героя

* Детальное описание

* Изображение героя

* Ссылки на внешние ресурсы (wiki, comiclink, …)

* Списков комиксов с участием героя с возможностью перехода на страницу конкретного комикса

#### Страница со списком комиксов

* Краткое описание

* Переход к странице с деталями выбранного комикса

#### Страница с детальным описанием комикса

* Детальное описание

* Список героев с переходом на персональную страницу героя

### Технические требования:

* Mobile First вёрстка (страницы должны прилично выглядеть на смартфоне)

* Routing – то есть приложение должно состоять из нескольких страниц с возможностью навигации

* Индикация загрузки данных и обработка ошибок

* Документированный и структурированный исходный код

### Крайне желательно:

* Хостинг приложения на общедоступном ресурсе (github, firebase, …)

* Хостинг исходного кода на общедоступном ресурсе

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

		├── errors - компонент, выводящий ошибки, если они есть при get-запросе
			├── errors.component.css
			├── errors.component.html
			├── errors.component.spec.ts
			└── errors.component.ts

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
	  ├── error.service.spec.ts
	  ├── error.service.ts - сервис для обработки ошибок
	  └── ngmaterial.module.ts - angular material модуль

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
## Запуск приложения

* Склонировать репозиторий `git clone https://github.com/andreymishagin/marvel-app.git`

* Установить модули `npm i`

* Запустить приложение на http://localhost:4200/ `ng serve --open`