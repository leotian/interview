var spaceStr = '    3333    '
String.prototype.trim1 = function() {
  return this.replace(/^\s+/, 'a').replace(/\s+$/, 'b')
}
String.prototype.trim2 = function() {
  return this.replace(/^\s+(.*?)\s+$/, "$1") // 捕获性分组会创建反向引用，js中可以通过 $+number 或者 "反斜杠"+number" 表示法进行引用, 其中“？”表示非贪婪捕获，“.”表示出了换行符以外的其他所有字符
}
console.log(spaceStr.trim1())
console.log(spaceStr.trim2())