var myObject = {
	value : 0,
	increment : function (inc){
	    console.log(this);//myObject
		this.value += typeof inc === 'number' ? inc : 1;
		return inc;
	}
};

//方法调用模式
myObject.increment('a');
console.log(myObject.value);

myObject.increment(2);
console.log(myObject.value);



var add = function (a, b) {
	console.log(this);//DOMWindow
	return a + b;
}
//函数调用
var sum = add(3, 4);


myObject.double = function () {
	var that = this;
	console.log(that);//myObject
	
	var helper = function () {
		console.log(this);//DOMWindow 在这里this的指向改变了
		that.value = add(that.value, that.value);
	};
	
	helper();
};

//方法调用
myObject.double();
console.log(myObject.value);



var Quo = function (string) {
	this.status = string;
}

Quo.prototype.get_status = function () {
	console.log(this);//Quo
	return this.status;
}
//构造器调用
var myQuo = new Quo("confused");
var t = myQuo.get_status();
console.log(t);

var myQuo2 = Quo("confused");
console.log(myQuo2);//undefined




var add = function (a, b) {
	console.log(this);//DOMWindow
	return a + b;
}
var array = [3, 4];
//apply调用
var sum = add.apply(null, array);
/**
 * apply 的第一个参数：将要被绑定给this的值
 * 第二个参数： 一个参数数组
 */








var Quo = function (string) {
	this.status = string;
}

Quo.prototype.get_status = function () {
	console.log(this);//Quo
	return this.status;
}
var statusObject = {
	status : "A-OK"
};
var status = Quo.prototype.get_status.apply(statusObject);
console.log(status);//A-OK



/**
 * 
 * javascript 的四种调用模式： 
 * 【方法调用模式】 当函数被保存为一个对象的属性时，我们称之为 方法。 这种模式下：this被绑定到该对象。
 * 
 * 
 * 【函数调用模式】 当函数并不是一个对象的属性时，它被作为一个函数来调用。 这时，this 被绑定到全局对象。
 * 
 * 
 * 【构造器调用模式】  【apply调用模式】
 * 
 * 
 * 
 * 函数被调用的时候都会有一个arguments的“数组”
 * arguments 是一个array-like的对象，readonly
 * 
 * 
 * 【tip】
 * 一个函数总是会返回一个值。
 * 如果没有指定值，则返回一个 undefined
 * 
 * 如果函数以new的方式被调用，并且返回值不是一个对象的时候， 则返回this（该新对象）。
 * 
 * 
 * 
 * 
 * try catch
 * 
 * exception 对象原生拥有name, message 属性。当然，也可以自己添加其他属性。
 * 
 * 
 * 
 * javascript中，
 * 我们可以通过给Object.prototype添加方法来使得该方法对【所有对象】可用。
 * 
 * 可以通过给Function.prototype增加方法来使得该方法对【所有函数】可用。例子如下
 * 
 */

Number.method('integer', function () {
	return Math[this < 0 ? 'ceil' : 'floor'](this);
});

console.log((-10/3).integer());





/**
 * 
 * 有条件地增加一个方法
 * 这种做法比较保险，避免了不必要的冲突。
 */
Function.prototype.method = function (name, func) {
	if (!this.prototype[name]) {
		this.prototype[name] = func;
	}
};


var a = 3; 
function test(){
	console.log(a);//undefined
	var a=4;
	console.log(a);
}
test();


/**
 * 闭包
 */
var myObject = function() {
	var value = 0;
	
	return {
		increment: function (inc) {
			value += typeof inc === "number" ? inc : 1;
		},
		getValue: function () {
			return value;
		}
	}
}();//important



var quo = function (status) {
	return {
		get_status: function () {
			return status;
	}
	};
}

var myQuo = quo("amazed");
var t = myQuo.get_status();
console.log(t);







/*====================================================*/
//more sample
//sample 1
var add_the_handlers = function (nodes) {
	var i;
	for (i = 0; i < nodes.length; i += 1) {
		nodes[i].onclick = function (e) {
			alert(i);
		}
	}
};
/*-------------------------------------------------*/
//sample 2
var add_the_handlers = function (nodes) {
	var i;
	for (i = 0; i < nodes.length; i++) {
		nodes[i].onclick = function (i) {
			return function (e) {
				alert(e);
			}(i);//important
		}
	}
};
/*====================================================*/
/**
 * 模块
 * 一般形式：
 * 一个定义了私有变量和函数的函数；
 * 利用闭包创建可访问私有变量和函数的特权很熟；
 * 最后，返回这个特权函数，或者把它们保存到一个可以访问到的地方。
 * 
 * 好处：可以摈弃全局变量的滥用。更好地实现封装.
 * 模块通常结合单例一起使用
 */
String.method('deentityify', function() {
	var entity = {
		quot: '"',
		lt: '<',
		gt: '>'
	};
	
	return function() {
		return this.replace(/&([^&;]+);/g, function(a, b) {
			var r = entity[b];
			return typrof r === 'string' ? r : a;
		});
	};
}());


//module sample 2
var serial_maker = function () {
	var prefix = '';
	var seq = 0;
	
	return {
		set_prefix: function(p) {
			prefix = p;
		},
		set_seq: function(s) {
			seq = s;
		},
		gensym: function () {
			var result = prefix + seq;
			seq += 1;
			
			return result;
		}
	};
};

var seqer = serial_maker();
seqer.set_prefix('Q');
seqer.set_seq(1000);
var unique = seqer.gensym();
//【个人观点】其实模块就是返回一个对象，只有该对象才能访问自己的属性和方法。



