import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsingMarvelApiService } from 'src/app/core/services/using-marvel-api.service';
import { Hero } from 'src/app/core/models/hero';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-heros',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  page = 1;
  loadingHeroes: boolean;
  hidePagination = false;

  heroes: Array<Hero> = [];

  searchForm: FormGroup = new FormGroup({
    name: new FormControl('', [])
  });

  nameOfHero: string;
  limitOfHeroes: number;
  offset: number;
  totalPages: number;

  constructor(private usingMarvelApiService: UsingMarvelApiService) {}

  ngOnInit() {
    this.loadingHeroes = true;
    this.nameOfHero = '';
    this.limitOfHeroes = 10;
    this.offset = 0;
    // Получаем общее количество героев для определения пагинации
    this.usingMarvelApiService
      .amountTotalPages('characters')
      .subscribe(totalPages => (this.totalPages = totalPages));

    this.usingMarvelApiService
      .getCharacters(this.nameOfHero, this.limitOfHeroes, this.offset)
      .subscribe((heroes: Array<Hero>) => {
        this.heroes = heroes;

        // Не у всех персонажей есть описание, обработка таких случаев
        this.heroes.forEach(hero => {
          if (hero.description === '') {
            hero.description = 'no short bio';
          }
        });
        this.loadingHeroes = false;
        this.hidePagination = false;
      });

    this.searchForm
      .get('name')
      .valueChanges.pipe(debounceTime(400))
      .subscribe(nameVal => {
        // Убираем пагинацию при поиске героя, возвращаем пагинацию, когда очищаем форму
        this.loadingHeroes = true;
        this.hidePagination = true;
        if (nameVal === '') {
          this.hidePagination = false;
        }
        this.usingMarvelApiService
          .getCharacters(nameVal, this.limitOfHeroes, 0)
          .subscribe((heroes: Array<Hero>) => {
            this.heroes = heroes;
            // Не у всех персонажей есть описание, обработка таких случаев
            this.heroes.forEach(hero => {
              if (hero.description === '') {
                hero.description = 'no short bio';
              }
            });
            this.loadingHeroes = false;
          });
      });
  }

  loadSelectedList(page) {
    this.loadingHeroes = true;
    // Задаем оффсет через переменную страницы из пагинации
    this.offset = page * 10 - 10;

    this.usingMarvelApiService
      .getCharacters(this.nameOfHero, this.limitOfHeroes, this.offset)
      .subscribe((heroes: Array<Hero>) => {
        this.heroes = heroes;
        // Не у всех персонажей есть описание, обработка таких случаев
        this.heroes.forEach(hero => {
          if (hero.description === '') {
            hero.description = 'no short bio';
          }
        });
        this.loadingHeroes = false;
        this.hidePagination = false;
      });
  }
}
