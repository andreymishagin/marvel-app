import { Component, OnInit } from '@angular/core';
import { UsingMarvelApiService } from 'src/app/core/services/using-marvel-api.service';
import { Comics } from 'src/app/core/models/comics';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.css']
})
export class ComicsComponent implements OnInit {

  comics: Array<Comics> = [];
  page: number = 1;
  totalPages: number;

  limitOfComics: number;
  offset: number;

  constructor(private usingMarvelApiService: UsingMarvelApiService) { }

  ngOnInit() {
    this.limitOfComics = 10;
    this.offset = 0;

    this.usingMarvelApiService.getComics(this.limitOfComics, this.offset).pipe(
      map((resp) => {
        this.totalPages = resp.data.total;
        return resp.data.results;
      })
    )
    .subscribe((comics: Array<Comics>) => {
      this.comics = comics;

      this.comics.forEach(element => {
        if (element.description === null) element.description = "no short description"
      });
      console.log(this.comics);
    });
  };

  loadSelectedList(page) {
    // Задаем оффсет через переменную страницы из пагинации
    this.offset = page * 10 - 10;

    this.usingMarvelApiService.getComics(this.limitOfComics, this.offset).pipe(
      map((resp) => {
        return resp.data.results;
      })
    )
    .subscribe((comics: Array<Comics>) => {
      this.comics = comics;

      this.comics.forEach(element => {
        if (element.description === null) element.description = "no short description"
      });
    })
  }
}
