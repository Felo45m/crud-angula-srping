import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { curseResolver } from './curse.resolver';

describe('curseResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => curseResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
