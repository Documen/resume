/*//扩展运算符：将数组变成参数数列
console.log(...[1, 2, 3]); //123
[...'hello']				// [ "h", "e", "l", "l", "o" ]

[...document.querySelectorAll('div')]
// [<div>, <div>, <div>]

//用于函数调用
function add(x, y, z) {
	return x + y + z;
}
var numbers = [4, 38, 56];
console.log(add(...numbers));

//代替apply将数组转为函数的参数
//ES5
function f(x, y, z) {
	// ...
	console.log(x + y + z);
}
var args = [0, 1, 2];
f.apply(null, args);

//ES6
function f(x, y, z) {
	// ...
	console.log(x + y + z);
}
var args = [0, 1, 2];
f(...args);

//求出数组中的最大数
//ES5
var max = Math.max.apply(null, [14, 3, 77]);
console.log(max);
//ES6
var max = Math.max(...[14, 3, 77]);
console.log(max);
*/
//数组的合并
/*var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
Array.prototype.push.apply(arr1, arr2);
console.log(arr1);

var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1.push(...arr2);
console.log(arr1);

console.log([...arr1, ...arr2])


//实现了 Iterator 接口的对象
var nodeList = document.querySelectorAll('div');
var array = [...nodeList];

let map = new Map([
	[1, 'one'],
	[2, 'two'],
	[3, 'three'],
]);

let arr = [...map.keys()];
var arr2 = [...map.values()];
console.log(arr)
console.log(arr2)*/


//Array.from()将两类对象转换成真正的数组
//1、类似数组的对象
//2、可遍历的对象
/*let arrayLike = {
	'0': 'a',
	'1': 'b',
	'2': 'c',
	'length': 3
}
var arr = Array.from(arrayLike);
console.log(arr)

// NodeList对象
window.onload = function() {
	let ps = document.querySelectorAll('p');
	var ARR = Array.from(ps);
	Array.from(ps).forEach(function(p) {
		console.log(p.innerHTML);
	});
	console.log(ARR)
}

// arguments对象
function foo() {
	var args = Array.from(arguments);
	// ...
}
*/


/*Array() // []
var arr = Array(3) // [, , ,]
	//console.log(arr[0])
Array(3, 11, 8) // [3, 11, 8]
	//当一个参数时候，代表的数组的长度，数组中的元素为undefined;
	//Array.of将一组值转化成数组,行为统一

var arr = Array.of(3);
console.log(arr) //[3]非常好用的方法
*/


//数组实例的copyWithin()将指定位置的成员复制到其他位置（覆盖原有成员）然后返回当前数组
// Array.prototype.copyWithin(target, start = 0; end = this.length);
/*
	target,  被取代元素开始的位置
	start = 0; 取代元素开始的位置
	end = this.length 取代元素结束的位置

console.log([1, 2, 3, 4, 5, 6, 7].copyWithin(0, 3));
*/

//数组的find()和findIndex()
/*
	find()
		找出第一个符合条件的数组成员，参数是回调函数，所有成员依次执行该回调
		函数，
		直到第一个返回值true，然后返回该成员。如果没有符合条件成员，返回undefined
	findIndex()
		找出第一个符合条件的数组成员，参数是回调函数，所有成员依次执行该回调
		函数，
		直到第一个返回值true，然后返回该成员的位置。如果没有符合条件成员，返回-1
		

*/
/*var res = [1, 2, 3, 4].find(func);
function func(n) {
	return n > 0;
}
/*
	(n)=>n<0;
	function (n){
		return n<0;
	}
*/
/*console.log(res); //1
var result = [1, 5, 10, 15].findIndex(function(value) {
	return value > 9;
})
console.log(result); //2

//可以找到NaN
var index = [NaN].findIndex(y => Object.is(NaN, y));
console.log(index); //0
var num = [NaN].find(y => Object.is(NaN, y));
console.log(num); //NaN*/

//数组实例的fill()
/*['a', 'b', 'c'].fill(7);
new Array(3).fill(7);
//接受第二个参数和第三参数，来指定填充的起始位置和结束位置
var arr = ['a', 'b', 'v'].fill(7, 1, 2);
console.log(arr); // ["a", 7, "v"]
['a', 'b', 'v'].fill(7, 1); // ["a", 7, 7]
*/

//数组实例的entries(),keys(),values()
/*
	三个方法都是用来遍历数组
	keys()是对键名的遍历
	values()是对键值的遍历
	entries()是对键值对的遍历
	for...of
*/
/*var arr = ['a', 'b', 'c'];
for (let index of arr.keys()) {
	console.log(index);
	//0
	//1
	//2
}*/
//可能还不支持
/*for (let elem of arr.values()) {
	console.log(elem);
}*/
/*for (let [index, value] of['a', 'c'].entries()) {
	console.log(index, value)
		//0 "a"
		//1 "c"
}
*/
//数组实例的includes()
//Array.prototype.includes() 方法返回一个布尔值，表示某个数组是否包含给定的值
/*console.log([1, 2, 3].includes(2)); //true
console.log([1, 2, 3].includes(4)); //false
console.log([1, 2, NaN].includes(NaN)); //true*/
//includes(参数1，参数2) 参数二表示搜索的其实位置，可以是负数则从数组后往前搜索
/*
	没有此方法以前
		if(indexOf(el)!==-1){
			//...
		}
		缺点：
			indexOf方法是找到参数第一次出现的位置(是索引而不是布尔值)
			[NaN].indexOf(NaN) 结果会是-1
	includes方法：
		[NaN].includes(NaN) //true

*/

//数组的空位 ：数组中的某个位置没有任何值。

/*console.log(Array(3)) //[,,,]   [undefined × 3]

// forEach(), filter(), every() 和some()都会跳过空位。
// map()会跳过空位，但会保留这个值
// join()和toString()会将空位视为undefined，而undefined和null会被处理成空字符串。
var arr = [, 'a'];
arr.forEach((x, i) => console.log(i)); //1
console.log(['a', , 'b'].filter(x => true)) //["a", "b"]
console.log([, 'a'].every(x => x === 'a')) //true
console.log([, 'a'].some(x => x !== 'a')) //false
console.log([, 'a'].map(x => 1)) //[,1] [undefined*1,1]
	//join()
console.log([, 'a', undefined, null].join('#')) //#a##
	//toString()
console.log([, 'a', undefined, null].toString()) //,a,,

// ES6 则是明确将空位转为undefined。
//Array.from方法会将数组的空位，转为undefined
Array.from(['a', , 'b']) //['a',undefined,'b']
	//扩展运算符（...）也会将空位转为undefined。
console.log([...['a', , , 'b']]) //['a',undefined,'b']
	//copyWithin()会连空位一起拷贝。
	//[, 'a', 'b', , ].copyWithin(2, 0) //[,"a",,"a"]
	//	fill()会将空位视为正常的数组位置。
new Array(3).fill('a') //["a","a","a"]*/
//for...of循环也会遍历空位。
/*let arr = [, , ];
for (let i of arr) {
	console.log(1);
}
// 1
// 1*/
//entries()、 keys()、 values()、 find() 和findIndex() 会将空位处理成undefined。
//[...[, 'a'].entries()] // [[0,undefined], [1,"a"]]

// keys()
//[...[, 'a'].keys()] // [0,1]

// values()
//[...[, 'a'].values()] // [undefined,"a"]



console.log([, ][0]); //undefined
console.log([undefined][0] == true); //false
console.log([, ][0] == true); //false
console.log(typeof [, 'a'].find(x => true)) //undefined



arr2.includes(undefined); //true
[, ][0] === (undefined); //true