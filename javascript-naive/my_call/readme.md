* call() 方法使用一个指定的 this 值和单独给出的一个或多个参数来调用一个函数。

### 语法
```js
function.call(thisArg, arg1, arg2, ...)
```

### 参数
* 1、thisArg

可选的。在 function 函数运行时使用的 this 值。请注意，this可能不是该方法看到的实际值：如果这个函数处于非严格模式下，则指定为 null 或 undefined 时会自动替换为指向全局对象，原始值会被包装。

* 2、arg1, arg2, ...

指定的参数列表。

### 返回值
使用调用者提供的 this 值和参数调用该函数的返回值。若该方法没有返回值，则返回 undefined。