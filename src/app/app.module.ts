import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HerosAndComicsComponent } from './heros-and-comics/heros-and-comics.component';
import { HerosComponent } from './heros-and-comics/heros/heros.component';
import { ComicsComponent } from './heros-and-comics/comics/comics.component';

const routes: Routes =[
  { path: '', component: HerosAndComicsComponent, pathMatch: 'full'},
  { path: 'heros', component: HerosComponent},
  { path: 'comics', component: ComicsComponent },
  { path: '**', redirectTo: ''}
];

@NgModule({
  declarations: [
    AppComponent,
    HerosComponent,
    ComicsComponent,
    HerosAndComicsComponent,
    HerosComponent,
    ComicsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
