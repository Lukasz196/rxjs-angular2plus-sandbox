import {TestBed} from '@angular/core/testing';

import {FakeRestServiceService} from './fake-rest-service.service';

describe('FakeRestServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FakeRestServiceService = TestBed.get(FakeRestServiceService);
    expect(service).toBeTruthy();
  });
});
