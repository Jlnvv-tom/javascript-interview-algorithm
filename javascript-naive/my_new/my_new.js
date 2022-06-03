
  function my_new(fn) {

    let obj = {} // (1)

    if (fn.prototype !== null) {
      obj.__proto__ = fn.prototype // (2)
    }

    let res = fn.apply(obj, Array.prototype.slice.call(arguments, 1)) // (3)

    if ((typeof res === 'object' || typeof res === 'function') && res !== null) {
      return res
    }

    return obj

  }


// test

function Foo(){
  this.a = 123; // 123
  this.b = 'hello'
}

let test = my_new(Foo)
console.log(test.a, test.b); // 123 hello

let res = new Foo()
console.log(res.a, res.b); // 123 hello

