/*//一、Array构造器
var a=Array(8);
console.log(a); //[undefined × 8]
//使用字面量
var b=[8];
console.log(b); //[8]

//Array构造器根据参数长度的不同，有如下两种不同的处理：
//1、 参数长度为零或大于等于2
	//大于等于2，参数按照次数成为数组的第0至第N项
var gtArr=new Array('arg1','arg2',);
console.log(gtArr);		// ["arg1", "arg2"]
	//参数为零的时候，返回一个空数组
var zero=new Array();
console.log(zero);		//[]
//2、参数为一个数的时候
	//是数字的时候，数组的长度
var one=new Array(5); 
console.log(one);   //[undefined × 5]
	//不是数组的时候,当做数组中元素，直接返回。
var noFigure=new Array('sfa');
console.log(noFigure);  //["sfa"]*/

/*//ES6中新增的构造函数方法
	//1、Array.of()  行为统一，参数直接做为数组中的元素
	var arr= Array.of(2);
	console.log(arr);          //[2]
	var arr= Array.of(2,3);		
	console.log(arr);			//[2, 3]
	var arr=Array.of('arr');
	console.log(arr);         //["arr"]
	//2、Array.from()  把一个有迭代器的对象转化成数组（返回新的数组，原对象不变）
	//Array.from 拥有3个形参，第一个：类似数组的对象，必选；第二个为加工函数；第三个是this的
	//作用域，表示加工时执行this的值。

	//拥有迭代器的对象：String Set Map arguments等
	var obj={
		0:'a',
		1:'b',
		2:'c',
		length:3
	}
	Array.from(obj,function(value,index){
		console.log(value,index,this,arguments.length);
		//a 0 {0: "a", 1: "b", 2: "c", length: 3} 2
		//b 1 {0: "a", 1: "b", 2: "c", length: 3} 2
		//c 2 {0: "a", 1: "b", 2: "c", length: 3} 2
		return value.repeat(3)//必须指定返回值
	},obj)

	//Set
	console.log(Array.from(new Set(['abc','def']))); //["abc", "def"]

	//Map
	console.log(Array.from(new Map([[1,'abc'],[2,'def']])));//[[1, 'abc'], [2, 'def']]

	//生成从0到指定数字的新数组
	var arr10=Array.from({length:10},(v,i)=>i);
	console.log(arr10); //[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
*/
//Array.isArray

var a=[];

//五种方法判断一个值是否是数组
//1、基于instanceof
a instancof Array;

//2、基于constructor
a.constructor===Array;

//3、基于Object.prototype.isPrototypeOf
Array.prototype.isPrototypeOf(a);

//4、getPrototypeOf
Object.getPrototypeOf(a)===Array.prototype;

//5、Object.prototype.toString
Object.prototype.toString.apply(a)==='[object Array]';

Array.isArray([]);









