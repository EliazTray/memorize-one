import memorizeOne from '../src'

let i = 0
const fn = () => ++i
test('main', () => {
  const memoFn = memorizeOne(fn)
  expect(memoFn('input')).toEqual(memoFn('input'))
  expect(memoFn('input2')).toEqual(memoFn('input2'))
  expect(memoFn('input3')).toEqual(3)
  const a = { age: 1 }
  a.obj = a

  const b = { age: 1 }
  b.obj = b
  expect(memoFn(a)).toEqual(memoFn(a))
  expect(memoFn(a)).toEqual(memoFn(b))
})
