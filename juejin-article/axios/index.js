/**
 * 
 * @模拟Axios创建过程
 * 1、创建Axios函数
 * 2、在Axios 的原型链上添加request、get、post、put...等方法
 * 3、创建，创建实例的函数createnstance
 * 4、将Axios原型链上的方法和属性赋给 instance
 * 5、通过createInstance创建的 axios实例具有与Axios 等同的功能
 * 
 */


/**
 * 
 * @param {*} config 
 */
function Axios(config) {
  this.defaults = config;
  this.interceptors = {
    request: {},
    response: {},
  };
}

/**
 * @请求函数
 * 1、创建promise 对象，
 * 2、声明一个[dispatchRequest,undefined]数组
 * 3、返回 promise 结果
 * @param {} config 
 */
Axios.prototype.request = function (config) {
  const promise = new Promise(resolve(config));
  const chains = [dispatchRequest, undefined]
  const result = promise.then(chains[0], chains[1])
  console.log(`output->requset请求`, config.method);
  return result;
}

Axios.prototype.get = function (config) {
  console.log(`output->get请求`);
  return this.request({ method: 'GET' })
}

Axios.prototype.post = function (config) {
  console.log(`output->Post请求`);
  return this.request({ method: 'POST' })
}

/**
 * dispatchRequest 函数
 * @param {*} config 
 */
function dispatchRequest(config) {
  return xhrAdapter(config).then(response => { }, error => { })
}

/**
 * xhrAdapter函数
 * @param {*} config 
 */
function xhrAdapter(config) {


}


/**
 * 创建Axios实例的函数
 * @param {} config 
 */
function createInstance(config) {
  let context = new Axios(config);
  let instance = Axios.prototype.request.bind(context);
  // 将
  Object.keys(Axios.prototype).forEach(method => {
    instance[method] = Axios.prototype[method].bind(context);
  })

  Object.keys(context).forEach(key => instance[key] = context[key])

  return instance;
}

const axios = createInstance({ method: 'GET' })

console.dir(axios)
