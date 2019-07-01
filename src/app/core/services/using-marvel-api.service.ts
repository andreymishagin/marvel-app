import { Injectable, Injector } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';
// API ключи получаем из environments
@Injectable({
  providedIn: 'root'
})
export class UsingMarvelApiService {

  marvelAPI = environment.marvelAPI;
  marvelAPIHash: string;
  marvelAPIKey: string;
  // Статическая переменная с общим количеством персонажей, необходимая для определения последнего элемента постраничного поиска
  public static totalComics: number;

  constructor(private http: HttpClient, private injector: Injector) {
    this.marvelAPIHash = this.injector.get('MARVEL_API_HASH');
    this.marvelAPIKey = this.injector.get('MARVEL_API_PUBKEY');
   }
   // При инициализации компонента получаем общее количество комиксов или героев для определения последней страницы пагинации
   amountTotalPages (comicsOrCharacters) {
    let queryUrl = `${this.marvelAPI}/${comicsOrCharacters}?ts=1&apikey=${this.marvelAPIKey}&hash=${this.marvelAPIHash}`;
    return this.http.get<any>(queryUrl).pipe(
      map(resp => {
        return resp.data.total;
      })
    );
   }

   getCharacters (name, limit, offset) {
    let queryUrl = `${this.marvelAPI}/characters?ts=1&apikey=${this.marvelAPIKey}&hash=${this.marvelAPIHash}`;
    if (name) {
      queryUrl += `&nameStartsWith=${name}`;
    } else {
      queryUrl += `&offset=${offset}`;
    }
    queryUrl += `&limit=${limit}`;
    return this.http.get<any>(queryUrl).pipe(
      map((resp) => {
        return resp.data.results;
      })
    );
  }

  getHero (id) {
    let queryUrl = `${this.marvelAPI}/characters/${id}?ts=1&apikey=${this.marvelAPIKey}&hash=${this.marvelAPIHash}`;
    
    return this.http.get<any>(queryUrl).pipe(
      map((resp) => {
        return resp.data.results;
      })
    );
  }
  getComics (limit, offset) {
    let queryUrl = `${this.marvelAPI}/comics?ts=1&apikey=${this.marvelAPIKey}&hash=${this.marvelAPIHash}`;

    queryUrl += `&offset=${offset}`;
    
    queryUrl += `&limit=${limit}`;

    return this.http.get<any>(queryUrl).pipe(
      map((resp) => {
        return resp.data.results;
      })
    );
  }

  getComic (id){
    let queryUrl = `${this.marvelAPI}/comics/${id}?ts=1&apikey=${this.marvelAPIKey}&hash=${this.marvelAPIHash}`;

    return this.http.get<any>(queryUrl).pipe(
      map((resp) => {
        return resp.data.results;
      })
    );
  }
}
