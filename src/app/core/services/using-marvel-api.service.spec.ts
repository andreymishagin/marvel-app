import { TestBed } from '@angular/core/testing';

import { UsingMarvelApiService } from './using-marvel-api.service';

describe('UsingMarvelApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UsingMarvelApiService = TestBed.get(UsingMarvelApiService);
    expect(service).toBeTruthy();
  });
});
