import { async, TestBed } from '@angular/core/testing';
import { CoreFeaturesTodosModule } from './core-features-todos.module';

describe('CoreFeaturesTodosModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [CoreFeaturesTodosModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(CoreFeaturesTodosModule).toBeDefined();
  });
});
