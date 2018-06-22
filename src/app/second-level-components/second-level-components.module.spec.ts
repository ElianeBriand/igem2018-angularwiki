import { SecondLevelComponentsModule } from './second-level-components.module';

describe('SecondLevelComponentsModule', () => {
  let secondLevelComponentsModule: SecondLevelComponentsModule;

  beforeEach(() => {
    secondLevelComponentsModule = new SecondLevelComponentsModule();
  });

  it('should create an instance', () => {
    expect(secondLevelComponentsModule).toBeTruthy();
  });
});
