/*
for (variable of iterable){
	variable:每个迭代的属性值被分配给variable
	iterable:一个具有可枚举属性并且可以迭代的对象
}
*/

/*//Arrays
const iterable=['a','b','c'];
for (const value of iterable){
	console.log(value);//a b c
}

//Map
const iterable2=new Map([['one',1],['two',2],['three',3]]);
for (let [key,value] of iterable2){
	console.log(`key:${key} and value:${value}`);
}

//Set
const iterable3=new Set([1,1,2,2,1]);
for (var value of iterable3){
	console.log(value);
}

//String
const iterable4='forof';
for( const value of iterable4){
	console.log(value);
}
*/
/*//Arguments Object
function args(){
	for(var arg of arguments){
		console.log(arg);
	}
}
//args('a','b','c');
function fn(){
	return 'fucntion';
}
	//给args（）传入对象或者数组
	args('a','w3c',{'name':'Ryan'},['a',1,3],fn());


//Generators 生成器是一个函数，它可以退出函数，稍后重新进入函数。
function* generator(){
	yield 1;
	yield 2;
	yield 3;
}

for (const g of generator()){
	console.log(g)
}



	*关闭迭代器
	*break
	*continue
	*return
	*throw

//break   dog
var iterable=['dog','cat','mouse'];
for (var animal of iterable){
	console.log(animal);
	break;		
}

//普通对象不可迭代
const obj={fname:'foo',lname:'bar'};
/*for (var value of obj){
	console.log(value);//obj[Symbol.iterator] is not a function
}
*/

/*//类似数组的对象转找成一个数组
let obj2={length:3,0:'foo',1:'bar',2:'baz'};
var arr=Array.from(obj2);
console.log(arr);
*/


//for...of vs. for...in
Array.prototype.newArr=()=>[];
const array=['foo','bar','baz'];
for(const value in array){
	console.log(value); //0 1 2 newArr
}

for(const value of array){
	console.log(value);	//foo  bar baz
}