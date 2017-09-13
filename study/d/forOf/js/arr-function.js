/*
	*map()： 为每个现有的东西返回一个东西
	*filter(): 只返回一些现有的东西
	*reduce()：只返回一个东西
	*forEach()：不返回任何东西，只是对现有的东西做一些事情
*/
//map() 
const Arr=[1,2,3];
const newArr=Arr.map((item)=>item*2);
console.log(newArr)
//filter()  返回一个新数组，只包含一些符合条件的现有数组filter()
const  Arr2 =[1,4,9,5,42];
const newArr2=Arr2.filter(item=>item>5);
console.log(newArr2);
//reduce   只返回一个东西
// 如果你有一系列的值，但是只想从他们中返回一个新东西
//example 想看一下Bob这个名字出现的次数
const Arr3=['Alice','Bob','Charlie','BOB','Bob','Charlie'];
const numberOfBob=Arr3.reduce((count,item)=>{
	if(item=='Bob'){
		return count+1;
	}else{
		return count;
	}
},0)
console.log(numberOfBob)

//forEach() 对数组中的每一个值做一些事情，但不返回任何值

const Arr4=[1,2,3];
Arr4.forEach(
	function(item){
		//doSomething(item);
	}
)


var lis=document.querySelectorAll('li');
lis.forEach(
	var _this=this;
	-this.onclick=function(){
		console.log(this.innerHTML);
		console.log(this)
	}
)