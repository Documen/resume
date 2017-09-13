### web协议（HTTP）是一种无状态的协议
	一个web应用由很多个web页面组成，每个页面都有唯一的URL来定义。
	在浏览器的地址栏输入页面的URL浏览器就会向Web Sever去发送请求。
	如果发送两个请求，申请两个页面，每个页面的请求是分别使用了两个单独的HTTP链接。
##### 所谓的无状态：

###### 浏览器和web服务器会在第一个请求完成以后关闭链接通道，在第二个请求的时候重新建立链接。web服务器并不区分哪个请求来自哪个客户，对所有的请求都一视同仁，都是单独的链接。这样的方式大大区别于传统的（Client/Server）C/S结构,在那样的应用中，客户端和服务器端会建立一个长时间的专用的连接通道。正是因为有了无状态的特性，每个连接资源能够很快被其他客户端所重用，一台Web服务器才能够同时服务于成千上万的客户端。

# cookie：

  如上面所说，客户的每个请求都是单独的链接，当客户再次访问页面二的时候如何告web服务器用户刚才已经登录过了呢？浏览器和服务器之间有约定：通过使用cookie技术来维持应用的状态。cookie是可以被web服务器设置的字符串，并且可以保存在浏览器中。当访问页面一时，服务器设置了一个cookie并将这个cookie和页面一一起返回给浏览器，浏览器接到cookie后，就会保存起来，在访问页面二的时候会把这个cookie带上，web服务器接到请求时也能读出cookie值。根据cookie值的内容就可以判断和恢复一些用户的信息状态。

###Cookie与session的比较：

   Session是在服务器端保存用户信息，Cookie是在客户端保存用户信息。
 　　Session中保存的是对象，Cookie保存的是字符串。
 　　Session对象随会话结束而失效，Cookie可以长期保存在客户端。
 　　Cookie通常用于保存不重要的用户信息，重要的信息使用session保存。

###Cookie组成：

   cookie是由名称、内容、作用路径、作用域、协议、生存周期组成，另外还有个HttpOnly属性，HttpOnly属性很重要，如果您在cookie中设置了HttpOnly属性，那么通过js脚本(document.cookie)将无法读取到cookie信息，这样能一定程度上的防止XSS攻击，关于XSS可以看我之前的文章--XSS攻击及防御。Tomcat服务器设置的JSESSIONID就是HttpOnly的。
# JS中使用cookie函数：
	//设置cookie
	function setCookie(name,value,expires){
		var oDate=new Date();
		oDate.setDate(oDate.getDate()+expires);
		document.cookie=name+'='+value+';expires='+oDate.toGMTString();
	        //document.cookie=`${name}=${value};expires=${oDate.toGMTString()}`;
	}
	//获取cookie
	function getCookie(name){
		var arr=document.cookie.split('; ');
		for(let i=0;i<arr[i].length;i++){
			if(arr[i].split('=')[0]==name){
				return arr[i].split('=')[1];
			}	
		}
		return '';
	}
	//删除cookie
	function removeCookie(name){
		setCookie(name,1,-1);
	}