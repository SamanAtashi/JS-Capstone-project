import commentCounter from '../src/js/countCommnets';

describe('Comment counting Function', () => {
  it('Should return the number of items', () => {
    const items = [{}, {}, {}, {}, {}, {}];
    expect(commentCounter(items)).toBe(6);
    expect(commentCounter([])).toBe(0);
  });
});
