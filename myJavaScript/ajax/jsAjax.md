JS:
	ECMAScript基础语法：变量 数据类型 运算符 流程控制 函数 对象 数组
	BOM：浏览器对象模型 Browser->window对象
		window对象 = 属性 + 方法
			全局变量和全局函数
	DOM：文档对象模型 Document Object Model

AJAX:async javascript and xml:异步JavaScript和xml
	
	概念：页面无刷新，可以动态改变内容

	优点：提升用户体验
	缺点：使用过多增大服务器压力

	动态加载页面数据（新浪微博）：第一次访问页面，输入'hello world',点击提交，通过JS创建XMLHttpRequest请求对象（帮助我们干活的民工），XHR带着'hello world'将数据通过互联网发送到服务器，服务器经过一些列的处理将数据存储下来，然后告诉XHR存储成功，那么XHR带着成功的消息回到当前页面，告诉用户说，发布成功

	var xhr = new XMLHttpRequest();
	xhr.open('GET','1.php?username=zhangsan',false);
	xhr.send();
	xhr.onreadystatechange = function(){
		if (xhr.readyState == 4 && xhr.status == 200) {
			
		}
	}

	var xhr = new XMLHttpRequest();
	xhr.open('POST','1.php',false);
	xhr.setRequestHeader('Content-type':"x-www-form-en...");
	xhr.send('username=zhangsan');

	// get请求
	$.get(url,data,callback,dataType)
		url:请求的URL地址
		data：请求的数据
		callback:请求成功之后的回调函数
		dataType:返回的数据类型 html(普通文本，默认) json
	// post请求
	$.post(url,data,callback,dataType)
