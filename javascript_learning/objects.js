var stooge = {
	"first-name" : "Johnny",
	"last-name" : "Ma"
};

if ("function" !== typeof Object.bedget) {
	Object.bedget = function(o) {
		var F = function() {
		};
		F.prototype = o;

		return new F();
	}
}

var another_stooge = Object.bedget(stooge);

var a = another_stooge["first-name"];
var b = another_stooge.firstName; //wrong
console.log(a);
console.log(b);
console.log(another_stooge);


//hasOwnProperty ����ȥ���ԭ����
console.log(another_stooge.hasOwnProperty("first-name"));


stooge.nickname = "johnnyma";

delete another_stooge.nickname;

console.log(stooge.nickname);
console.log(another_stooge.nickname);




/**
 * ί��
 * 
 * ԭ����ֻ���ڼ���ֵ��ʱ��Żᱻ�õ���
 * ������������another_stooge��û��"first-name","last-name"���������ԣ�����ȴ�ܴ���ԭ�������ҵ���
 * 
 * ��javascript�У� �����ǳ���ȥ��ȡ�����ĳ�����ԣ����Ҹö���û��������Ե�ʱ�򣬱�����Ŵ�ԭ�Ͷ�����ȥ��ȡ��
 * �������ԭ�Ͷ���Ҳ�����ڸ����ԣ���ô�ͻ�������ȥ����һ��ԭ�Ͷ�������ԣ�
 * �Դ����ƣ�֪���ҵ������յ�Object.prototype��
 * 
 * ��������е�ԭ�����ﶼ�����ڸ����ԣ���ô�ͻ᷵��undefined��
 * 
 * ������̾ͽ��� ί�С�
 * 
 * ��ԭ�͹�ϵ��һ�ֶ�̬��ϵ����
 * ��������һ���µ����Ե�ԭ���У���ô�����Ծͻ����������л��ڸ�ԭ�ʹ����Ķ���ɼ���
 * ����ԭ�����ڸ���ʱ�ǲ��������õġ�
 * 
 */
