//对象的扩展
//1、属性简洁表示法
var foo = 'bar';
//es5 {foo: "bar"}
var baz = {
	foo: foo
};
console.log(baz);
//es6 {foo: "bar"}
var baz = {
	foo
};
console.log(baz);
//方法也可以简写
//ES5
var o = {
		method: function() {
			return "hello";
		}
	}
	//Es6
var o = {
		method() {
			return "hello";
		}
	}
	//例子
var birth = '2017/8/17';
// var Person = {
// 	name: 'zhangsan',
// 	birth, //birth:birth
// 	//hello:function(){}
// 	hello(){
// 		console.log('我的名字是:'this.name);
// 	}
// }



var ms = {};

function getItem(key) {
	return key in ms ? ms[key] : null;
}

function setItem(key, value) {
	ms[key] = value;
}

function clear() {
	ms = {};
}

// module.exports = {
// 	getItem,
// 	setItem,
// 	clear
// };
// // 等同于
// module.exports = {
// 	getItem: getItem,
// 	setItem: setItem,
// 	clear: clear
// };


//属性的赋值器（setter）和取值器（getter），事实上也是采用这种写法。
var cart = {
  _wheels: 4,

  get wheels () {
    return this._wheels;
  },

  set wheels (value) {
    if (value < this._wheels) {
      throw new Error('数值太小了！');
    }
    this._wheels = value;
  }
}


//2、属性名表达式
//ES5
var obj = {
  foo: true,
  abc: 123
};
//Es6  可以用表达式作为属性名
var propKey;
var obj = {
  [propKey]: true,
  ['a' + 'bc']: 123
};
console.log(obj.abc)


//3方法的 name 属性
//4 Object.is()与===基本一致
console.log(Object.is('foo', 'foo'))//true
console.log(Object.is({}, {}))//false
//与===的不同
console.log(+0===-0);			//true
console.log(NaN===NaN);			//false
console.log(Object.is(+0,-0))	//false
console.log(Object.is(NaN,NaN))	//true
//ES5实现Object.is()
Object.defineProperty(Object, 'is', {
  value: function(x, y) {
    if (x === y) {
      // 针对+0 不等于 -0的情况
      return x !== 0 || 1 / x === 1 / y;
    }
    // 针对NaN的情况
    return x !== x && y !== y;
  },
  configurable: true,
  enumerable: false,
  writable: true
});