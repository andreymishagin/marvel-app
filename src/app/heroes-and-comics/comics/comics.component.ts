import { Component, OnInit } from '@angular/core';
import { UsingMarvelApiService } from 'src/app/core/services/using-marvel-api.service';
import { Comics } from 'src/app/core/models/comics';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  loadingComics: boolean;

  comics: Array<Comics> = [];
  page = 1;
  totalPages: number;

  limitOfComics: number;
  offset: number;

  constructor(private usingMarvelApiService: UsingMarvelApiService) { }

  ngOnInit() {
    this.loadingComics = true;
    this.limitOfComics = 10;
    this.offset = 0;
    // Получаем общее количество комиксов для определения пагинации
    this.usingMarvelApiService.amountTotalPages('comics').subscribe(totalPages => this.totalPages = totalPages);

    this.usingMarvelApiService.getComics(this.limitOfComics, this.offset)
    .subscribe((comics: Array<Comics>) => {
      this.comics = comics;

      this.comics.forEach(element => {
        if (element.description === null) { element.description = 'no short description'; }
      });
      console.log(this.comics);
      this.loadingComics = false;
    });
  }

  loadSelectedList(page) {
    this.loadingComics = true;
    // Задаем оффсет через переменную страницы из пагинации
    this.offset = page * 10 - 10;

    this.usingMarvelApiService.getComics(this.limitOfComics, this.offset)
    .subscribe((comics: Array<Comics>) => {
      this.comics = comics;

      this.comics.forEach(element => {
        if (element.description === null) { element.description = 'no short description'; }
      });
      this.loadingComics = false;
    });
  }
}
