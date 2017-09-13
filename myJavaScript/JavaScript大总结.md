#JavaScript

## 1. 基本语法
### 1.1 引入
- 内联试
<pre>
&lt;a href="javascript:void(0)" onclick="alert('ok')"&gt;点击&lt;/a&gt;
</pre>
- 内嵌式
<pre>
&lt;script&gt;
alert('ok');
&lt;/script&gt;
</pre>
- 外链式
<pre>
&lt;script src="demo.js"&gt;&lt;/script&gt;
</pre>
### 1.2 调试输出
1. alert():将内容通过对话框弹出到浏览器
- document.write():将内容直接输出到浏览器
- console.log():将内容输出到浏览器的控制台

### 1.3 语句
1. javascript代码的末尾不必须添加分号，但是推荐加上
- **javascript严格区分大小写**
- javascript会忽略多余的空格
- javascript是脚本语言，浏览器在读取代码时，逐行的执行脚本代码。而对于传统的编程来说，会在执行前对所有代码进行编译（解释型语言）
- 程序都是从0开始计数

### 1.4 注释
1. 单行注释：(双斜杠)//
- 多行注释：/**/

### 1.5 变量：
- 存储信息的“容器”
- **变量的命名规则：变量名由字母，数字，下划线和$组成，且不能以数字开头**
<pre>
// 申明变量
var username = 'zhangsan';

// 同时申明多个变量
var username = 'zhangsan', age = 30, sex = '男';

// 申明变量但是不赋值
var username;

// 不使用var申明变量
username = 'zhangsan';
</pre>

<mark>一个好的编程习惯是，在代码开始处，统一对需要的变量进行声明。</mark>

### 1.6 数据类型
**字符串（String）、数字（Number）、布尔（Boolean）、对象（Object）、空（Null）、未定义（Undefined）函数(Function)**
<p>使用typeof检测数据类型</p>

#### 1.6.1 字符串（String）
- 使用单引号和双引号定义字符串
- 单双引号需要注意的内容
	- 单双引号没有区别，都不解析变量
	- 单双引号可以相互嵌套
	- 不可以嵌套自身，除非使用转义字符转义
  
#### 1.6.2 数字（Number）
- 整型
- 浮点型（计算的时候有计算损耗，不建议进行精确计算）
- NaN(Not a number)
	- NaN与任何值运算都为NaN
	- NaN与任何值都不想等，包括自身
	- isNaN():判断一个值是否时NaN

#### 1.6.3 布尔（Boolean）
- true
- false

#### 1.6.4 数组
<pre>
	// 1. 创建数组的方式
	var cars = new Array();
	cars[0] = 'BMW';
	cars[1] = 'BYD';
	cars[2] = 'BenZ';
	
	// 2.直接定义数组
	var cars = new Array('BMW', 'BYD', 'Benz');
	
	// 3.简单定义
	var cars = ['BMW', 'BYD', 'Benz'];
	
	// 4.数组元素的值可以是任何值
	var shoplist = ['zhangsan',20,true,null,undefined,[1,2,3],{}];
	
	// 5.常用的一种复合数据(瀑布流，AngularJS中$scope.shoplist)
	var shoplist = [
		{id:1,username:"zhangsan",age:20,sex:"男"},
		{id:2,username:"lisi",age:18,sex:"女"},
		{id:3,username:"wangwu",age:32,sex:"男"}
	];
</pre>

#### 1.6.5 对象
<pre>
	// 1.｛｝定义对象(jquery中animate,$.ajax({}))
	var obj = {
		username:"zhangsan",
		age:20,
		sex:"男",
		say:function(){},
		eat:function(){}
	}
	
	// 2.使用new Object()定义
	var obj = new Object();
	obj['username'] = 'zhangsan';
	obj.age = 20;
	obj.say = function(){}
	
	// 3.使用构造函数定义
	function Ball(){
		this.x = 100;
		this.y = 100;
		this.radius = 50;
		this.draw = function(){}
	}
	// 通过new关键字生成对象
	var b = new Ball();
</pre>

