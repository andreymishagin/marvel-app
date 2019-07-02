import { Injectable, Injector } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { Hero } from '../models/hero';
import { ErrorService } from 'src/app/error.service';

@Injectable({
  providedIn: 'root'
})
export class UsingMarvelApiService {
  // API ключи получаем из environments
  marvelAPI = environment.marvelAPI;
  marvelAPIHash: string;
  marvelAPIKey: string;

  constructor(private http: HttpClient, private injector: Injector, private errorService: ErrorService) {
    this.marvelAPIHash = this.injector.get('MARVEL_API_HASH');
    this.marvelAPIKey = this.injector.get('MARVEL_API_PUBKEY');
  }
  // При инициализации компонента получаем общее количество комиксов или героев для определения последней страницы пагинации
  amountTotalPages(comicsOrCharacters) {
    const queryUrl = `${this.marvelAPI}/${comicsOrCharacters}?ts=1&apikey=${
      this.marvelAPIKey
    }&hash=${this.marvelAPIHash}`;
    return this.http.get<any>(queryUrl).pipe(
      map(resp => {
        return resp.data.total;
      })
    );
  }

  getCharacters (name, limit, offset):  Observable<Hero[]> {
    let queryUrl = `${this.marvelAPI}/characters?ts=1&apikey=${
      this.marvelAPIKey
    }&hash=${this.marvelAPIHash}`;
    if (name) {
      queryUrl += `&nameStartsWith=${name}`;
    } else {
      queryUrl += `&offset=${offset}`;
    }
    queryUrl += `&limit=${limit}`;
    return this.http.get<{
      data: {results: Array<Hero>}
    }>
    (queryUrl).pipe(
      map(resp => {
        return resp.data.results;
      }), catchError(err => { 
        this.log(err.message); 
        return throwError(err);
    })
    );
  }

  getHero(id) {
    const queryUrl = `${this.marvelAPI}/characters/${id}?ts=1&apikey=${
      this.marvelAPIKey
    }&hash=${this.marvelAPIHash}`;

    return this.http.get<any>(queryUrl).pipe(
      map(resp => {
        return resp.data.results;
      }), catchError(err => { 
        this.log(err.message); 
        return throwError(err);
    })
    );
  }
  getComics(limit, offset) {
    let queryUrl = `${this.marvelAPI}/comics?ts=1&apikey=${
      this.marvelAPIKey
    }&hash=${this.marvelAPIHash}`;

    queryUrl += `&offset=${offset}`;
    queryUrl += `&limit=${limit}`;

    return this.http.get<any>(queryUrl).pipe(
      map(resp => {
        return resp.data.results;
      }), catchError(err => { 
        this.log(err.message); 
        return throwError(err);
    })
    );
  }

  getComic(id) {
    const queryUrl = `${this.marvelAPI}/comics/${id}?ts=1&apikey=${
      this.marvelAPIKey
    }&hash=${this.marvelAPIHash}`;

    return this.http.get<any>(queryUrl).pipe(
      map(resp => {
        return resp.data.results;
      }), catchError(err => { 
        this.log(err.message); 
        return throwError(err);
    })
    );
  }
  // При ошибке get-запроса выводим ее на экран пользователю
  private log(message: string) {
    this.errorService.add(`Error: ${message}`);
  }
}
