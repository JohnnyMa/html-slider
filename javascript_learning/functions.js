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
		console.log(this);//DOMWindow ������this��ָ��ı���
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
 * ����������ģʽ�� ������������Ϊһ�����������ʱ�����ǳ�֮Ϊ ������ ����ģʽ�£�this���󶨵��ö���
 * 
 * 
 * ����������ģʽ�� ������������һ�����������ʱ��������Ϊһ�����������á� ��ʱ��this ���󶨵�ȫ�ֶ���
 * 
 * 
 * ������������ģʽ��  ��apply����ģʽ��
 * 
 * 
 * 
 * ���������õ�ʱ�򶼻���һ��arguments�ġ����顱
 * arguments ��һ��array-like�Ķ���readonly
 * 
 * 
 * ��tip��
 * һ���������ǻ᷵��һ��ֵ��
 * ���û��ָ��ֵ���򷵻�һ�� undefined
 * 
 * ���������new�ķ�ʽ�����ã����ҷ���ֵ����һ�������ʱ�� �򷵻�this�����¶��󣩡�
 * 
 * 
 * 
 * 
 * try catch
 * 
 * exception ����ԭ��ӵ��name, message ���ԡ���Ȼ��Ҳ�����Լ�����������ԡ�
 * 
 * 
 * 
 * javascript�У�
 * ���ǿ���ͨ����Object.prototype��ӷ�����ʹ�ø÷����ԡ����ж��󡿿��á�
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





