/**
 * with 语句用于设置代码在特定对象中的作用域
 *
 * @link http://www.ecma-international.org/ecma-262/5.1/#sec-12.10
 *
 * 缺点:
 * 可读性差 (难以定位标志符所属的作用域)
 * 效率低 (遍历对象原型链)
 *
 *
 * strict 模式下不允许使用
 */
var fruit = 'apple'

var user = {
  name: 'charles'
}

with (user) {
  console.log(a)
  console.log(name, 'like to eat', fruit)
}