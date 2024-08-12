import { GameProviderNames } from '../../models/game-provider-names';
import { GameProviderLogoPipe } from './game-provider-logo.pipe';

describe('GameProviderLogoPipe', () => {
  const pipe = new GameProviderLogoPipe();

  it('should return Steam', () => {
    const name = GameProviderNames.STEAM;
    const result = pipe.transform(name);
    expect(result).toBe('/assets/steam.png');
  });

  it('should return Epic Game Store', () => {
    const name = GameProviderNames.EGS;
    const result = pipe.transform(name);
    expect(result).toBe('/assets/egs.png');
  });

  it('should return GoG', () => {
    const name = GameProviderNames.GOG;
    const result = pipe.transform(name);
    expect(result).toBe('/assets/gog.png');
  });

  it('should return Steam by default', () => {
    const name = 'SomeProviderName';
    const result = pipe.transform(name);
    expect(result).toBe('/assets/steam.png');
  });
});
