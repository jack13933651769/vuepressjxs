# 数组对象扁平化

## 数组扁平化
 数组flat
 ```js
 将多维数组转换成一维数组，例如：
 ['a', ['b', 'c', ['d', 'e', 'f', ['g']]]]
 转成
 ['a', 'b', 'c', 'd', 'e', 'f', 'g']
 如何实现flat函数？
 ```
 递归实现思路
 1. 创建一个空数组
 2. 遍历多维数组
 3. 如果当前元素得非数组，将元素添加到新数组末尾
 4. 如果当前元素是数组，元素调用函数本身
 5. 返回新数组

```js
let arr = ['a', ['b', 'c', ['d', 'e', 'f', ['g']]]];
function flat(array){
    let arr = [];
    array.forEach(item=>{
        if(Array.isArray(item)){
            arr = arr.concat(flat(item));
        }else{
            arr.push(item);
        }
    });
    return arr;
}
flat(arr);
```

  非递归实现思路
 1. 创建一个空数组
 2. 创建一个队列
 3. 循环遍历列队，每次移除首个元素
 4. 如果首个元素非数组，将首个元素添加到新数组开头
 5. 如果首个元素是数组，将首个元素添加到队列的末尾
 6. 返回新数组

```js
let arr = ['a', ['b', 'c', ['d', 'e', 'f', ['g']]]];
function flat(array){
    let arr = [];
    let queue = array;
    if(!queue.length){
        return [];
    }
    while(queue.length){
        let val = queue.pop();
        if(Array.isArray(val)){
            queue.push(...val)
        }else {
            arr.unshift(val)
        }
    }

    return arr;
}
flat(arr);



function flat(array) {
    let arr = [];
    let queue = array;
    if(!queue.length){
        return [];
    }
    for(;queue.length;){
        let val = queue.pop();
        if(Array.isArray(val)){
            queue.push(...val)
        }else {
            arr.unshift(val)
        }
    }
    return arr;
}
```

## 对象扁平化

{a:{b:{c:{d:'qdkabcd'}},d:{x: 'qdkadx'},e:'qdkae'}}
转成
{'a.e':'qdkae','a.d.x':'qdkadx','a.b.c.d':'qdkabcd'}


递归思路

1. 创建一个空新对象
2. 遍历对象属性
3. 如果当前属性是基本类型， 将属性及值复制到新对象上
4. 如果当切属性是引用类型， 将属性及值递归调用函数本身
5. 返回新对象

```js

let object = {
    a: {
        b: {
            c: {
                d: 'qdkabcd'
            }
        },
        d: {
            x: 'qdkadx'
        },
        e: 'qdkae'
    }
};

function flat(obj,prefix) {
    let res = {};
     Object.entries(obj).forEach(item=>{
         let {k,v} = item;
         let key = prefix?`${prefix}.${k}`:k;
         console.log('key':key)
         if(typeof v != 'object'){
             res[key] = v;
         }else {
             res = Object.assign(res,flat(v,key));
         }
     });
    return res;
}

console.log(flat(object))



```

非递归思路

1. 创建一个空新对象
2. 创建一个队列
3. 循环遍历队列，每次移除首个元素键值对数组
4. 如果首个元素键值对数组的值是基本类型，将键及值复制到新对象上
5. 如果首个元素键值对数组的值是引用类型，将键及值添加到队列的末尾
6. 返回新对象

```js

let object = {
    a: {
        b: {
            c: {
                d: 'qdkabcd'
            }
        },
        d: {
            x: 'qdkadx'
        },
        e: 'qdkae'
    }
};

function flat(object){
    let res = {};
    let queue = Object.entries(object);
    while(queue.length){
        let [key, obj] = queue.pop();
        Object.entries(obj).forEach(item=>{
            let [k, v] = item;
            if(typeof v!= 'object'){
                res[`${key}.${k}`] = v;
            }else{
                queue.push([`${key}.${k}`, v]);
            }
        });
    }
    return res;

console.log(flat(object))
```
递归是指直接或间接调用函数本身，也成为线性递归。
特点：代码精炼，易于阅读，性能差。
非递归是指借助堆栈或者循环算法实现。
特点：代码复杂，不易理解，性能好。