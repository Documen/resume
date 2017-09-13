## 清楚浮动
有时候各种浮动，此时便需要及时的清除浮动，否则将会导致布局出现问题，但是有时方法用混乱了就搞懵逼了。
### 问题：
代码：

	<!DOCTYPE html>
	<html lang="en">
	<head>
    <meta charset="UTF-8">
    <title></title>
    <style>
        .outer{
            border: 1px solid black;
            width:300px;
        }
        .inner{
            width: 50px;
            height: 50px;
            background-color:#EFEFEF;
            margin-right: 20px;
            float: left;
        }
        .footer{
            background-color: #DEDEDE;
            width: 200px;
            height: 100px;
        }
    </style>
	</head>
	<body>
	    <div class="outer">
	        <div class="inner"></div>
	        <div class="inner"></div>
	        <div class="inner"></div>
	    </div>
	    <div class="footer"></div>
	</body>
	</html>
	
页面效果：

	1、inner元素浮起，并在紫色footer上重叠
	2、outer没有包裹住inner如果父元素outer也浮动的话可以包裹住，但效果1依然不能解决
	（怎么能插个图呢？？？）
#### 最简单方法：给父元素outer定高
	<style>
		.outer{
	            border: 1px solid black;
	            width:300px;
	            height:30px;
	        }
	</style>
	//但你知道的很多时候我们不想定高
	
#### 方法一：额外标签法

	<style>
		.clear{
			clear:both;
		}
	</style>
	<div class="outer">
	        <div class="inner"></div>
	        <div class="inner"></div>
	        <div class="inner"></div>
			<div class="clear"></div>
	</div>
	<div class="footer"></div>
	
	//大错特错：第三个inner不浮动，但他们依然浮动在footer上与之重叠
	<style>
		.clear{
			clear:both;
		}
	</style>
	<div class="outer">
	        <div class="inner"></div>
	        <div class="inner"></div>
	        <div class="inner clear"></div>
	</div>
	<div class="footer"></div>


### 方法二：利用overflow：hidden属性
	<style>
		.outer{
	            border: 1px solid black;
	            width:300px;
	            overflow: hidden;
		      }
		//不太理解据说跟什么BFC有关
	</style>
#### 方法三：使用 :after 为元素（在其浮动元素的父元素上添加class）

	<style>
		.clear：：after{
			content:"";
			width:100%;
			height:0;
			display:block;
			clear:both;
			visibility: hidden;
		}
	</style>
	<div class="outer clear">
	        <div class="inner"></div>
	        <div class="inner"></div>
	        <div class="inner"></div>
	</div>
	<div class="footer"></div>
	//这个很好理解就是在outer后加一个不浮动的div与方法一同理，只不是是方式不同而已。
