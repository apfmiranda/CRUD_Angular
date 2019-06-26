import { TestBed, async, inject } from '@angular/core/testing';

import { ContatoResolverGuard } from './contato-resolver.guard';

describe('ContatoResolverGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ContatoResolverGuard]
    });
  });

  it('should ...', inject([ContatoResolverGuard], (guard: ContatoResolverGuard) => {
    expect(guard).toBeTruthy();
  }));
});
