import { Component, OnInit } from '@angular/core';
import { UsingMarvelApiService } from 'src/app/core/services/using-marvel-api.service';
import { ActivatedRoute } from '@angular/router';
import { Comics } from 'src/app/core/models/comics';

@Component({
  selector: 'app-comic',
  templateUrl: './comic.component.html',
  styleUrls: ['./comic.component.css']
})
export class ComicComponent implements OnInit {
  id: string;
  comics: Comics;
  charcaterId: Array<string> = [];

  items = [1, 2, 3, 4];

  constructor(private usingMarvelApiService: UsingMarvelApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.id = params.comicid);

    this.usingMarvelApiService.getComic(this.id).subscribe((comics: Comics) => {
      // Получаем ID персонажей из выбранного комикса
      comics[0].characters.items.forEach(element => {
        this.parseUrl(element.resourceURI);
      })

      this.comics = comics[0];
      if (this.comics.characters.available === 0){
        this.comics.characters.items.push({resourceURI: '', name: '', check: 'no available characters for this comics'});
      };

      console.log( this.comics );
    })
  }
  // Извлекаем из resourceURI последний элемент (ID персонажа)
  parseUrl(url: string){
    let splittedUrl: Array<string> = url.split('/');
    this.charcaterId.push(splittedUrl[splittedUrl.length - 1]);
  }

}
