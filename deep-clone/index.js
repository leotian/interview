var deepClone = function(origObj) {
  var newObj = origObj instanceof Array ? [] : {}
  for (var i in origObj) {
    if (typeof origObj[i] === 'object') {
      newObj[i] = deepClone(origObj[i])
    } else {
      newObj[i] = origObj[i]
    }
  }
  return newObj
}

var oldObj = {
  a: { a: '1, 1', b: { c: '1, 3' } },
  b: { a: '2, 1' },
  c: { a: '3, 1', b: '3, 2', d: [3, 5], },
}
var newObj = deepClone(oldObj)
newObj.a.a  = 'vvvvvv'
newObj.c.d[1] = 10
console.log(oldObj)

console.log(newObj)