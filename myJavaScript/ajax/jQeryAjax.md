前后端进行交流的数据格式：文本 JSON XML 
AJAX：
HTML：超文本标记语言（固定标签）
XML：可扩展标记语言（标签完全自定义）

文本：hello yes zhangfan

JSON:{"username":"zhangfan"}

ajax：原生ajax jQuery 框架的ajax ...(XMLHttpRequest)

jQuery的ajax
$.get(url,data,callback,dataType)
$.post(url,data,callback,dataType)
	url:请求的URL地址
	data：请求的数据
	callback:请求成功之后的回调函数
	dataType:返回的数据类型 html(普通文本，默认) json
$.ajax({
	url:请求的URL地址
	data:请求的数据
	type:请求的方式：get（默认），post
	success:请求成功时执行的回调函数	
	dataType:html,json.xml返回的数据类型
	async：同步异步
})

ajax的两种常用方式：
1.判断用户是否存在(增删改) 删除购物车数据 新浪微博发布说说
	后端返回一个判断性质的数据 y|n 1|0 
2.瀑布流，百度搜索，微博，
	后端返回一个json数据，我们需要在前端遍历数据

ajax排错办法：
1.打开调控栏，确认network中的URL地址是正确的
2.确认传递的参数正确
3.确认回复的值是正确的

demo(a[,b[,c]]):如果有c参数，一定有a，b
			如果有b参数，一定有a