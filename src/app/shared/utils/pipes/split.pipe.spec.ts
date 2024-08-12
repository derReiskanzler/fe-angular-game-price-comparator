import { SplitPipe } from './split.pipe';

describe('SplitPipe', () => {
  const pipe = new SplitPipe();

  it('should split', () => {
    const string = 'some/thing/to/split';
    const result = pipe.transform(string, '/');
    expect(result.length).toBe(4);
  });
});
