## apply() 方法

> apply() 方法调用一个具有给定this值的函数，以及以一个数组（或类数组对象）的形式提供的参数。

* apply() 方法的作用和 call() 方法类似，区别就是call()方法接受的是参数列表，而apply()方法接受的是一个参数数组。

### 语法
```js
func.apply(thisArg, [argsArray])
```
### 参数
* thisArg

必选的。在 func 函数运行时使用的 this 值。请注意，this可能不是该方法看到的实际值：如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动替换为指向全局对象，原始值会被包装。

* argsArray

可选的。一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 func 函数。如果该参数的值为 null 或  undefined，则表示不需要传入任何参数。从ECMAScript 5 开始可以使用类数组对象。浏览器兼容性 请参阅本文底部内容。
### 返回值
调用有指定this值和参数的函数的结果。

### 描述
在调用一个存在的函数时，你可以为其指定一个 this 对象。 this 指当前对象，也就是正在调用这个函数的对象。 使用 apply， 你可以只写一次这个方法然后在另一个对象中继承它，而不用在新对象中重复写该方法。

apply 与 call() 非常相似，不同之处在于提供参数的方式。apply 使用参数数组而不是一组参数列表。apply 可以使用数组字面量（array literal），如 fun.apply(this, ['eat', 'bananas'])，或数组对象， 如  fun.apply(this, new Array('eat', 'bananas'))。



### 示例
#### 用 apply 将数组各项添加到另一个数组
我们可以使用push将元素追加到数组中。由于push接受可变数量的参数，所以也可以一次追加多个元素。

但是，如果push的参数是数组，它会将该数组作为单个元素添加，而不是将这个数组内的每个元素添加进去，因此我们最终会得到一个数组内的数组。如果不想这样呢？concat符合我们的需求，但它并不是将元素添加到现有数组，而是创建并返回一个新数组。 然而我们需要将元素追加到现有数组......那么怎么做好？难道要写一个循环吗？别当然不是！

apply正派上用场！
```js
var array = ['a', 'b'];
var elements = [0, 1, 2];
array.push.apply(array, elements);
console.info(array); // ["a", "b", 0, 1, 2]

```
#### 使用apply和内置函数
对于一些需要写循环以遍历数组各项的需求，我们可以用apply完成以避免循环。

下面是示例，我们将用Math.max/Math.min求得数组中的最大/小值。
```js
/* 找出数组中最大/小的数字 */
var numbers = [5, 6, 2, 3, 7];

/* 使用Math.min/Math.max以及apply 函数时的代码 */
var max = Math.max.apply(null, numbers); /* 基本等同于 Math.max(numbers[0], ...) 或 Math.max(5, 6, ..) */
var min = Math.min.apply(null, numbers);

/* 对比：简单循环算法 */
max = -Infinity, min = +Infinity;

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > max)
    max = numbers[i];
  if (numbers[i] < min)
    min = numbers[i];
}
```
> 注意：如果按上面方式调用apply，有超出JavaScript引擎参数长度上限的风险。一个方法传入过多参数（比如一万个）时的后果在不同JavaScript 引擎中表现不同。（JavaScriptCore引擎中有被硬编码的 参数个数上限：65536）。这是因为此限制（实际上也是任何用到超大栈空间的行为的自然表现）是不明确的。一些引擎会抛出异常，更糟糕的是其他引擎会直接限制传入到方法的参数个数，导致参数丢失。比如：假设某个引擎的方法参数上限为4（实际上限当然要高得多）, 这种情况下，上面的代码执行后, 真正被传递到 apply的参数为 5, 6, 2, 3 ，而不是完整的数组。

如果你的参数数组可能非常大，那么推荐使用下面这种混合策略：将数组切块后循环传入目标方法：
```js
function minOfArray(arr) {
  var min = Infinity;
  var QUANTUM = 32768;

  for (var i = 0, len = arr.length; i < len; i += QUANTUM) {
    var submin = Math.min.apply(null, arr.slice(i, Math.min(i + QUANTUM, len)));
    min = Math.min(submin, min);
  }

  return min;
}

var min = minOfArray([5, 6, 2, 3, 7]);
```
#### 使用apply来链接构造器
你可以使用apply来链接一个对象构造器 (en-US)，类似于Java。在接下来的例子中我们会创建一个全局Function 对象的construct方法 ，来使你能够在构造器中使用一个类数组对象而非参数列表。
```js
Function.prototype.construct = function (aArgs) {
  var oNew = Object.create(this.prototype);
  this.apply(oNew, aArgs);
  return oNew;
};
```
> 备注： 上面使用的Object.create()方法相对来说比较新。另一种可选的方法，请考虑如下替代方法：

**Using Object.__proto__:**
```js

Function.prototype.construct = function (aArgs) {
  var oNew = {};
  oNew.__proto__ = this.prototype;
  this.apply(oNew, aArgs);
  return oNew;
};
```
**使用闭包：**
```js
Function.prototype.construct = function(aArgs) {
  var fConstructor = this, fNewConstr = function() {
    fConstructor.apply(this, aArgs);
  };
  fNewConstr.prototype = fConstructor.prototype;
  return new fNewConstr();
};
```
**使用 Function 构造器：**
```js
Function.prototype.construct = function (aArgs) {
  var fNewConstr = new Function("");
  fNewConstr.prototype = this.prototype;
  var oNew = new fNewConstr();
  this.apply(oNew, aArgs);
  return oNew;
};
```
**使用示例：**
```js
function MyConstructor (arguments) {
    for (var nProp = 0; nProp < arguments.length; nProp++) {
        this["property" + nProp] = arguments[nProp];
    }
}

var myArray = [4, "Hello world!", false];
var myInstance = new MyConstructor(myArray); //Fix MyConstructor.construct is not a function

console.log(myInstance.property1);                // logs "Hello world!"
console.log(myInstance instanceof MyConstructor); // logs "true"
console.log(myInstance.constructor);              // logs "MyConstructor"
```
> 备注： 这个非native的Function.construct方法无法和一些native构造器（例如Date）一起使用。 在这种情况下你必须使用Function.bind方法（例如，想象有如下一个数组要用在Date构造器中： [2012, 11, 4]；这时你需要这样写： new (Function.prototype.bind.apply(Date, [null].concat([2012, 11, 4])))() – -无论如何这不是最好的实现方式并且也许不该用在任何生产环境中).