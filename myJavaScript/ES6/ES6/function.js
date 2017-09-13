//ES5
/*function log(x, y) {
	y = y || 'World';
	console.log(x, y);
}

log('Hello') // Hello World
log('Hello', 'China') // Hello China
log('Hello', '') // Hello World
	//ES6默认参数
function point(x = 0, y = 1) {
	this.x = x;
	this.y = y;
}
var p = new point();
console.log(p)
console.log(typeof p)

//惰性求值
let x = 99;

function foo(p = x + 1) {
	console.log(p);
}

foo() // 100
x = 100;
foo() //101*/

//function 未完待续


//箭头函数（好烦人的东西）

// var f = v => v;
// console.log(f)

// var f = function(v) {
// 	return true;
// }

// console.log(f('ss'))

/*var arr = [1, 3, 2];
var result = arr.find(function(x) {
	return x > 0
})

console.log(result)*/

/*var arr2 = [, , 2];
var res = arr2.includes(undefined); //true
arr2.includes(null); //false
console.log([, ][0] === undefined); //true
//如果函数不需要参数，或者多个参数就使用一个小括号代表参数部分
var f = () => 5;
//等同于
var f = function() {
	return 5;
}
var sum = (num1, mum2) => num1 + num2;
var sum = function(num1, num2) {
		return num1 + num2;
	}
	//如果箭头函数的代码块多余一条语句，就要用大括号将他们括起来，并且使用return;
var sum = (num1, mum2) => {
		return num1 + num2;
	}
	// 由于大括号被解释为代码块，所以如果箭头函数直接返回一个对象，必须在对象外面加上括号。
var getObj = (id) => ({
	id: id,
	name: "tamp"
})
console.log(getObj('id'));
//{id: "id", name: "tamp"}id: "id"name: "tamp"
//__proto__: Object


//箭头函数可以与变量解构结合使用。(结构我hen烦的)
var person={
	'first':'li',
	'last':'zz'
}
//这函数怎么用着这么费劲
const fulla = ({first,last}) => first + ' ' + last;
console.log(fulla(person));

function full(person) {
  return person.first + ' ' + person.last;
}
console.log(full(person))
//简化回调函数
// var arr=[1,2,3].map(function(elem) {
// 	return elem**3;
// })
var arr=[1,2,3].map(ele=>ele**3);
console.log(arr)
//下面是 rest 参数与箭头函数结合的例子。
const numbers=(...nums)=>nums;

console.log(aaa(1,2,3));

function aaa(...nums){
	return nums
}
//console.log(...[1,2,3])//1 2 3

const headAndTail = (head, ...tail) => [head, tail];
headAndTail(1, 2, 3, 4, 5)// [1,[2,3,4,5]]
*/
//this 对象在箭头函数中他是固定的

/*function foo() {
  setTimeout(() => {
    console.log('id:', this.id);
  }, 100);
}

var id = 21;

foo({ id: 42 });//id:21
foo.call({ id: 42 })//id:42


function Timer() {
  this.s1 = 0;
  this.s2 = 0;
  // 箭头函数
  setInterval(() => this.s1++, 1000);
  // 普通函数
  setInterval(function () {
    this.s2++;
  }, 1000);
}

var timer = new Timer();

setTimeout(() => console.log('s1: ', timer.s1), 3100);//3
setTimeout(() => console.log('s2: ', timer.s2), 3100);//0


var handler = {
  id: '123456',

  init: function() {
    document.addEventListener('click',
      event => this.doSomething(event.type), false);
  },

  doSomething: function(type) {
    console.log('Handling ' + type  + ' for ' + this.id);
  }
};


function foo() {
  return () => {
    return () => {
      return () => {
        console.log('id:', this.id);
      };
    };
  };
}

var f = foo.call({id: 1});
var t1 = f.call({id: 2})()(); // id: 1
var t2 = f().call({id: 3})(); // id: 1
var t3 = f()().call({id: 4}); // id: 1


//函数的嵌套
function insert(value) {
  return {into: function (array) {
    return {after: function (afterValue) {
      array.splice(array.indexOf(afterValue) + 1, 0, value);
      return array;
    }};
  }};
}

insert(2).into([1, 3]).after(1); //[1, 2, 3]
//箭头函数的嵌套
let insert = (value) => ({into: (array) => ({after: (afterValue) => {
  array.splice(array.indexOf(afterValue) + 1, 0, value);
  return array;
}})});

insert(2).into([1, 3]).after(1); //[1, 2, 3]*/

//绑定this

//尾调用优化
//什么是尾调用：指某个函数的最后一步是调用另一个函数。
/*function f(x){
	return g(x);
}
function g(x){
	console.log(x)
}
f('i'); //i*/
//以下三种情况都不属于微调用
//情况一：
function g(x) {
	console.log(x)
}

function f(x) {
	let y = g(x);
	return y;
}
f('i') //i

//情况二：
function f(x) {
	g(x);
}
f('i') //i

//情况san：
function f(x) {
	return g(x) + 1;
}
f('i') //i