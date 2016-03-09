'use strict'
import assert from 'power-assert'
import { add, compare } from '../src/js/util'

describe('util test', () => {
  it('add 値が正常であること', () => {
    const a = 1;
    const b = 2;
    const result = add(a, b);
    assert.equal(result, 3)
  });

  it('compare 1 base 1, target 2: return result -1', () => {
    const base = '1';
    const target = '2';
    const result = compare(base, target);
    assert.equal(result, -1)
  });

  it('compare 1 base 2, target 1: return result 1', () => {
    const base = '2';
    const target = '1';
    const result = compare(base, target);
    assert.equal(result, 1)
  });

  it('compare 1 base 2, target 2: return result 0', () => {
    const base = '2';
    const target = '2';
    const result = compare(base, target);
    assert.equal(result, 0)
  });

  it('compare 2 base 1.0, target 1.4: return result -1', () => {
    const base = '1.0';
    const target = '1.4';
    const result = compare(base, target);
    assert.equal(result, -1)
  });

  it('compare 2 base 1.0, target 1.41: return result -1', () => {
    const base = '1.0';
    const target = '1.41';
    const result = compare(base, target);
    assert.equal(result, -1)
  });

  it('compare 2 base 1.4, target 1.40: return result -1', () => {
    const base = '1.4';
    const target = '1.40';
    const result = compare(base, target);
    assert.equal(result, -1)
  });

  it('compare 2 base 1.4, target 1.0: return result 1', () => {
    const base = '1.4';
    const target = '1.0';
    const result = compare(base, target);
    assert.equal(result, 1)
  });

  it('compare 2 base 1.42, target 1.0: return result 1', () => {
    const base = '1.42';
    const target = '1.0';
    const result = compare(base, target);
    assert.equal(result, 1)
  });

  it('compare 2 base 1.0, target 1.0: return result 0', () => {
    const base = '1.0';
    const target = '1.0';
    const result = compare(base, target);
    assert.equal(result, 0)
  });

  it('compare 2 base 1.44, target 1.44: return result 0', () => {
    const base = '1.44';
    const target = '1.44';
    const result = compare(base, target);
    assert.equal(result, 0)
  });


  it('compare 3 base 1.0.0, target 1.0.1: return result -1', () => {
    const base = '1.0.0';
    const target = '1.0.1';
    const result = compare(base, target);
    assert.equal(result, -1)
  });

  it('compare 3 base 1.9.0, target 1.10.1: return result -1', () => {
    const base = '1.9.0';
    const target = '1.10.1';
    const result = compare(base, target);
    assert.equal(result, -1)
  });

  it('compare 3 base 1.0.1, target 1.0.0: return result 1', () => {
    const base = '1.0.1';
    const target = '1.0.0';
    const result = compare(base, target);
    assert.equal(result, 1)
  });

  it('compare 3 base 1.10.2, target 1.10.1: return result 1', () => {
    const base = '1.10.2';
    const target = '1.10.1';
    const result = compare(base, target);
    assert.equal(result, 1)
  });

  it('compare 3 base 1.0.1, target 1.0.1: return result 0', () => {
    const base = '1.0.1';
    const target = '1.0.1';
    const result = compare(base, target);
    assert.equal(result, 0)
  });

  it('compare 3 base 1.11.1, target 1.11.1: return result 0', () => {
    const base = '1.11.1';
    const target = '1.11.1';
    const result = compare(base, target);
    assert.equal(result, 0)
  });

})