#### 1.6.6 Undefined
- 未定义的变量	alert(typeof age)
- 定义但是未赋值的变量 var sex; alert(typeof age)

#### 1.6.7 Null
- 将值设置为null清空变量

### 1.7 数据类型的相互转化
#### 1.7.1 转化为字符串
- String()

#### 1.7.2 转化为布尔
- Boolean()
	- **'' 0 0.0 NaN false null undefined->false**
	- 其余都为真（'false','0','null'）

#### 1.7.3 转化为数值 <mark>不包含进制之间的转化</mark>
- Number()	
	1. 普通字符串->NaN
	2. 纯数字字符串,数值->原型输出
	3. 空字符串'',空格字符串' ',null->0
	4. true->1  false->0
	5. undefined->NaN
- parseInt()
	- **从第一个字符开始查找，直到找到非法字符(非数字)截止，返回找到的数字**
- parseFloat()
	- **从第一个字符开始查找，直到找到非法字符(除数字和第一个小数点之外的字符)截止，返回找到的数字**

### 1.8 运算符
#### 1.8.1 算术运算符 + - * / % ++ --
#### 1.8.2 赋值运算符 = += -= *= /= %=
#### 1.8.3 **连接运算符 +**
- ＋号两边是纯数字：＋代表加法运算
- 除此之外，＋都是连接运算

#### 1.8.4 比较运算符 == === !=!== > < <= > >=
#### 1.8.5 逻辑运算符
- &&（两真为真，其余都为假）
- ||（两假为假，其余都为真）
- ! （取反）

#### 1.8.6 条件运算符（三元运算符）
3==3 ? value1 : value2;

### 1.9 流程控制：条件语句
#### 1.9.1 if条件语句(范围判断)
<pre>
// 定义变量
var age = 24;

// 只有if判断
if (age < 18) {
	console.log('小弟弟，你好小');
}

// if...else...判断
if (age < 18) {
	// 当年龄小于18岁的时候，执行此段代码
	console.log('你还小，不要祸害小姑娘');
} else {
	// 当年龄大于等于18岁的时候，执行此段代码
	console.log('不小了，找个小姑娘吧');
}

// if...else if...else...
if (age < 18) {
	console.log('小弟弟，你还小');
} else if (age >= 18 && age < 24) {
	console.log('你还是一个剩斗士');
} else if (age >= 24 && age < 30) {
	console.log('你是一个必剩客');
} else {
	console.log('你乃齐天大剩也');
}
</pre>
 
#### 1.9.2 switch语句（具体值判断）
<pre>
var month = 1;
switch (month) {
	case 1:
	case 3:
	case 5:
	case 7:
	case 8:
	case 10:
	case 12:
		console.log('31天');
		break;
	case 4:
	case 6:
	case 9:
	case 11:
		console.log('30天');
		break;
	case 2:
		console.log('28天');
		break;
	default:
		console.log('输入的月份有问题');
}
</pre>

### 2.0 流程控制－循环语句
#### 2.0.1 for循环
<pre>
for (var i = 0; i < 10; i++) {
	console.log(i);
}
</pre>

#### 2.0.2 while循环
<pre>
var i = 0;
while (i < 10) {
	console.log(i);
	
	i++;
}
</pre>

#### 2.0.3 do...while循环
<pre>
var i = 0;
do {
	console.log(i);
	
	i++;
} while (i < 10);
</pre>

#### 2.0.4 for...in...循环
<pre>
var data = {username:'张三',age:20,sex:'男'};

for (var i in data) {
	console.log(i+'===>'+data[i]);
}
</pre>

#### 2.0.5 break和continue语句
<pre>
// break:终止循环
for (var i = 0; i < 10; i++) {
	if (i == 4) {
		break;
	}

	console.log(i);
}

// 最终的结果是：0 1 2 3
</pre>

<pre>
// 跳过当前循环继续执行下一次的循环
for (var i = 0; i < 10; i++) {
	if (i == 4) {
		continue;
	}

	console.log(i);
}
// 最终的结果是：0 1 2 3 5 6 7 8 9
</pre>

