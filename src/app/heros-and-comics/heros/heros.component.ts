import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsingMarvelApiService } from 'src/app/core/services/using-marvel-api.service';
import { Hero } from 'src/app/core/models/hero';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  heroes: Array<Hero> = [];

  searchForm: FormGroup = new FormGroup({
    name: new FormControl('', [])
  });

  constructor(private usingMarvelApiService: UsingMarvelApiService) { }

  ngOnInit() {
    this.usingMarvelApiService.getCharacters({}).subscribe((heroes: Array<Hero>) => {
      this.heroes = heroes;
      // Не у всех персонажей есть описание, обработка таких случаев
      this.heroes.forEach(function(hero){
        if (hero.description === "") hero.description = "no official description"
      })
      console.log(this.heroes);
    })
  }

}
