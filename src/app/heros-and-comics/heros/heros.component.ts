import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { UsingMarvelApiService } from 'src/app/core/services/using-marvel-api.service';
import { Hero } from 'src/app/core/models/hero';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  hero: Hero;

  searchForm: FormGroup = new FormGroup({
    name: new FormControl('', [])
  });

  constructor(private usingMarvelApiService: UsingMarvelApiService) { }

  ngOnInit() {
    this.usingMarvelApiService.getCharacters({}).subscribe((data: any) => {
      this.hero = data;
      console.log(this.hero);
      //console.log(data);
    })
  }

}
