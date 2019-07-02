import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroesAndComicsComponent } from './heroes-and-comics.component';

describe('HeroesAndComicsComponent', () => {
  let component: HeroesAndComicsComponent;
  let fixture: ComponentFixture<HeroesAndComicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroesAndComicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroesAndComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
