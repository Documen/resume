# HTML5新特性

## 1.标签新属性
- **dataset(IE11，火狐谷歌)**
- **classList(火狐谷歌最新，IE10以上)**
    - obj.classList.length获取class类的个数
    - obj.classList.add():添加class类
    - obj.classList.remove():移出class类
    - obj.classList.contains():判断是否包含指定class类
    - obj.classList.toggle():切换class类

## 2.音频(audio)和视频(video)
### 2.1 标签属性
- 音视频：autoplay、controls、loop、muted、preload、src
- 视频：width、height、poster

### 2.2 方法
- load():重新加载音频／视频元素
- play()：开始播放音频／视频
- pause()：暂停当前播放的音频／视频

### 2.3 事件属性
#### 2.3.1 只读属性
- duration：返回当前的总时长
- currentSrc：返回当前URL
- ended：返回是否已结束
- paused：返回是否已暂停

#### 2.3.2 获取并可修改的属性
- autoplay：设置或返回是否自动播放
- controls：设置或返回是否显示控件（比如播放/暂停等）
- loop：设置或返回是否是循环播放
- muted：设置或返回是否静音
- currentTime：设置或返回当前播放位置（以秒计）
- volume：设置或返回音量
- playbackRate：设置或返回播放速度

### 2.4 事件
- durationchange:当音频/视频的时长已更改时
- ended:当目前的播放列表已结束时
- pause:当音频/视频已暂停时
- play:当音频/视频已开始或不再暂停时
- ratechange:当音频/视频的播放速度已更改时
- timeupdate:当目前的播放位置已更改时
- volumechange:当音量已更改时

## 3.拖放 drag
<pre>
问题：
    1.将一个div拖动到另外一个div上的时候，相对复杂
    2.拖动电脑的文件

1.执行拖放事件，必须添加draggable="true"

2.拖放事件
    拖对象
        ondragstart:当拖动开始的时候
        ondrag:当拖动的时候
        ondragend：当拖动结束的时候
    放对象
        ondragenter:当拖对象进入放对象的时候
        ondragleave:当拖对象离开放对象的时候
        ondragover:当拖对象在放对象上移动的时候
        ondrop:当放下拖对象的时候
3.设置拖放时的数据
    ent.dataTransfer:拖放传输数据对象

    // 此处的key和value必须是字符串类型的参数
    ent.dataTransfer.setData(key, value)

    ent.dataTransfer.getData(key)

    // IE不支持(鼠标在图片的相对位置)
    e.dataTransfer.setDragImage(imgObj,起始点横坐标,起始点纵坐标)
</pre>

## 4.文件读取
<pre>
// 1.实例化文件读取对象
var reader = new FileReader();

// 2.读取文件数据
reader.readAsDataURL(fileObj);

// 3.文件读取完成
reader.onload = function(){
    // this.result:获取读取之后的结果
}

// 4.文件读取进程事件
reader.onprogress = function(ent){
    // 当前进度:ent.loaded
    // 总长度:ent.total
}
</pre>

## 5.web worker:将任务分派出去，让其他页面来做
<pre>
主文件
// 1.实例化worker对象
var worker = new Worker(js文件);
// 2.给JS文件发送任务
worker.postMessage(value);
// 3.等待接收js文件传回的数据
worker.onmessage = function(e){
    console.log(e.data)
}

worker：
self.onmessage = function(e){
    // 获取前台传递的数据
    e.data

    // 回复主文件内容
    self.postMessage(value);
}
</pre>

## 6.地理位置
<pre>
navigator.geolocation.getCurrentPosition(function(position) {
    oT.value += '经度:' + position.coords.longitude + '\n';
    oT.value += '纬度 :' + position.coords.latitude + '\n';
    oT.value += '准确度 :' + position.coords.accuracy + '\n';
    oT.value += '海拔 :' + position.coords.altitude + '\n';
    oT.value += '海拔准确度 :' + position.coords.altitudeAcuracy + '\n';
    oT.value += '行进方向 :' + position.coords.heading + '\n';
    oT.value += '地面速度 :' + position.coords.speed + '\n';
    oT.value += '时间戳:' + new Date(position.timestamp) + '\n';
}, function(error) {
    console.log(error);
});

密钥：xMGjuMCt7uq9S9OpR6ggggMsCbLPLDyV
百度地图API（http://lbsyun.baidu.com/index.php?title=jspopular）
</pre>

### 7.本地存储 Web Storage
### 7.0 cookie：饼干甜点（一般保存用户名，进行用户识别的ID号）
#### 缺点
1. cookie是不可靠的，如果被删除，则不存在
2. cookie值不安全
3. 浪费网络资源
4. cookie的大小被限制为4KB

#### 优点
1.多个页面可以共享数据
2.给数据设置有效期，做自动登录
3.通过cookie帮助进行用户信息识别

#### 7.1 使用cookie存储数据的缺点

本地存储大小限制：5M

#### 7.2 在客户端本地保存数据的功能
- **sessionStorage** : 将数据保存在session对象中（当前浏览器的临时数据）
    > session:指用户在浏览某个网站时，从进入网站到浏览器关闭所经过的这段时间内保存的数据对象
<pre>
// 设置数据
sessionStorage.setItem(key,value)
// 获取数据
sessionStorage.getItem(key)
// 移除指定数据
sessionStorage.removeItem(key)
// 清空所有数据
sessionStorage.clear();
</pre>
- **localStorage**：保存用户名，购物车数据，其他需要被长久保存的数据
    > 将数据保存在客户端本地的硬件设备(一般就是硬盘)，即使浏览器被关闭了，该数据仍然存在，下次da kai打开浏览器访问网站仍然存在
