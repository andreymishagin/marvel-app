import { Injectable, Injector } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';
import { Hero } from '../models/hero';
import { map } from 'rxjs/operators';
// API ключи получаем из environments
@Injectable({
  providedIn: 'root'
})
export class UsingMarvelApiService {

  marvelAPI = environment.marvelAPI;
  marvelAPIHash: string;
  marvelAPIKey: string;

  constructor(private http: HttpClient, private injector: Injector) {
    this.marvelAPIHash = this.injector.get('MARVEL_API_HASH');
    this.marvelAPIKey = this.injector.get('MARVEL_API_PUBKEY');
   }

   getCharacters({name = '' , limit = 60}) {
    let queryUrl = `${this.marvelAPI}/characters?ts=1&apikey=${this.marvelAPIKey}&hash=${this.marvelAPIHash}`;
    if (name) {
      queryUrl += `&nameStartsWith=${name}`;
    } else {

      queryUrl += `&offset=${Math.ceil(Math.random() * 300) + 20}`;
    }
    queryUrl += `&limit=${limit}`;
    return this.http.get<{
      data: {results: Array<Hero>}
    }>(queryUrl).pipe(
      map((resp) => {
        console.log(queryUrl);
        return resp.data.results;
      })
    );
  }
}
