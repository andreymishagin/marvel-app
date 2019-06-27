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

  page: number = 1;
  collection: any[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

  heroes: Array<Hero> = [];

  searchForm: FormGroup = new FormGroup({
    name: new FormControl('', [])
  });

  nameOfHero: string;
  limitOfHeroes: number;
  offset: number;
  // Извлекаем параметр номера страницы из URL и в зависимости от него задаем нужный offset
  numbers: number;

  constructor(private usingMarvelApiService: UsingMarvelApiService, private activatedRoute: ActivatedRoute, private router: Router) { }
  // Сделал запрос, заполнил массив collection -> отобразил на странице. Оффсет задать через номер страницы p
  ngOnInit() { 

    this.nameOfHero = '';
    this.limitOfHeroes = 10;
    this.offset = 0;

    this.usingMarvelApiService.getCharacters(this.nameOfHero, this.limitOfHeroes, this.offset).subscribe((heroes: Array<Hero>) => {
      this.heroes = heroes;

      // Не у всех персонажей есть описание, обработка таких случаев
      this.heroes.forEach(function(hero){
        if (hero.description === "") hero.description = "no official description"
      })
      console.log(this.heroes);
    })
  }

  loadSelectedList(page) {
    this.offset = page * 10 - 10;
    console.log(page);
    this.usingMarvelApiService.getCharacters(this.nameOfHero, this.limitOfHeroes, this.offset).subscribe((heroes: Array<Hero>) => {
      this.heroes = heroes;

      // Не у всех персонажей есть описание, обработка таких случаев
      this.heroes.forEach(function(hero){
        if (hero.description === "") hero.description = "no official description"
      })
    })
  }

  // loadSelectedList() {
  //   // Дожидаемся перехода, чтобы получить верный параметр из URL
  //   this.router.events.subscribe((event: Event) => {

  //     if (event instanceof NavigationEnd){
  //       this.activatedRoute.params.subscribe(params => {
  //         this.numbers = parseInt(params.numbers);

  //         if (this.numbers < 10){
  //           this.offset = this.numbers * 10 - 10;
  //         } else {
  //           this.offset = this.numbers - 10;
  //         }
  //         console.log(event);
  //         //console.log(this.offset);
  //       });
    
  //       this.usingMarvelApiService.getCharacters(this.nameOfHero, this.limitOfHeroes, this.offset).subscribe((heroes: Array<Hero>) => {

  //         this.heroes = heroes;
  //         // Выполним проверку, не кончились ли персонажи
    
  //         // Не у всех персонажей есть описание, обработка таких случаев
  //         this.heroes.forEach(function(hero){
  //           if (hero.description === "") hero.description = "no official description"
  //         })
  //         //console.log(this.heroes);
  //       })
  //     }
  //   }
  //   )
  // }
}
