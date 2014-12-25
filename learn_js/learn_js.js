//alert("adffd");
/*var a=12;
var b=3.14;
var f='hello';
var bbb = {name:'lisi',nimei:'fdf '};

console.log(bbb.name);
console.log(bbb['name']);

var arr =['a', 3, 'hello', true];
console.log(arr);
console.log(arr[3]);*/

/*console.log(2+6);
console.log('gfh'+' '+'gfgfgh');
//一旦遇到非法的（数字加字符串，后面一律拼接）
console.log(2+3+4+'hah'+5+94+4867486+48546);
*/

/*
//js的逻辑运算返回的是？
//返回的是最早能判定返回结果的那个值
var a = false;
var b = 6;
var c = true;
console.log(a||b||c);//打印6
console.log(a||c||b);//打印6
*/

//循环输出数组
/*
var arr = ['赵','钱','孙','里'];
for (var i = 0; i <arr.length; i++) {
	console.log(arr[i]);
}*/

/*
//循环输出对象
var obj = {name:'lisi', age:29, area:'bj'};
for (var k in obj) {
	console.log(k+'-'+obj[k]);
};*/

//对象操作
/*
var string = 'hello world';
console.log(string.length);
console.log(string.substr(2,3));

var arr = ['春' ,'夏', '秋','冬'];
console.log(arr.join(','));

var str = '东,南,西,北';
console.log(str.split(','));
*/
/*
//js内置对象
var str = 'hello world';
//indexOf返回的是子串的位置，找不到返回-1
console.log(str.indexOf('he')==-1?'not find':'find that');
var a = 'AAA';
var b = 'bbb';
console.log(a.toLowerCase());
console.log(b.toUpperCase());
*/
/*
//http://www.w3school.com.cn/jsref/jsref_obj_date.asp
var dt = new Date();
console.log(dt.getFullYear());
console.log(dt.getMonth());//返回0-11，所以要加1

//http://www.w3school.com.cn/jsref/jsref_obj_math.asp
var c = 12.3;
console.log(Math.ceil(c));//向上取整
console.log(Math.floor(c));//向下取整
console.log(Math.random());//返回[0,1)间的随机数
console.log(Math.random()*5+5);//返回[5,10)间的随机数
*/
/*
//window对象
//window.alert('haha');
//window.confirm("你确认要关闭吗");
console.log(window.navigator);
console.log(window.navigator.cookieEnabled);
console.log(window.location);
//window.location.href = 'http://www.baidu.com';
console.log(window.history);
console.log(window.screen);
console.log(window.screen.width);
console.log(window.screen.height);
console.log(window.screen.availWidth);//可用宽度
console.log(window.screen.availHeight);//可用高度
alert(window.document);
*/

