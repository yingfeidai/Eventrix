import { distributedLock } from './distributed-lock';

describe('distributedLock', () => {
  it('should work', () => {
    expect(distributedLock()).toEqual('distributed-lock');
  });
});
