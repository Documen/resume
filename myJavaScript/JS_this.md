## 1.引用赋值
<pre>
// 普通赋值
var str1 = 'Hello world';
var str2 = str1;    // str1和str2在内存中指向不同的地址

// 修改str2
str2 = 'Hello JS';

// str1和str2是相互独立的两个变量，str1不会因为str2被修改而修改
console.log(str1); // Hello world
console.log(str2); // Hello JS
</pre>
<pre>
// 引用赋值
var obj1 = {username:"张三"};
var obj2 = obj1;    // obj1和obj2在内存中指向同一个地址

// 修改obj2
obj2.username = "李四";

// 因为指向同一个地址，所以其中的一个变化，另外一个跟着改变
console.log(obj1);	// {username:"李四"}
console.log(obj2);	// {username:"李四"}
</pre>
<pre>
// obj3和obj4虽然都是{},但是它们在内存中指向不同的内存地址，所以不想等
var obj3 = {};
var obj4 = {};
console.log(obj3==obj4);
</pre>

## 2.函数也是对象
<pre>
functionName.length:函数参数个数
functionName.name:函数名
</pre>

## 3.this关键字
1. **指向调用函数的对象**
2. **无对象调用函数/匿名函数自调用->this指向window**
3. **通过new产生的对象**
4. **apply/call调用**

## 4.apply()/call():最终是调用function，只不过内部的this指向了thisObj
<pre>
function.call([thisObj[,arg1[, arg2[, [,.argN]]]]])
function.apply([thisObj[,argArray]])

注意：
1. 调用function函数，但是函数内的this指向thisObj（更改对象内部指针）
2. 如果thisObj没有传参，则默认为全局对象
3. call()/apply()联系与区别
    联系：功能一样，第一个参数都是thisObj
    区别：传递的参数如果比较多
        call()的实参就是一一列出
        apply()的实参是全部放置在第二个数组参数中
</pre>

## 5.闭包：闭包是有权访问另外一个函数作用域中变量的函数，即在一个函数内部创建另外一个函数
<pre>
// fun返回的是函数
function fun() {
    var str = "Hello world";

    // fun1被称之为是闭包
    function fun1() {
        alert(str);
    }

    return fun1;
}
var f = fun();
f();    // Hello world
</pre>
## 6.构造函数/原型/实例对象
<pre>
// 构造函数(类)
function Person(){
    this.username = 'zhangsan';
    this.say = function(){
        alert('Hello world');
    }
}

// 原型对象 Person.prototype
// 给原型对象添加属性和方法
Person.prototype.school = '兄弟连';
Person.prototype.study = function(){
    alert('好好学习，天天向上');
}

// 实例对象
var p = new Person();
// 同时具有构造函数和原型对象的属性和方法
p.username
p.school
p.say()
p.study()
</pre>
