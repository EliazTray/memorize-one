import JSON from 'json-cycle'

function memorizeOne(fn) {
  const map = new Map()

  return (...args) => {
    const argstr = JSON.stringify(args)

    let result = map.get(argstr)

    if (!result) {
      result = fn(...args)
      map.set(argstr, result)
    }

    return result
  }
}

export default memorizeOne
