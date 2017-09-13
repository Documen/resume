window.onload = function() {
	var str;
	var input = document.querySelector('input');
	var btn = document.querySelector('button');
	btn.onclick = function() {
		var val = input.value;
		var color = function(colorStr) {
			/*
				#FFAAFF->rgb(255,0,255)
				reg验证
				#FAF->rgb(255,0,255)
			*/
			var reg = /^#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})$/;
			if (reg.test(colorStr)) {
				var colorArr = colorStr.split('#');
				//console.log(colorArr);							["", "FFAAFF"]
				const len = colorArr.length;
				const str_len = colorArr[len - 1].length;
				//console.log(str_len);								6||3
				//console.log(typeof(colorArr[len - 1]));			string
				if (str_len == 6) {
					var r = colorArr[len - 1].substring(0, 2); //ff
					var g = colorArr[len - 1].substring(2, 4);
					var b = colorArr[len - 1].substring(4, 6);
				} else {
					var r = colorArr[len - 1].substring(0, 1) + colorArr[len - 1].substring(0, 1); //f
					var g = colorArr[len - 1].substring(1, 2) + colorArr[len - 1].substring(1, 2);
					var b = colorArr[len - 1].substring(2, 3) + colorArr[len - 1].substring(2, 3);
				}
				r = parseInt(r, 16);
				g = parseInt(g, 16);
				b = parseInt(b, 16);

				//console.log(r); //255
				str = `rgb(${r}, ${g},${b})`;
				//rgb(255,170,255)
				return str;
			} else {
				alert('请输入正确颜色格式');
			}

		}
		color(val);
		if (str) {
			input.value = str;
		}

	}
}