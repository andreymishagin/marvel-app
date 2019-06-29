import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsingMarvelApiService } from 'src/app/core/services/using-marvel-api.service';
import { Hero } from 'src/app/core/models/hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  id: string;
  hero: Hero;
  comicsId: Array<string> = [];

  constructor(private usingMarvelApiService: UsingMarvelApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.id = params.heroid);

    this.usingMarvelApiService.getHero(this.id).subscribe((hero: Hero) => {
      // Получаем ID персонажей из выбранного комикса
      hero[0].comics.items.forEach(element => {
        this.parseUrl(element.resourceURI);
      })

      this.hero = hero[0];
      // Обработка случая, когда нет ни одного доступного комикса для выбранного персонажа
      if (this.hero.comics.available === 0){
        this.hero.comics.items.push({resourceURI: '', name: '', check: 'no available comics for this character'});
      };
      // Не у всех персонажей есть описание, обработка таких случаев
      if (this.hero.description === "") this.hero.description = "no official description"

      console.log(this.hero);
    })
  }

    // Извлекаем из resourceURI последний элемент (ID комикса)
    parseUrl(url: string){
      let splittedUrl: Array<string> = url.split('/');
      this.comicsId.push(splittedUrl[splittedUrl.length - 1]);
    }
}
