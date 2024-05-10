import { TestBed } from '@angular/core/testing';

import { PermissionsAdminGuard } from './permissions-admin.guard';

describe('PermissionsAdminGuard', () => {
  let guard: PermissionsAdminGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(PermissionsAdminGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
