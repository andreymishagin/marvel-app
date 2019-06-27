import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule }   from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppComponent } from './app.component';
import { HerosAndComicsComponent } from './heros-and-comics/heros-and-comics.component';
import { HerosComponent } from './heros-and-comics/heros/heros.component';
import { ComicsComponent } from './heros-and-comics/comics/comics.component';
import { UsingMarvelApiService } from './core/services/using-marvel-api.service';
import { environment } from 'src/environments/environment';
import { HeroComponent } from './heros-and-comics/heros/hero/hero.component';

const routes: Routes =[
  { path: '', component: HerosAndComicsComponent, pathMatch: 'full'},
  { path: 'hero/:heroid', component: HeroComponent },
  { path: 'heros', component: HerosComponent },
  { path: 'comics', component: ComicsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    ComicsComponent,
    HerosAndComicsComponent,
    HerosComponent,
    ComicsComponent,
    HeroComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxPaginationModule
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
