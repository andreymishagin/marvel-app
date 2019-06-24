import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsingMarvelApiService } from 'src/app/core/services/using-marvel-api.service';
import { Hero } from 'src/app/core/models/hero';
import { ActivatedRoute, Router, Event, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  heroes: Array<Hero> = [];
  // Массивы номеров страниц для постраничного поиска
  startLinks: Array<Number>;
  endLinks: Array<Number>;

  searchForm: FormGroup = new FormGroup({
    name: new FormControl('', [])
  });

  nameOfHero: string = '';
  limitOfHeroes: number = 10;
  offset: number;
  // Извлекаем параметр номера страницы из URL и в зависимости от него задаем нужный offset
  numbers: number;
  
  constructor(private usingMarvelApiService: UsingMarvelApiService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.numbers = parseInt(params.numbers)); 

    this.nameOfHero = '';
    this.limitOfHeroes = 10;
    this.offset = this.numbers * 10 - 10;

    this.usingMarvelApiService.getCharacters(this.nameOfHero, this.limitOfHeroes, this.offset).subscribe((heroes: Array<Hero>) => {

      this.startLinks = [1, 2, 3, 4, 5, 100];
      this.endLinks = [UsingMarvelApiService.totalHeroes - 4, UsingMarvelApiService.totalHeroes - 3, UsingMarvelApiService.totalHeroes - 2, UsingMarvelApiService.totalHeroes - 1, UsingMarvelApiService.totalHeroes]
      this.heroes = heroes;

      // Не у всех персонажей есть описание, обработка таких случаев
      this.heroes.forEach(function(hero){
        if (hero.description === "") hero.description = "no official description"
      })
      console.log(this.heroes);
    })
  }

  loadSelectedList() {
    // Дожидаемся перехода, чтобы получить верный параметр из URL
    this.router.events.subscribe((event: Event) => {

      if (event instanceof NavigationEnd){
        this.activatedRoute.params.subscribe(params => {
          this.numbers = parseInt(params.numbers);

          if (this.numbers < 10){
            this.offset = this.numbers * 10 - 10;
          } else {
            this.offset = this.numbers - 10;
          }
          console.log(event);
          //console.log(this.offset);
        });
    
        this.usingMarvelApiService.getCharacters(this.nameOfHero, this.limitOfHeroes, this.offset).subscribe((heroes: Array<Hero>) => {

          this.heroes = heroes;
          // Выполним проверку, не кончились ли персонажи
    
          // Не у всех персонажей есть описание, обработка таких случаев
          this.heroes.forEach(function(hero){
            if (hero.description === "") hero.description = "no official description"
          })
          //console.log(this.heroes);
        })
      }
    }
    )
  }
}
