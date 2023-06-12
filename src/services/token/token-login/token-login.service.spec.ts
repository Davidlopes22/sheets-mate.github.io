import { TestBed } from '@angular/core/testing';

import { TokenUserService } from './token-login.service';

describe('TokenService', () => {
  let service: TokenUserService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenUserService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
