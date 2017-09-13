## stop AND is(":animated")
当执行动画时，用户可能连续点击，造成动画连续停不下来来的情况
##### 我们设置当动画在执行的时候不在执行就可以了
### stop()：
	$(selector).stop(stopAll,goToEnd)
	参数：
	stopAll:可选 默认false 停止当前动画，允许排入队列的动画向后执行
	goToEnd:可选 默认false 如果是true则立即完成当前动画
	因此stop() 默认清楚在被选元素上指定的当前动画

	$(selector).click(function(){
		$(selector).stop();
		//$(selector).stop().animate();
	})
### is(":animated")
#### :animated是jQ的选择器
判断元素是否处于动画状态，常用于连续点击上/下一张按钮，只响应用户第一次点击动作，或者这个动画完成后才在执行下一次
	if(!$(selector).is(":animated")){
		$(selector).animated();
	}

### 顺便回顾一下animate
##### 语法一：
	$(selector).animate(styles,speed,easing,callback)
	参数：
	styles:
		background
		border
		margin
		padding
		width
		height
		font
	css样式使用DOM名称（fontSize），而非（font-size）

	speed:
		可选，默认normal
			毫秒（如1500）
			"slow"
			"normal"
			"fast"	
	
	easing:
		可选，规定在不同动画点中动画的执行速度
		内置的easing函数：
			swing
			linear(线性)
	callback:
		可选，animated函数执行完之后，要执行的函数
##### 语法二：
	$(selector).animate(styles,options)
	参数：
		styles:
		options:
			可选，规定动画的额外选项
			可能的值：
				speed
				easing
				callback
				step
				queue
				specialEasing
				

		
	
	