### 2.1 **正则表达式**
#### 2.1.1 元字符
- [0-9]:任意一个数字
- [a-z]:任意一个小写字母
- [x|y]:匹配x或者y（匹配其中的一个）
- [^0-9]:匹配一个任意非数字
- [\d]:任意一个数字
- [\s]:任意一个空白字符(\r\n\t)
- [\w]:约等于A-Za-z0-9_
- ^[a-z]{6,12}$:必须是6-12位的字母

#### 2.1.2 量词
- *	相当于{0,} 任意数量
- +	相当于{1,} 至少一个
- ?	相当于{0,1} 至多一个
- {6,18}

#### 2.1.3 模式修正符
- i:不区分大小写
- g:执行全局匹配
- m:执行多行匹配

### 2.2 JSON：只有属性的对象
#### 2.2.1 JSON功能
存储和传输数据的格式
#### 2.2.2 实例
<pre>
// JS对象
// 与普通对象区别：只有属性，键用引号
{"username":"zhangsan", "age":20, "sex":"男"}
</pre>
#### 2.2.3 JSON方法
- 将JSON字符串转化为JSON对象：JSON.parse()
- 将Javascript对象转换为JSON字符串:JSON.stringify()

### 2.3 **函数**
#### 2.3.1 函数定义
<pre>
// 1.普通函数
function demo(){
	console.log('第一种定义函数方式');
}

// 2.匿名函数
(function(){
	console.log('第二种定义函数方式');
})()

// 3.使用Function定义函数
new Function('x','y','return x+y;');
</pre>
#### 2.3.2 函数的特点
- 普通函数在同一个script标签之内，可以先调用后定义，但是跨script标签则不支持
- 定义函数而不调用等于没写
- 同名函数会覆盖，不会报错
- 变量的作用域
	- 在函数外申明的变量为全局变量，函数内可以直接调用
	- 在函数内使用var申明的变量为局部变量，只能在函数内调用
	- 在函数内直接定义变量为全局变量
- 参数个数
	- 形参 > 实参：多余的形参的值为undefined
	- 实参 > 形参：多余的实参被忽略
- argument函数内置对象 
	- 函数中内置的的所有参数组成的对象

#### 2.3.3 函数分类
<pre>
1.功能函数 执行一个功能，而不需要返回值
	function test(){
		alert('ok');
	}
	var t = test();
	alert(t);	// ???
2.返回值函数
	function demo(){
		return 'ok';
	}
	var d = demo();
	alert(d);	// ???
</pre>

### 2.4 内置对象
#### 2.4.1 Array对象
- arr.length：获取数组元素的长度
- arr.join(str)：将arr以指定字符连接成字符串
- arr.push():在数组末尾推入指定元素
- arr.pop()：弹出并返回数组末尾元素
- arr.shift()：弹出并返回数组第一个元素
- arr.unshift()：在数组开头处添加指定元素
- arr.sort([函数:排序规则])：排序（默认采用字符串顺序排序，数字排序则需要通过自定义函数实现）
- arr.reverse()：数组元素顺序反转
- arr.indexOf()：获取指定元素在数组中的位置，不存在返回-1
- arr.lastIndexOf()：获取指定元素最后一次出现的位置，不存在返回-1
- arr.slice(起始位置,结束位置):获取数组中指定的片段(不包含结束位置)
- arr.splice(起始位置,长度):从数组中添加或删除元素。
- arr.every():检测数值元素的每个元素是否都符合条件。
- arr.map():通过指定函数处理数组的每个元素，并返回处理后的数组。
- arr.filter():检测数值元素，并返回符合条件所有元素的数组。
- arr.some():检测数组元素中是否有元素符合指定条件。

#### 2.4.2 Boolean对象

#### 2.4.3 Date对象
- var d = new Date()：获取当前的日期对象
<pre>
	new Date()
	new Date(时间戳)
	new Date('2016/8/19 5:28:30'):注意这种格式的兼容性
	new Date(2016,7,19,5,28,19,178)
