//数组的结构赋值
/*let [a, b, c] = [1, 2, 3];
console.log(a, b, c);
*/
//对象的结构赋值
/*let {
	foo,
	bar
} = {
	foo: "aaa",
	bar: "bbb"
}
console.log(foo, bar)
*/
//变量名与属性名不一致
// let {
// 	foo: baz
// } = {
// 	foo: 'aaa',
// 	bar: 'bbb'
// };
// console.log(baz)
// console.log(foo)


/*这里又跟书上说的不一样了额*/
/*let {
	foo: baz,
	bar: xxx
} = {
	foo: "aaa",
	bar: "bbb"
};

//console.log(baz, foo, bar, xxx)
baz // "aaa"
foo*/


/*解构赋值很是懵逼，，还是看看用途吧*/
/*
 *用途
 *1、交换变量的值
 *2、从函数返回多个值
 
 */
/*1、交换变量的值*/
// var a = 1;
// var b = 2;
// [a, b] = [b, a];
// console.log(a, b);
/*2、从函数返回多个值*/
/*function example() {
	return [1, 2, 3];
}
let [a, b, c] = example();
console.log(a, b, c);

function example2() {
	return {
		oo: 1,
		ar: 2
	}
}
let {
	oo,
	ar
} = example2();
console.log(oo, ar)*/

/*（3）函数参数的定义*/

// function func([x, y, z]) {

// }
// func([1, 2, 3])
/*这样做不就可以了吗*/
/*function func(x, y, z) {}
func(1, 2, 3)*/

/*let jsonData = {
	id: 42,
	status: "OK",
	data: [867, 5309]
};

let {
	aaaa,
	status,
	data: number
} = jsonData;

console.log(aaaa, status, number);*/ //undefined "OK" (2) [867, 5309]
//console.log(w, q, number);