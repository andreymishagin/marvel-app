import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  searchForm: FormGroup = new FormGroup({
    name: new FormControl('', [])
  });

  constructor() { }

  ngOnInit() {
  }

}
