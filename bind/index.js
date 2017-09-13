Array.prototype.slice = function () {
  var result = []
  var start = arguments[0] || 0
  var end = arguments[1] || this.length
  for (var i = start; i < end; i++) {
    result.push(this[i])
  }
  return result
}

Function.prototype.bind = function(target) {
  var self = this
  return function () {
    self.apply(target, Array.prototype.slice.call(arguments))
  }
}

Function.prototype.bind = function (oThis) {
  if (typeof this !== "function") {
    throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
  }

  var aArgs = Array.prototype.slice.call(arguments, 1)
  var fToBind = this
  var fNOP = function () {}
  var fBound = function () {
    return fToBind.apply(
        this instanceof fNOP && oThis ? this : oThis || window,
        aArgs.concat(Array.prototype.slice.call(arguments))
    )
  }
  fNOP.prototype = this.prototype
  fBound.prototype = new fNOP()
  return fBound
};

function outName() {
  console.log(this.name)
}

var name = outName.bind({ name: 'wupengyu' })
name()

