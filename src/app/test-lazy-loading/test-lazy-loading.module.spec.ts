import { TestLazyLoadingModule } from './test-lazy-loading.module';

describe('TestLazyLoadingModule', () => {
  let testLazyLoadingModule: TestLazyLoadingModule;

  beforeEach(() => {
    testLazyLoadingModule = new TestLazyLoadingModule();
  });

  it('should create an instance', () => {
    expect(testLazyLoadingModule).toBeTruthy();
  });
});
