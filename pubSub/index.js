function PubSub() {
  this.handlers = {};
}

PubSub.prototype = {
  // 订阅事件
  on: function(type, handler) {
    var self = this
    if (!self.handlers[type]) self.handlers[type] = [handler]
    else {
      self.handlers[type].push(handler)
    }
  },
  // 发布事件
  emit: function(type) {
    var self = this
    var handler = self.handlers[type].shift()
    var handArgs = Array.prototype.slice.call(arguments, 1)
    handler.apply(self, handArgs)
  }
}

var pubSub = new PubSub()

pubSub.on('A', function(a, b, c) {
  console.log('111111111', a, b, c)
})

pubSub.on('A', function(c, b, a) {
  console.log('2222222222222', a, b, c)
})

pubSub.emit('A', 1, 2, 3)
pubSub.emit('A', 1, 2, 3)
pubSub.emit('A', 1, 2, 3)


