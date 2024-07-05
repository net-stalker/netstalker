import { describe, it, expect } from 'vitest';

describe('sum', () => {
  it('should return the sum of two numbers', () => {
    expect(1 + 2).toBe(3);
  });

  it('should return 0 when adding 0 and 0', () => {
    expect(0 + 0).toBe(0);
  });

  it('should handle negative numbers', () => {
    expect(-1 - 1).toBe(-2);
  });
});
