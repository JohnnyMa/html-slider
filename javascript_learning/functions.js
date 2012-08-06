var myObject = {
	value : 0,
	increment : function (inc){
	    console.log(this);//myObject
		this.value += typeof inc === 'number' ? inc : 1;
		return inc;
	}
};

//��������ģʽ
myObject.increment('a');
console.log(myObject.value);

myObject.increment(2);
console.log(myObject.value);



var add = function (a, b) {
	console.log(this);//DOMWindow
	return a + b;
}
//��������
var sum = add(3, 4);


myObject.double = function () {
	var that = this;
	console.log(that);//myObject
	
	var helper = function () {
		console.log(this);//DOMWindow ������this��ָ���ı���
		that.value = add(that.value, that.value);
	};
	
	helper();
};

//��������
myObject.double();
console.log(myObject.value);



var Quo = function (string) {
	this.status = string;
}

Quo.prototype.get_status = function () {
	console.log(this);//Quo
	return this.status;
}
//����������
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
//apply����
var sum = add.apply(null, array);
/**
 * apply �ĵ�һ����������Ҫ���󶨸�this��ֵ
 * �ڶ��������� һ����������
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
 * javascript �����ֵ���ģʽ�� 
 * ����������ģʽ�� ������������Ϊһ������������ʱ�����ǳ�֮Ϊ ������ ����ģʽ�£�this���󶨵��ö�����
 * 
 * 
 * ����������ģʽ�� ������������һ������������ʱ��������Ϊһ�����������á� ��ʱ��this ���󶨵�ȫ�ֶ�����
 * 
 * 
 * ������������ģʽ��  ��apply����ģʽ��
 * 
 * 
 * 
 * ���������õ�ʱ�򶼻���һ��arguments�ġ����顱
 * arguments ��һ��array-like�Ķ�����readonly
 * 
 * 
 * ��tip��
 * һ���������ǻ᷵��һ��ֵ��
 * ����û��ָ��ֵ���򷵻�һ�� undefined
 * 
 * ����������new�ķ�ʽ�����ã����ҷ���ֵ����һ��������ʱ���� �򷵻�this�����¶��󣩡�
 * 
 * 
 * 
 * 
 * try catch
 * 
 * exception ����ԭ��ӵ��name, message ���ԡ���Ȼ��Ҳ�����Լ������������ԡ�
 * 
 * 
 * 
 * javascript�У�
 * ���ǿ���ͨ����Object.prototype���ӷ�����ʹ�ø÷����ԡ����ж��󡿿��á�
 * 
 * ����ͨ����Function.prototype���ӷ�����ʹ�ø÷����ԡ����к��������á���������
 * 
 */

Number.method('integer', function () {
	return Math[this < 0 ? 'ceil' : 'floor'](this);
});

console.log((-10/3).integer());





/**
 * 
 * ������������һ������
 * ���������Ƚϱ��գ������˲���Ҫ�ĳ�ͻ��
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
 * �հ�
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
 * ģ��
 * һ����ʽ��
 * һ��������˽�б����ͺ����ĺ�����
 * ���ñհ������ɷ���˽�б����ͺ�������Ȩ���죻
 * ���󣬷���������Ȩ���������߰����Ǳ��浽һ�����Է��ʵ��ĵط���
 * 
 * �ô������Ա���ȫ�ֱ��������á����õ�ʵ�ַ�װ.
 * ģ��ͨ�����ϵ���һ��ʹ��
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
//�����˹۵㡿��ʵģ�����Ƿ���һ��������ֻ�иö������ܷ����Լ������Ժͷ�����



/**
 * ���� cascade
 * 
 * һЩ����û�з���ֵ������һЩ�����޸Ķ�����ĳ��״̬�ķ�����
 * ��������������Щ��������this��������undefined���޷���ֵ�ķ������Լ�����һ��undefined���Ļ���
 * ��ô�����������˼�����
 * 
 * ������������������дjavascript��ʱ�򣬲�����ʽд�� jquery�Ͳ��������ַ�ʽ��
 * 
 * 
 */
 
 
 
 
 //use memoization to keep data to imporve performance
function memfactorial(n) {
  if (!memfactorial.cache) {
    memfactorial.cache = {
      "0": 1,
      "1": 1
    };
  }
  if (!memfactorial.cache.hasOwnProperty(n)) {
    memfactorial.cache[n] = n * memfactorial(n - 1);
  }

  return memfactorial.cache[n];
}


