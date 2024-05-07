import { GameProviderNamePipe } from './game-provider-name.pipe';

describe('GameProviderNamePipe', () => {
  it('create an instance', () => {
    const pipe = new GameProviderNamePipe();
    expect(pipe).toBeTruthy();
  });
});