<pre>
// 设置数据
localStorage.setItem(key,value)
// 获取数据
localStorage.getItem(key)
// 移除指定数据
localStorage.removeItem(key)
// 清空所有数据
localStorage.clear();
</pre>
#### storage事件:跨页面

### 8.\离线应用
> Web应用程序致命的缺点 : **不联网，不能访问web程序**
#### 本地缓存和浏览器网页缓存的区别
- 本地缓存是为整个web应用程序服务的，浏览器的网页只服务于单个网页
- 任何网页都有网页缓存，本地缓存只缓存指定缓存的网页
- 网页缓存不安全，不可靠，本地缓存因为可以指定所以安全可靠
#### 离线应用步骤
<pre>
1.HTML标签(文件名自定义，下列提到的文件名保持一致)
<html manifest="cache.manifest"></html>

2.在同级目录下新建cache.manifest文件:通知浏览器进行页面缓存
manifest文件格式:
CACHE MANIFEST
# 注释
# version 8

# 缓存文件
CACHE:

# 联网的文件
NETWORK:

# 备选文件
FALLBACK:
# 联网访问的资源 不联网访问的资源
1.jpg   2.jpg
</pre>

#### 离线检测
<pre>
检测用户是否联网：navigator.onLine/offLine
用户联网信息发生改变触发的事件：online/offline事件
</pre>

### 9.全屏和取消全屏
<pre>
// 全屏
// ele:全屏的对象
function requestFullscreen(ele) {
    // 全屏兼容代码
    if (ele.requestFullscreen) {
        ele.requestFullscreen();
    } else if (ele.webkitRequestFullscreen) {
        ele.webkitRequestFullscreen();
    } else if (ele.mozRequestFullScreen) {
        ele.mozRequestFullScreen();
    } else if (ele.msRequestFullscreen) {
        ele.msRequestFullscreen();
    }
}

// 取消全屏
function exitFullscreen() {
    if (document.exitFullscreen) {
        document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
        document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
        document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
    }
}

## 1.3 全屏后对全屏元素的控制
selector{
    position : fixed;
    top      : 0;
    left     : 0;
    width    : 100%;
    height   : 100%;
    overflow : auto;
}

## 1.4 判断是否全屏
function fullscreen() {
    return document.fullscreen ||
           document.webkitIsFullScreen ||
           document.mozFullScreen ||
           false;
}

onfullscreenchange
onwebiktfullscreenchange
onmozfullscreenchange
</pre>

### 10.帧动画 requestAnimationFrame()
<pre>
帧数:动画或视频每秒放映的画面数

电影的原理：高速播放具有连续性的图片(人眼视网膜具有残像效应，因此切换画面时，人脑内仍然会存在上一幅图片的视觉)

帧动画:目前页面中的动画效果都是由setInterval()和setTimeout()来实现的
缺点
    1.传递的是ms,但是精确到达不到ms级别（JS的单线程，可能有线程阻塞）
    2.没有对调用动画的循环机制进行优化

// 兼容IE9-，火狐谷歌(加载顺序)
window.requestAFrame = window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.msRequestAnimationFrame ||
    function(callback) {
        return window.setTimeout(callback, 1000 / 60);
    }

// 取消动画效果
window.cancelAFrame = window.cancelAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    window.msCancelAnimationFrame ||
    clearTimeout;
</pre>

### 11.iframe、新窗口与原窗口通信
<pre>
// 需要localhost访问数据
当前窗口获取iframe窗口document对象：iframeObj.contentWindow.document
iframe获取父窗口document对象：parent.document
    全局变量，全局函数，document都属于window对象的属性和方法
    window.parseInt()
    window.setInterval()
    window.open()

当前窗口获取打开新窗口document对象：window.open().document
新窗口获取当前窗口的document对象：window.opener.document
</pre>

服务器：用localhost访问（服务器访问形式）
    iframe/parent
    打开新窗口
    本地存储 onstorage
    cookie使用
    ajax

服务器：电脑
    wamp,phpstudy将本地的电脑模拟成一台服务器

    通过服务器访问相关文件：
        1.必须将文件放在www目录下
        2.目录名采用英文和数字
        3.服务器（Apache）默认打开index.html页面

### 12.URL地址记录管理
<pre>
问题：当前页面的内容发生改变之后，不能被保存下来，一旦我想查看被改变之前的内容，发现找不到

原理:通过为URL地址栏中的hash赋值，当hash发生变化的时候，重新获取值
目的:记录当前页面的部分动态数据，防止数据丢失
代码实现:
// 给hash赋值
location.hash = value;

// 当点击前进后退的时候，hash值发生改变，onhashchange就可以监测到hash的改变，进行对应的处理
window.onhashchange = function(){}
</pre>

### 13.历史记录管理
<pre>
history.pushState(state, title, url)
    state: 对象|字符串
    title:目前无意义，传递空字符串或者一个描述性的标题即可
    url：新的URL地址(一般使用?开头)

history.replaceState(state,title,url)

// 当页面的state发生改变的时候触发的事件
window.onpopstate = function(e){
    e:PopStateEvent 事件对象
    e.state:获取对应的值（即上面的value值）
}

history.state和location.hash对比
1.history可以对URL修改，而location仅是添加hash值(#)
2.onhashchange是一直触发，onpopstate是回退的时候触发
</pre>
### 12.SSE
### 13.WebSocket
### 14.Canvas