/*
//var的重要性：没有var只是赋值，可能会污染全局变量
window.str = 'union';
function t1 () {
	//var str = 'china'; 
	function t2(){
	//var str = 'japan';
	str = 'japan';
	alert(str);
	}
	t2();
}

t1();
alert(window.str);
*/
//第一个特效
function change(){
	var div	= document.getElementById('test1');
	div.id = 'test2';
}
//开关灯泡
function toggle(){//我的想法
	var img = document.getElementById('Bulb')
	if(img.src == "http://www.w3school.com.cn/i/eg_bulbon.gif")
		img.src = "http://www.w3school.com.cn/i/eg_bulboff.gif";
	else
		img.src = "http://www.w3school.com.cn/i/eg_bulbon.gif";
}
function toggle1 () {//十八哥的
	var img = document.getElementById('Bulb')
	if(img.src.indexOf('on')>0)
		img.src = "http://www.w3school.com.cn/i/eg_bulboff.gif";
	else
		img.src = "http://www.w3school.com.cn/i/eg_bulbon.gif";
}
//找对象
//用id来查询，返回值是对象
//console.log(document.getElementById('ob'));
//用标签查询，返回值是“对象的集合”，即时只找到1个对象，也包装成对象集合返回
ps = document.getElementsByTagName('p');
ps[1].style.background ='green';
//对于表单元素，可以用name来查询，返回值是对象集合，即时只找到1个对象，也包装成对象集合返回
//console.log(document.getElementsByName('username'));
//alert(document.getElementsByName('username')[0].value);
document.getElementsByName('username')[0].value = 'lucy'
//按照类名查找，返回对象集合
document.getElementsByClassName('ob2')[0].style.background = 'gray';
//找子节点
//childnodes包含空白节点
//alert(document.getElementById('ob').childNodes);
//alert(document.getElementById('ob').childNodes.length);
//children为非标准属性，但兼容性很好，它不包含空白节点
//alert(document.getElementById('ob').children.length);
//找父节点
document.getElementsByTagName('p')[2].parentNode.style.border = '1px solid green';
/*点击div，使其背景色红绿交替
宽高增加5px
下边框增粗1px*/
function t_14(){
	var div = document.getElementsByTagName('div')[3];
	if (div.className.indexOf('test_14_1') >=0){
		div.className = 'test_14_2';
	}
	else{
		div.className = 'test_14_1';
	}
	//div.style.width:返回的是字符串,测试请看下一句
	//console.log(div.style.width);

	//alert(getStyle(div,'width'));
	div.style.width = parseInt(getStyle(div,'width'))+5+'px';
	div.style.height = parseInt(getStyle(div,'height'))+5+'px';
	div.style.borderBottomWidth = parseInt(getStyle(div,'borderBottomWidth'))+1+'px';

	return;
	div.style.width = parseInt(div.style.width)+5+'px';
	div.style.height = parseInt(div.style.height)+5+'px';
	div.style.borderBottomWidth = parseInt(div.style.borderBottomWidth)+1+'px';
}
//获取style下的属性
function getStyle (obj, attr) {
	return getComputedStyle(obj,null)[attr];
}
//删除节点
function del () {
	var lis = document.getElementsByTagName('li');
	var lastli = lis[lis.length-1];
	//console.log(lastli);
	lastli.parentNode.removeChild(lastli);
}
//增加节点
function add () {
	var li = document.createElement('li');
	var txt = document.createTextNode('这是增加的');
	li.appendChild(txt);
	document.getElementsByTagName('ul')[0].appendChild(li);
}

//暴力操作节点
//innerHTML既能读，也能写
function add1 () {
	var ul = document.getElementsByTagName('ul')[1];
	var html = "<li>春</li><li>夏</li><li>秋</li>";
	ul.innerHTML = html;
}
function add2 () {
	var ul = document.getElementsByTagName('ul')[1];
	//alert(ul.innerHTML);
	ul.innerHTML += '<li>冬</li>';
}
//联动菜单
var area=[['朝阳','海定','门头沟'],['淮南','淮北','合肥']];
function liandong () {	//我的，有点重复了
	var sel = document.getElementById('province');
	var sel2 = document.getElementById('city');
	if(sel.value == '北京'){
		sel2.innerHTML = '';
		for (var i =0, len = area[0].length ; i<len ; i++) {
			sel2.innerHTML += '<option value="'+i+'">'+area[0][i]+'</option>';
		}
		
	}else if(sel.value == '安徽'){
		sel2.innerHTML = '';
		for (var i =0, len = area[1].length ; i<len ; i++) {
			sel2.innerHTML += '<option value="'+i+'">'+area[1][i]+'</option>';
		}
	}else{
		sel2.innerHTML = '';
	}
}
function liandong1 () {	//十八哥的，够简洁啊
	var sel = document.getElementById('province1');
	var sel2 = document.getElementById('city1');
	if(sel.value == '-1'){
		sel2.innerHTML = '';
	}else{
		sel2.innerHTML = '';
		for (var i =0, len = area[sel.value].length ; i<len ; i++) {
			sel2.innerHTML += '<option value="'+i+'">'+area[sel.value][i]+'</option>';
		}
	}
}

