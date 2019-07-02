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
  loadingComics: boolean;

  id: string;
  comics: Comics;
  charcaterId: Array<string> = [];

  constructor(
    private usingMarvelApiService: UsingMarvelApiService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.loadingComics = true;
    // Получаем id комикса из url и используем его как параметр для запроса к API
    this.activatedRoute.params.subscribe(params => (this.id = params.comicid));

    this.usingMarvelApiService.getComic(this.id).subscribe((comics: Comics) => {
      // Получаем id персонажей из выбранного комикса для перехода на личную страницу героя
      comics[0].characters.items.forEach(element => {
        this.parseUrl(element.resourceURI);
      });

      this.comics = comics[0];
      // Обработка случая, когда нет ни одного доступного персонажа для выбранного комикса
      if (this.comics.characters.available === 0) {
        this.comics.characters.items.push({
          resourceURI: '',
          name: '',
          check: 'no available characters for this comics'
        });
      }

      this.loadingComics = false;
    });
  }
  // Извлекаем из resourceURI последний элемент (id персонажа)
  parseUrl(url: string) {
    const splittedUrl: Array<string> = url.split('/');
    this.charcaterId.push(splittedUrl[splittedUrl.length - 1]);
  }
}
