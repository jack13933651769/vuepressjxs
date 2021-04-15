# JS面试题

## 1.JS基础类型有哪些，值是如何存储的

JavaScript 一共有8种数据类型，其中有<font style="color:red;">7种</font>基本数据类型:

<code>Undefined</code> <code>Null</code> <code>Boolean</code> <code>Number</code> 
<code>String</code> </br>
<code>Symbol</code>(ES6 新增，表示独一无二的值) </br>
<code>BigInt</code>(ES10新增) </br>

1种引用数据类型----<code>Object</code>(obejct本质上是一组无序的名值对组成的)。里面包含 function、Array、Date等。JavaScript不支持任何创建自定义类型的机制，而所有值最终都将是上述8种数据类型之一。

存储机制：<br>

原始数据类型：直接存储栈（stack）中，占据空间小，大小固定，属于被频繁使用数据，所有放入栈中存储。<br>

引用数据类型:同时存储在栈(stack)和堆(heap)中，占据空间大、大小不固定。引用数据类型在栈中存储了指针，该指针向堆中该实体的起始地址。当解释器寻找引用值时，会首先检索其在栈中的地址，取得地址后从堆中获得实体。



## new 操作符都做了什么 

(1) 在内存中创建一个新对象。

(2) 这个新对象内部的[[Prototype]]特性被赋值为构造函数的prototype属性。

(3) 构造函数内部的this被赋值为这个新对象（即this指向新对象）。

(4) 执行构造函数内部的代码（给新对象添加属性）。

(5) 如果构造函数返回非空对象，则返回该对象；否则，返回刚创建的新对象。


