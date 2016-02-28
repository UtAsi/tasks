'use strict'
import assert from 'power-assert'
import { add } from '../src/js/util'

describe('util test', () => {
  it('add 値が正常であること', () => {
    const a = 1;
    const b = 2;
    const result = add(a, b);
    assert.equal(result, 3)
  });
})