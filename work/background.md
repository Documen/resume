# 最近一周小问题:2017/7/30
# CSS
### 背景图片的小问题
	
	seleter{
		/*
			注意:
			*首先background的综合属性没有size而是background-size单独的属性.
			*不设定宽度的时候会随屏幕的大小而改变
			*不给容器高度图片是不显示的(可以用js设定)
			*想设置背景图片的大小给定宽高大屏小屏图片的显示就不会变了
		*/
		width: 1200px;
		margin: 0 auto;
		height: 450px;
		background:url("1.jpg") no-repeat center;
		background-size: cover;
		/*cover跟cantain有点小区别*/
			
	}
## 顺便说一下img插入图片的小问题
### 当我们不想让图片变形的时候
	/*设置好宽/高一方另一放自动即可*/
	img{
		max-width:;
		height:auto;
	}	
	
#javaScript
## js中遇见的小问题
#### 问题:
1. document.querySeletor('selector')获取不到元素(这时候可以console.log(111))
2. 获取到元素但是获取不到元素的高度
3. jQ获取的元素与js元素转换
#### 问题原因与解决方法:
	
	1. js写在HTML的head中忘记写window.onload=function(){}
		//脚本执行的时候页面dom结构还没好,但是console可以正常输出111
		//这个问题纠结了好久感觉自己好山炮
	
	2. //selector.style.heght这种方法只能获取元素行内的样式,想获取css样式表里的高度需用offsetHeight
	   //想获取元素集合中的高度最小的单一元素:
	function minHeght(){
		var Odiv= document.querySelectorAll('selector');
		var arr=[];
		for(let i=0;i<Odiv.length;i++){
			arr.push(Odiv[i].offsetHeight)
			//取出数组中最小的数字
			var minHeight=Math.min.apply(null,arr);
		}
		for(let j=0;j<Odiv.length;j++){
			if(minHeight==Odiv[j].offsetHeight){
				var index=j;
				return Odiv[j];
			}
		}		   	
	}

	3.jQ获取的元素与js元素转换
		html:
		<div class="selector"></div>
		script:
		(1)document.querySelector('.selector')  
  		 //<div class="selector"></div>

		(2)$(document.querySelector('.selector'))
		/*	[div.selector, context: div.selector]
				0:div.selector
				context:div.selector
				length	:1	
				__proto__:Object[0]
		*/

		(3)$('.selector')[0]
		//<div class="selector"></div>
		(4)$('.selector')   
	 	/*	[div.selector, prevObject: init[1], context: document, 	selector:".selector"]
				0:div.selector
				context:document
				length:1
				prevObject:init[1]
				selector:".selector"
				__proto__:Object[0]

		*/
		$('.selector')[0]==document.querySelector('.selector') //true
		$('.selector')[0]===document.querySelector('.selector') //true
		$(document.querySelector('.selector'))==$('.selector') //false
		$(document.querySelector('.selector'))==$('.selector') //false
#### 可见(1)与(3)是完全一样的东西,(2)和(4)却不同,但是(2)也可以$(document.querySelector('selector')).animate({"fontSize":"25px"})这样使用jQ中的方法(why???)

## 冒泡事件
#### 鼠标在内层容器的同时也在外层中,因为内层本身就是外层之中,所以click或mouseenter(mouseover)会触发外层事件.
	//我们要阻止她:	
	<!DOCTYPE html>
	<html>
		<head>
			<meta charset="{CHARSET}">
			<title>冒泡事件</title>
			
			<style type="text/css">
				.big{
					width: 300px;
					height: 300px;
					background: #ccc;
					overflow: hidden;/*解决大的div随小的div移动了下来*/ 
				}
				.small{
					width: 100px;
					height: 100px;
					margin: 0 auto;
					margin-top: 100px;/*大的div随小的div移动了下来*/
					background: #4466ff;
				}
			</style>
		</head>
		<body>
			<div class="big">
				点击背景颜色变蓝
				<div class="small">	
					点击背景颜色变红
				</div>
			</div>
		</body>
	</html>
	<script type="text/javascript">
		var big=document.querySelector('.big');
		var small=document.querySelector('.small');

		//此时点击small的时候big的背景颜色也会变蓝色
		big.onclick=function(){
			this.style.backgroundColor='cyan';
		}
		small.onclick=function(){
			this.style.backgroundColor='red';
		}

		//阻止冒泡事件
		small.onclick=function(ent){
			var e=ent||event;
			e.cancelBubble=true;
			this.style.backgroundColor='red';
		}
	</script>
##### jQ中阻止冒泡事件的方法:stopPropagation()/return false;
		//small的背景颜色可以变黄
		$('.small').click(function(e){
			e.stopPropagation();
			$(this).css('backgroundColor','yellow');
		})
		$('.small').click(function(e){
			$(this).css('backgroundColor','yellow');
			return false;
		})
		//return false 阻止代码继续运行big,small的背景颜色都不会发生改变
		$('.small').click(function(e){
			return false;
			$(this).css('backgroundColor','yellow');
			
		})

#### 顺便说一下mouseover/mouseout与mouseenter/mouseleave的小小区别:
##### mouseover 当鼠标进入本元素触发,进入本元素的子元素也会触发
##### mouseenter 子元素不会反复触发事件
	
		<html>  
		<head>
		<script src="jquery-1.8.3.min.js" type="text/javascript" charset="utf-8"></script>
		<script type="text/javascript">  
			x=0;  
			y=0;  
			$(document).ready(function(){  
				//鼠标滑过div.over一次x=3,因为进入div.over触发一次,进入h2触发一,从h2离开进入div.over又触发一次
			  $("div.over").mouseover(function(){  
			    $(".over span").text(x+=1);  
			  });  
				//鼠标滑过div.enter一次y=1.
			  $("div.enter").mouseenter(function(){  
			    $(".enter span").text(y+=1);  
			  });  
			});  
		</script>  
		</head>  
		<body>  
			<p>不论鼠标指针穿过被选元素或其子元素，都会触发 mouseover 事件。</p>  
			<p>只有在鼠标指针穿过被选元素时，才会触发 mouseenter 事件。</p>  
			<div class="over" style="background-color:lightgray;padding:20px;width:40%;float:left">  
				<h2 style="background-color:white;">被触发的 Mouseover 事件：<span></span></h2>  
			</div>  
			<div class="enter" style="background-color:lightgray;padding:20px;width:40%;float:right">  
				<h2 style="background-color:white;">被触发的 Mouseenter 事件：<span></span></h2>  
			</div>  
		</body>  
		</html>  



