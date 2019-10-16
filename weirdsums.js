export const weirdsum1 = function (arg) {

  let currentSum = arg

  return function sum (num) {
    if (num === undefined) {
      return currentSum
    } else {
      currentSum += num
      return sum
    }
  }
}

export const weirdsum2 = function (arg) {

  let currentSum = arg

  function sum (num) {
    currentSum += num
    return sum
  }
  sum.toString = () => currentSum
  return sum
}

export const weirdsum1_1 = function (arg1) {
  return function (arg2) {
    return function (arg3) {
      return function (arg4) {
        return function () {
          return arg1 + arg2 + arg3 + arg4
        }
      }
    }
  }
}

export const weirdsum2_1 = function (arg1) {
  return function (arg2) {
    return function (arg3) {
      return function (arg4) {
        return arg1 + arg2 + arg3 + arg4
      }
    }
  }
}
