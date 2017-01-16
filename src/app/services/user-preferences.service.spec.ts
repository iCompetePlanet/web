/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { UserPreferencesService } from './user-preferences.service';

describe('UserPreferencesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserPreferencesService]
    });
  });

  it('should ...', inject([UserPreferencesService], (service: UserPreferencesService) => {
    expect(service).toBeTruthy();
  }));
});
