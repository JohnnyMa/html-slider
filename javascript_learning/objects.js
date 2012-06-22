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


//hasOwnProperty 不会去检查原型链
console.log(another_stooge.hasOwnProperty("first-name"));


stooge.nickname = "johnnyma";

delete another_stooge.nickname;

console.log(stooge.nickname);
console.log(another_stooge.nickname);




/**
 * 委托
 * 
 * 原型链只有在检索值的时候才会被用到。
 * 在上面的例子里，another_stooge并没有"first-name","last-name"这两个属性，但是却能从其原型链中找到。
 * 
 * 在javascript中， 当我们尝试去获取对象的某个属性，并且该对象并没有这个属性的时候，便会试着从原型对象中去获取。
 * 如果，其原型对象也不存在该属性，那么就会再向上去找上一层原型对象的属性，
 * 以此类推，知道找到最后的终点Object.prototype。
 * 
 * 如果，所有的原型链里都不存在该属性，那么就会返回undefined。
 * 
 * 这个过程就叫做 委托。
 * 
 * 【原型关系是一种动态关系。】
 * 如果添加了一个新的属性到原型中，那么该属性就会立即对所有基于该原型创建的对象可见。
 * 但是原型链在更新时是不会起作用的。
 * 
 */
