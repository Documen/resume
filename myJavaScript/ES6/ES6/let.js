/*console.log(111);
for (let i = 0; i < 10; i++) {
	// ...
}
for (var j = 0; j < 10; j++) {
	// ...
}
console.log(i);    //10
console.log(j);*/ //10



/*var a = [];
var i;
for (i = 0; i < 10; i++) {
	
	 
	 
	//console.log(i);
	a[i] = function() {
		console.log(i);
	};
	console.log(a[i])
}
a[6](); // 10*/


// let 定义的变量不能提前使用


// var tmp = 123;
// if (true) {
// 	tmp = 'abc';
// 	let tmp;
// 	console.log(tmp);
// }
// console.log(tmp);



// if (true) {
// 	// TDZ开始
// 	tmp = 'abc'; // ReferenceError
// 	console.log(tmp);

// 	let tmp; // TDZ结束
// 	console.log(tmp);

// 	tmp = 123;
// 	console.log(tmp);
// }


// var a = [];
// for (let i = 0; i < 10; i++) {
// 	a[i] = function() {
// 		console.log(i);
// 	};
// }
// a[6](); // 6



// console.log(typeof x); // ReferenceError
// let x;

// console.log(typeof undeclared_variable)


/*function aaa() {
	let a = 10;
	let a = 1;
}
aaa()*/


/*function func(arg) {
	let arg; // 报错
}
func()*/

function func(arg) {
	var arg; // 不报错
}
func()


//变量提升覆盖了
var tmp = new Date();

function f() {
	console.log(tmp);
	if (false) {
		var tmp = 'hello world';
	}
}

f();

//i泄露为全局变量
var s = 'hello';

for (var i = 0; i < s.length; i++) {
	console.log(s[i]);
}

console.log(i); // 5