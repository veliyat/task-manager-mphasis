import { TestBed, async, inject } from '@angular/core/testing';

import { TaskNotSavedGuard } from './task-not-saved.guard';

describe('TaskNotSavedGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TaskNotSavedGuard]
    });
  });

  it('should ...', inject([TaskNotSavedGuard], (guard: TaskNotSavedGuard) => {
    expect(guard).toBeTruthy();
  }));
});
