const sum = require('./index')

test('加法函数', () => {
  expect(sum(4, 2)).toBe(6)
  expect(sum(1, 2)).toBe(3)
  expect(sum(2, 2)).toBe(4)
  expect(sum(8, 2)).toBe(10)
})
