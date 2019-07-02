import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialAppModule } from './ngmaterial.module';

import { AppComponent } from './app.component';
import { HeroesAndComicsComponent } from './heroes-and-comics/heroes-and-comics.component';
import { HeroesComponent } from './heroes-and-comics/heroes/heroes.component';
import { ComicsComponent } from './heroes-and-comics/comics/comics.component';
import { UsingMarvelApiService } from './core/services/using-marvel-api.service';
import { environment } from 'src/environments/environment';
import { HeroComponent } from './heroes-and-comics/heroes/hero/hero.component';
import { ComicComponent } from './heroes-and-comics/comics/comic/comic.component';
import { ErrorsComponent } from './errors/errors.component';

const routes: Routes = [
  { path: '', component: HeroesAndComicsComponent, pathMatch: 'full'},
  { path: 'hero/:heroid', component: HeroComponent },
  { path: 'heros', component: HeroesComponent },
  { path: 'comic/:comicid', component: ComicComponent },
  { path: 'comics', component: ComicsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    ComicsComponent,
    HeroesAndComicsComponent,
    HeroesComponent,
    ComicsComponent,
    HeroComponent,
    ComicComponent,
    ErrorsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    MaterialAppModule
  ],
  providers: [
    UsingMarvelApiService,
    {
      provide: 'MARVEL_API_PUBKEY',
      useValue: environment.marvelPubKey
    }, {
      provide: 'MARVEL_API_HASH',
      useValue: environment.marvelPubHash
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
