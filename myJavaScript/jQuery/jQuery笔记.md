# 选择器
```
基本选择器：#id .class element
层级选择期：A B(后代选择器),A>B(父子选择器),A+B(相邻选择器),A~B(兄弟选择器)
基本筛选器：:first :last :even :odd :eq() :gt() :lt() 
	:animated：匹配当前正在执行动画效果的对象
内容选择器：:contains(text) :empty :has(selector) :parent
属性：[attr] [attr=value]
子元素：:first-child :last-child :nth-child(n) :nth-last-child(n) only-child
    :first-of-type :last-of-type :nth-of-type(n) :nth-last-of-type(n) :only-of-type()

表单对象属性：:checked :selected
```

# 核心
```
each()
length
get()
index()

jquery对象和DOM对象区别
```

# 事件
```
$(function(){})/window.onload
on()/off()
hover()/toggle()

http://www.w3school.com.cn/tiy/t.asp?f=jquery_event_mouseenter_mouseover
mouseover与mouseenter

遇到鼠标移入和移出的闪烁问题，hover或者enter/leave事件解决

不论鼠标指针穿过被选元素或其子元素，都会触发 mouseover 事件。
只有在鼠标指针穿过被选元素时，才会触发 mouseenter 事件。

mouseout与mouseleave
不论鼠标指针离开被选元素还是任何子元素，都会触发 mouseout 事件。
只有在鼠标指针离开被选元素时，才会触发 mouseleave 事件。
```

# 事件对象
```
e.pageX/e.pageY
e.stopPropagation():阻止冒泡
e.preventDefault():阻止默认行为

return false:阻止冒泡和默认行为
```

# ajax
```
$.get()
$.post()
$.ajax()
serialize()
```

# 文档处理
```
内部追加
子级后追加：append()/appendTo()
子级前追加：prepend()/prependTo()

同辈追加
同辈后追加：after()/before()
同辈前追加：insertAfter()/insertBefore()

wrap()/unwrap()/wrapAll()/wrapInner()
replaceWith()/replaceAll()

empty():清空所有的孩子
remove():删除自身

clone(true)：复制
```

# 工具
```
$.inArray()
$.trim()
```

# 属性
```
attr()/removeAttr()：系统和自定义属性
prop()/removeProp()：系统属性
addClass()/removeClass()/toggleClass()
html('<h3></h3>')/text('<h3></h3>')/val()
```

# CSS
```
css() css('background','red') css('background') css({background:red})
offset():距离页面的边距
position({left:100,top:100}):获取|设置 距离父级的边距
scrollTop(number)/scrollLeft():获取|设置 滚动距离
height()/width():真实宽高
innerWidth()/innerHeight()：包含padding的宽高
outerHeight/outerWidth()：包含边框，padding的宽高
```

# 效果
```
隐藏和显示;show()/hide()/toggle()
下拉和上拉：slideDown()/slideUp()/slideToggle()
淡入淡入：fadeIn()/fadeOut()/fadeTo()/fadeToggle()
自定义动画效果：animate()/stop()/delay(2000)
```

# 筛选
```
eq()/first()/last()/hasClass(class)
children()/find()/next()/prev()/siblings()/parent()
	chilren('.shadow'):只查找子级
	find('.shadow'):在后代中查找
```

# 解决冲突：
```
第一种方式：直接使用jQuery替代$
JQuery.noConflict();
JQuery('#msg').hide()

第二种方式：改$
var $j = JQuery.noConflict(); 
$j('#msg').hide(); // 此处$j就代表JQuery 
```

# 自定义jQuery插件
```
$.fn.message = function() {
    this.username = 'zhangsan';
    this.show = function(msg) {
        this.html(msg);
    }
    return this;
}

自定义插件使用
var obj = $('.box').message();
obj.show('Hello world');
console.log(obj.username);
```