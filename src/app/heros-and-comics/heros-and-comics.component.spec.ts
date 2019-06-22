import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HerosAndComicsComponent } from './heros-and-comics.component';

describe('HerosAndComicsComponent', () => {
  let component: HerosAndComicsComponent;
  let fixture: ComponentFixture<HerosAndComicsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HerosAndComicsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HerosAndComicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
