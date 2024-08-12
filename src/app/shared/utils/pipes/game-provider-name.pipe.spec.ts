import { GameProviderNames } from '../../models/game-provider-names';
import { GameProviderNamePipe } from './game-provider-name.pipe';

describe('GameProviderNamePipe', () => {
  const pipe = new GameProviderNamePipe();

  it('should return Steam', () => {
    const name = GameProviderNames.STEAM;
    const result = pipe.transform(name);
    expect(result).toBe('Steam');
  });

  it('should return Epic Game Store', () => {
    const name = GameProviderNames.EGS;
    const result = pipe.transform(name);
    expect(result).toBe('EGS');
  });

  it('should return GoG', () => {
    const name = GameProviderNames.GOG;
    const result = pipe.transform(name);
    expect(result).toBe('GoG');
  });

  it('should return Steam by default', () => {
    const name = 'SomeProviderName';
    const result = pipe.transform(name);
    expect(result).toBe('Steam');
  });
});
