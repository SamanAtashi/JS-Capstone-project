import itemCounter from '../src/js/itemCounter';

describe('Item counting Function', () => {
  test('should return the number of items', () => {
    const items = [{}, {}, {}, {}, {}, {}];
    expect(itemCounter(items)).toBe(6);
  });
});