</pre>
- d.getFullYear()：年
- d.getMonth()：月（0-11）
- d.getDate()：日（1-31）
- d.getHours()：小时（0-23）
- d.getMinutes()：分钟（0-59）
- d.getSeconds()：秒数（0-59）
- d.getTime():时间戳

#### 2.4.4 Math对象
##### 属性
- PI:圆周率
##### 方法
- Math.abs()：绝对值
- Math.ceil()：进一取整
- Math.floor()：舍去取整
- Math.round()：四舍五入
- Math.max()：获取最大值
- Math.min()：获取最小值
- Math.random()：获取随机数
<pre>
function rand(m,n){
	return Math.floor(Math.random()*(n-m+1)+m);
}
</pre>

#### 2.4.5 Number对象
- MAX_VALUE:最大的数
- MIN_VALUE:最小的数
- num.toFixed(num):保留指定的小数位

#### 2.4.6 String对象
- str.length:字符串的长度
- str.split(str)：将字符串以指定字符切割

- str.search(str|reg)：在字符串中搜索指定字符，返回对应的位置，不存在返回-1
- str.match(str|reg):在字符串中匹配指定字符，存在返回数组，不存在返回null
- str.replace(str1|reg,str2)：用str2替换str1的值

- str.slice(start,end):获取字符串中指定的片段(不包含结束位置)
- str.indexOf(str)：获取字符串中指定字符的位置，不存在返回-1
- str.lastIndexOf(str)：获取字符串中指定字符最后出现的位置，不存在返回-1
- str.charAt(num):获取指定位置的字符

- str.charCodeAt(num):指定位置的字母对应的Unicode编码
- String.fromCharCode():将Unicode编码转为字符

#### 2.4.7 RegExp对象
- reg.test(str):使用正则表达式检验str是否符合要求

## 2.BOM（Window对象）
### 2.1 全局属性和函数
- 所有的全局变量是window对象的属性
- 所有的全局函数是window对象的方法
- 系统方法
	- alert()、confirm()、prompt()
	- moveBy()、moveTo()、resizeBy()、resizeTo()、scrollBy()、scrollTo()
	- open('1.html','','width=200,height="200'):打开一个新窗口
	- close():关闭窗口
	- setInterval()、setTimeout()、clearInterval()、clearTimeout()
	
### 2.2 Navigator对象（浏览器相关的信息）
- navigator.appCodeName		返回浏览器的代码名。
- navigator.appName	返回浏览器的名称。
- navigator.appVersion	返回浏览器的平台和版本信息。
- navigator.cookieEnabled	返回指明浏览器中是否启用 cookie 的布尔值。
- navigator.platform	返回运行浏览器的操作系统平台。
- navigator.userAgent	返回由客户机发送服务器的 user-agent 头部的值。
- navigator.userLanguage	返回 OS 的自然语言设置。

### 2.3 Screen对象（屏幕相关的信息）
- screen.width:浏览器的宽度
- screen.height：浏览器的高度
- screen.availHeight：浏览器可用高度
- screen.availWidth：浏览器可用宽度

### 2.4 Frames对象

### 2.5 **History对象（当前那浏览器的历史记录）**
- history.length:返回浏览器历史列表中URL数目
- history.go(0|-1|1):加载 history 列表中的某个具体的页面
- history.pushState(state,'',url) 与window.onpopstate()结合使用

### 2.6 **Location对象（当前浏览器的url地址信息）**
- location.hash:锚点|做历史记录管理
- location.href：获取设置当前的URL地址
- location.reload()：刷新

## 3.HTML DOM对象
### 3.1 DOM Document对象
#### 3.1.1 Form表单对象
	- document.forms[0]
	- document.forms['formName']
	- document.formName
	- 表单元素对象:formObj.inputName
#### 3.1.2 Select对象
	- 属性：
		- disabled
		- length
		- selectedIndex
	- 方法：
		add()
		remove()
#### 3.1.2 table表格对象
	- table.rows：获取表格行
	- talbe.insertRow(index)：添加行
	- table.deleteRow(index)：删除行
	- row.cells:获取单元格对象
	- row.insertCell(index)：添加单元格
