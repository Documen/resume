// Unicode   干啥的额？没用过啊！一大推看不懂！！！
//repeat()

/*let x = 'string';
x = x.repeat(2);
console.log(x);

//padStart(),padEnd()
x = x.padStart(25, 'abc');
console.log(x);
x = x.padEnd(35, '123');
console.log(x);*/
// 用途
console.log('12'.padStart(10, '2017-MM-DD')) // "YYYY-MM-12"
console.log('09-12'.padStart(10, 'YYYY-MM-DD')) // "YYYY-09-12"


//模板字符串，，我最喜欢了，，
/*console.log(`string text line1 
	string text line 2`);

let name = "lizhongzheng";
let age = "18";
console.log(`my name is ${name} , my age is ${age}`);
var greeting = `\`Yo\` World!`;
var greeting2 = '\'hello\' world'
var say = 'hello `world`';
var say2 = `hello 'world'`;
console.log(greeting);
console.log(greeting2);
console.log(say);
console.log(say2);*/

// 模板字符串的嵌套 *** 值得研究  ***箭头函数
const tmpl = addrs => `
  <table>
  ${addrs.map(addr => `
    <tr><td>${addr.first}</td></tr>
    <tr><td>${addr.last}</td></tr>
  `).join('')}
  </table>
`;
const data = [
    { first: '<Jane>', last: 'Bond' },
    { first: 'Lars', last: '<Croft>' },
];
//console.log(tmpl(data));


//使用字符串模板本身
let str3 = 'return ' + '`Hello ${name}!`';
let func = new Function('name', str3);
func('Jack') // "Hello Jack!"
console.log(func('Jack'));
// 写法二
let str4 = '(name) => `Hello ${name}!`';
let func2 = eval.call(null, str4);
console.log(func2('Jack'))
func2('Jack') // "Hello Jack!"


//String.raw() 懵逼的不行
String.raw`Hi\n${2+3}!`;