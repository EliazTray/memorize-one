# memorize-one

> Memorition function which return cache result when identity inputs.

[![NPM version](https://badgen.net/npm/v/memorize-one)](https://npmjs.com/package/memorize-one) [![NPM downloads](https://badgen.net/npm/dm/memorize-one)](https://npmjs.com/package/memorize-one) [![CircleCI](https://badgen.net/circleci/github/eliaz/memorize-one/master)](https://circleci.com/gh/eliaz/memorize-one/tree/master)

## Install

```bash
yarn add memorize-one
```

## Usage

```js
const memorizeOne = require('memorize-one')

let i = 0
const fn = () => ++i

const memoFn = memorizeOne(fn)
memoFn('input') // 1
memoFn('input') // 1

const a = { age: 1 }
a.obj = a

const b = { age: 1 }
b.obj = b

memoFn(a) // 2
memoFn(b) // 2

//=> foo
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

**memorize-one** © [Eliaztray](https://github.com/eliaztray), Released under the [MIT](./LICENSE) License.<br>
Authored and maintained by Eliaztray with help from contributors ([list](https://github.com/eliaztray/memorize-one/contributors)).

> [eliaztray](eliaztray) · GitHub [@Eliaztray](https://github.com/eliaztray) · Twitter [@eliaztray](https://twitter.com/eliaztray)
