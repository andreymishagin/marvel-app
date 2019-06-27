import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsingMarvelApiService } from 'src/app/core/services/using-marvel-api.service';
import { Hero } from 'src/app/core/models/hero';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  id: string;
  hero: Hero;
  constructor(private usingMarvelApiService: UsingMarvelApiService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => this.id = params.heroid);

    this.usingMarvelApiService.getHero(this.id).subscribe((hero: Hero) => {

      this.hero = hero[0];
      // Не у всех персонажей есть описание, обработка таких случаев
      if (this.hero.description === "") this.hero.description = "no official description"

      console.log(this.hero);
    })
  }

}