//定时器
function bang () {
	document.getElementById("setTimeout").src = 'explosion.jpg';
}
var bomb = setTimeout('bang()',3000);
//优化定时器
function bang1 () {
	var input = document.getElementsByName('time')[0];
	var time = parseInt(input.value)-1;
	input.value = time;
	if(time == 0){
	document.getElementById("setTimeout1").src = 'explosion.jpg';
	clearInterval(bomb1);
	}
}
var bomb1 = setInterval('bang1()',1000);
//优化定时器
var bomb2 = 5;
function bang2 () {
	var input = document.getElementsByName('time2')[0];
	var time = parseInt(input.value)-1;
	input.value = time;
	if(time == 0){
	document.getElementById("setTimeout2").src = 'explosion.jpg';
	clearTimeout(bomb2);
	return;
	}
	setTimeout('bang2()',1000);
}
var bomb2 = setTimeout('bang2()',1000);
//常见事件
//1.事件在对象获得焦点时发生：onfocus  
function focus1() {
	document.getElementsByName('user')[0].style.border = '1px solid red';
}
//失去焦点：
function lose_focus () {
	document.getElementsByName('user')[0].style.border = '';
}
//鼠标经过
function over () {
	alert("你的鼠标经过了这里");
}
//提交事件
function check () {
	alert('请填写完整');
	return false;
}
//onload
function load () {
	document.getElementById('load_24').style.border = '1px solid red';
}
//或者这样
/*
window.onload = function(){

}
*/

//事件 行为 结构相分离
//分离前
function bian () {
	document.getElementById('event_25').style.border = '1px solid red';
}
//分离后
/*
document.getElementById('event_25_1').onclick = bian1;//注意这里不用加括号，假的话就是把返回值给onclick
function bian1 () {
	document.getElementById('event_25_1').style.border = '1px solid red';
}*/
//简化
/*
document.getElementById('event_25_1').onclick = function () {
	document.getElementById('event_25_1').style.border = '1px solid red';
}*/
//再简化
document.getElementById('event_25_1').onclick = function () {
	this.style.border = '1px solid red';
}
//事件对象
document.getElementById('mn').onmouseover = function(ev){
	console.log(ev);
	alert("住手！");
};
//抓不到的美女
document.getElementById('mn1').onmouseover = function(ev){
	//alert('hehe');
	this.style.paddingLeft = ev.pageX+10+'px';
	this.style.paddingTop = ev.screenY+10+'px';
};
//事件委托
/*	//这样效率还是太低，因为也是在每个td中加了onclick属性
var tds = document.getElementsByTagName('td');
var i =0;
while(i < tds.length){
	tds[i].onclick = function(){
		this.style.background = 'black';
	};
	i++;
}*/
//优化
/*
document.getElementsByTagName('table')[0].onclick = function(ev){
	ev.target.style.background = 'black';
};*/

//点一次改一种颜色
/*
var nu = 0;
document.getElementsByTagName('table')[0].onclick = function(ev){
	if(nu%2 == 0){
		ev.target.style.background = 'black';
		nu++;
	}else{
		ev.target.style.background = 'green';
		nu++;
	}
};*/
//对上面优化
var nu = 0;
document.getElementsByTagName('table')[0].onclick = function(ev){
		ev.target.style.background = nu++%2?'green':'black';
};
//正则验证邮箱
document.getElementsByTagName('form')[1].onsubmit = function(){
	var patt = /^[a-zA-Z0-9]{6,11}$/;
	if(!patt.test(document.getElementsByName('userid')[0].value)){
		alert('用户名只能是字母及数字6-11位');
		return false;
	}
	else{
	console.log('用户名可以');
	}
	var patt_email =/^\w+@\w+(\.\w+)+$/;
	if(!patt_email.test(document.getElementsByName('email2')[0].value)){
		alert('email填写不正确');
		return false;
	}else{
	console.log('email可以');
	}
	return ;
};
//正则匹配邮箱
function find_email () {
	var lis = document.getElementsByTagName('li');
	var i = 4;
	var patt_email =/\w+@\w+(\.\w+)+/;
	while(i < lis.length){
		if(patt_email.exec(lis[i].innerHTML) !== null){
			lis[i].style.background = 'yellow';
		}
		i++;
	}
}