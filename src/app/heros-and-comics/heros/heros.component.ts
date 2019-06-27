import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsingMarvelApiService } from 'src/app/core/services/using-marvel-api.service';
import { Hero } from 'src/app/core/models/hero';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  page: number = 1;

  heroes: Array<Hero> = [];

  searchForm: FormGroup = new FormGroup({
    name: new FormControl('', [])
  });

  nameOfHero: string;
  limitOfHeroes: number;
  offset: number;

  constructor(private usingMarvelApiService: UsingMarvelApiService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() { 

    this.nameOfHero = '';
    this.limitOfHeroes = 10;
    this.offset = 0;

    this.usingMarvelApiService.getCharacters(this.nameOfHero, this.limitOfHeroes, this.offset).subscribe((heroes: Array<Hero>) => {
      this.heroes = heroes;

      // Не у всех персонажей есть описание, обработка таких случаев
      this.heroes.forEach(function(hero){
        if (hero.description === "") hero.description = "no short bio"
      })
      console.log(this.heroes);
    })
  }

  loadSelectedList(page) {
    // Задаем оффсет через переменную страницы из пагинации
    this.offset = page * 10 - 10;

    this.usingMarvelApiService.getCharacters(this.nameOfHero, this.limitOfHeroes, this.offset).subscribe((heroes: Array<Hero>) => {
      this.heroes = heroes;

      // Не у всех персонажей есть описание, обработка таких случаев
      this.heroes.forEach(function(hero){
        if (hero.description === "") hero.description = "no short bio"
      })
    })
  }
}
