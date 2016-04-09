'use strict'

export const add = (a, d) => {
  return a + d;
}

export const compare = (base, target) => {
  const a = base;
  const b = target;

  if (a === b) {
    return 0;
  }

  const _a = a.split('.');
  const _b = b.split('.');
  const len = Math.min(_a.length, _b.length);

  _a.forEach((item, index) => {
    _a[index] = parseInt(item, 10);
  });

  _b.forEach((item, index) => {
    _b[index] = parseInt(item, 10);
  });

  let i = 0;
  while (i < len) {
    if (_a[i] > _b[i]) {
      return 1;
    }
    if (_a[i] < _b[i]) {
      return -1;
    }
    i++;
  }

  if (_a.length > _b.length) {
    return 1;
  }
  if (_a.length < _b.length) {
    return -1;
  }
  return 0;
}

// hoge