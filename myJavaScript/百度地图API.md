# 1.百度地图API使用
	注册网址：http://developer.baidu.com/

# 2.百度地图API开发文档：(http://lbsyun.baidu.com/index.php?title=jspopular/guide/introduction)
	2.1 点击获取密钥
	2.2 创建应用
		应用名称：自定义
		类型：浏览器端
		白名单：*为所有，项目上线请使用自己网站域名

# 3.地图API调用
	<!-- 存放地图容器 -->
	<div id="container"></div>
	<!-- JS代码 -->
	<script src="http://api.map.baidu.com/api?v=2.0&ak=xMGjuMCt7uq9S9OpR6ggggMsCbLPLDyV"></script>
	<script type="text/javascript"> 
	// 1.根据容器定义地图实例
	var map = new BMap.Map("container");
	// 2.创建地图点坐标
	var point = new BMap.Point(116.404, 39.915);
	// 3.初始化地图，设置中心点坐标和地图级别
	map.centerAndZoom(point, 15);
	</script>

# 4.地图控件
- NavigationControl：地图平移缩放控件，PC端默认位于地图左上方，它包含控制地图的平移和缩放的功能。移动端提供缩放控件，默认位于地图右下方。
- OverviewMapControl：缩略地图控件，默认位于地图右下方，是一个可折叠的缩略地图。
- ScaleControl：比例尺控件，默认位于地图左下方，显示地图的比例关系。
- MapTypeControl：地图类型控件，默认位于地图右上方。
- CopyrightControl：版权控件，默认位于地图左下方。
- GeolocationControl：定位控件，针对移动端开发，默认位于地图左下方。
- CityListControl:城市列表控件
使用方法
控件位置
var opts = {anchor: BMAP_ANCHOR_TOP_LEFT } 左上角
var opts = {offset: new BMap.Size(150, 5)}

设置控件显示
map.addControl(new BMap.NavigationControl())

# 5.覆盖物
// 5.1 默认覆盖物
var marker = new BMap.Marker(point);        // 创建标注    
map.addOverlay(marker);                     // 将标注添加到地图中

// 5.2 自定义覆盖物
var myIcon = new BMap.Icon("markers.png", new BMap.Size(x, y),{
    // 设置图片偏移
    imageOffset: new BMap.Size(x, y) // 设置图片偏移
});
// 创建标注对象并添加到地图
var marker = new BMap.Marker(point, {icon: myIcon});
map.addOverlay(marker)

# 6.事件
map.addEventListener("click", function(e){    
	alert(e.point.lng + ", " + e.point.lat);    
});