#### 3.1.3 Cookie对象
	document.cookie = 'username=zhangsan;expires=date;path=/;domain=qq.com;secure'

### 3.2 **DOM 功能（通过功能确定DOM是做什么的）**
#### 3.2.1 获取并改变HTML标签
	- document.getElementById()
	- document.getElementsByTagName()
	- document.getElementsByName()
	- document.querySelector('css选择器#box .a div'):匹配复合条件的第一个元素
	- document.querySelectorAll()：匹配所有的复合条件的元素
	- ID名直接获取（用于测试，不推荐用于正式环境）
#### 3.2.2 获取并改变HTML属性
	- obj.src
	- obj.getAttribute()
	- obj.setAttribute()
	- obj.removeAttribute()
#### 3.2.3 获取并改变CSS样式
	- obj.style.width:只能获取行内的样式，获取不到style标签和link标签之内的样式
	- 获取最终的样式（兼容）
		function getStyle(obj, attr){
    		return obj.currentStyle ? obj.currentStyle[attr] : document.defaultView.getComputedStyle(obj, null)[attr];
		}
#### 3.2.4 **事件处理**
##### 3.2.4.1 鼠标事件
- onclick
- ondblclick
- oncontextmenu：右击
- onmouseover
- onmouseout
- onmousedown
- onmouseup
- onmousemove

##### 3.2.4.2 键盘事件
- onkeydown
- onkeyup
- onkeypress

##### 3.2.4.3 表单事件
- onfocus
- onblur
- onsubmit
- onchange
- onreset
- onselect

##### 3.2.4.4 框架对象事件
- onload
- onresize
- onerror
- onscroll

##### 3.2.4.5 鼠标键盘属性值
- altKey:
- shiftKey:
- ctrlKey:
- clientX
- clientY

##### 3.2.4.6 事件冒泡
- JS:var e = ent || window.event; e.cancelBubble = true
- jquery:e.stopPropagation()/return false;

<pre>
区别：
return false;代表终止函数，之后的代码将不执行
e.stopPropagation():阻止事件冒泡，之后的代码继续执行
</pre>

##### 3.2.4.7 千万要注意的事件默认行为
- 点击a链接默认跳转页面
- 点击提交按钮默认提交表单
- 点击鼠标右键出现右键菜单
<pre>
// 阻止a链接跳转（如果要用a链接做点击事件，务必将这里禁止）
&lt;a href="javascript:;"&gt;百度&lt;/a&gt;
&lt;a href="javascript:void(0);"&gt;百度&lt;/a&gt;
// 表单
formObj.onsubmit = function(){
	// 验证不通过，阻止表单提交
	return false;
}
document.oncontextmenu = function(){
	// 阻止浏览器右键菜单
	return false;
}
</pre>

### 3.3 **DOM 节点操作**
#### 3.2.1 标签元素的属性
- attributes:
- className:

- childNodes/children:
- firstChild/firstElementChild:
- lastChild/lastElementChild:
- nextSibling/nextElementSibling:
- previousSibling/previousElementSibling:
- parentNode:
- nodeName:
- nodeType:
- nodeValue:

- innerHTML:

- clientWidth:dom对象的可见宽度
- clientHeight:可见高度	
	document.documentElement.clientWidth:当前窗口宽度
	document.documentElement.clientHeight:当前窗口高度
- offsetHeight:
- offsetWidth
	divObj.offsetHeight:高度（包含height，padding，border）
	divObj.offsetWidth

	距离上一级元素的左边距和上边距（如果父级没有定位，则是相对于body）
- offsetLeft:
- offsetTop:
	
- scrollWidth:
- scrollHeight:
	document.documentElement.scrollWidth:获取当前页面的宽度
	document.documentElement.scrollHeight:获取当前页面的高度

	当前内容滚动的距离
- scrollTop:
- scrollLeft:
	document.body.scrollTop || document.documentElement.scrollTop;
	divObj.scrollTop/divObj.scrollLeft

#### 3.2.2 标签元素的方法
- appendChild()
- insertBefore()
- replaceChild()
- removeChild()
- cloneNode()
