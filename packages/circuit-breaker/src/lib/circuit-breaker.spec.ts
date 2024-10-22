import { circuitBreaker } from './circuit-breaker';

describe('circuitBreaker', () => {
  it('should work', () => {
    expect(circuitBreaker()).toEqual('circuit-breaker');
  });
});
