// 原型继承
// 缺点: 子类实例共享属性，造成实例间的属性会相互影响
function Parent1() {
  this.name = ['super1']
  this.reName = function () {
    this.name.push('super111')
  }
}
function Child1() {

}
Child1.prototype = new Parent1()
var child11 = new Child1()
var child12 = new Child1()
var parent1 = new Parent1()
child11.reName()
console.log(child11.name, child12.name) // 可以看到子类的实例属性皆来自于父类的一个实例，即子类共享了同一个实例
console.log(child11.reName === child12.reName, '-------------')

// 构造函数继承
// 缺点: 父类的方法没有被共享，造成内存浪费

function Child2() {
  Parent1.call(this)
}

var child21 = new Child2()
var child22 = new Child2()
child21.reName()
console.log(child21.name, child22.name) // 子实例的属性都是相互独立的
console.log(child21.reName === child22.reName, '---------------') // 但是实例方法也是独立的，没有共享同一个方法

// 组合继承
// 缺点: 子类实例的属性存在两份

function Parent3() {
  this.name = ['super3']
}
Parent3.prototype.reName = function() {
  this.name.push('super31')
}
function Child3() {
  Parent3.call(this) // 生成子类的实例属性(但是不包括父对象的方法)
}
Child3.prototype = new Parent3() // 继承父类的属性和方法(副作用: 父类的构造函数被调用的多次，且属性也存在两份造成了内存浪费)
var child31 = new Child3()
var child32 = new Child3()
child31.reName()
console.log(child31.name, child32.name) // 子类实例不会相互影响
console.log(child31.reName === child32.reName, '------------') // 共享了父类的方法

// 寄生继承

function Parent4() {
  this.name = ['super4']
}
Parent4.prototype.reName = function() {
  this.name.push('super41')
}
function Child4() {
  Parent4.call(this) // 生成子类的实例属性(但是不包括父对象的方法)
}
Child4.prototype = Object.create(Parent4.prototype) // 该方法会使用指定的原型对象及其属性去创建一个新的对象
var child41 = new Child4()
var child42 = new Child4()
child41.reName()
console.log(child41.name, child42.name) // 子类实例不会相互影响
console.log(child41.reName === child42.reName, '-----------------') // 共享了父类的方法

// ES6 class

class Parent5 {
  constructor() {
    this.name = ['super5']
  }
  reName() {
    this.name.push('new 5')
  }
}

class Child5 extends Parent5 {
  constructor() {
    super()
  }
}

var child51 = new Child5()
var child52 = new Child5()
child51.reName()
console.log(child51.name, child52.name) // 子类实例不会相互影响
console.log(child51.reName === child52.reName, '-----------------') // 共享了父类的方法






