import { TestBed } from '@angular/core/testing';

import { TokenPermissionService } from './token-permission.service';

describe('TokenPermissionService', () => {
  let service: TokenPermissionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokenPermissionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
