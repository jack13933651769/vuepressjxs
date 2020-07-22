# css水平垂直居中的几种方式

基础结构

```css
<!--基础结构样式-->
<style>
    .parent{
        width: 100%;
        height: 100vh;
        background-color: red;
    }
    .child{
        width: 50%;
        height: 50vh;
        background-color: green;
    }
</style>
<body>

    <div class="parent">
        <div class="child"></div>
    </div>
</body>

```

## 1. flex实现

```css
.parent{
	display:flex;
	justify-conent: center;
    align-items: center;
}

/*优点：代码量少，三行代码实现水平垂直居中未知宽高子元素*/
/*缺点：兼容性不是很好，使用flex诸多版本做兼容*/

```

## 2. positon,margin实现


```css
<style>
.parent{
    position: relative;
}
.child{
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
}
</style>
/*优点： 兼容性好，可兼容低版本IE，居中不定宽高子元素*/
/*缺点： 代码量多，实现起来麻烦*/

```

## 3. position,transform实现

```css
<style>
.parent{
    position: relative;
}
.child{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
}
</style>

```

## 4. display: table-cell实现


```css
<style>
.parent{
    display: table-cell;
    text-align: center;
    vertical-align: middle;
}
.child{
    display: inline-block;
}
</style>

```

## 5. line-height  text-align实现   局限性：里面必须是  dispaly inline  否则不生效

```css


.app{
    width: 500px;
    height: 500px;
    background: greenyellow;
    line-height: 500px;
    text-align: center;
    
}
.app>div{
    width: 100px;
    font-size: 20px;
    background: blueviolet;	
    display: inline;				
}

```

## 6. 横向利用margin auto，垂直还是利用定位和平移 也不用管里边元素的高度

```css
.app{
    width: 500px;
    height: 500px;
    background: greenyellow;
}
.app>div{
    background: blueviolet;	
	position:relative;
    top: 50%;
    transform: translateY(-50%);
	margin:0 auto;			
}

```

## 7. 最不推荐的方案  通过计算padding 一旦内部元素改变了高度或者宽度，那就惨了

```css
.app{
    width: 500px;
    height: 500px;
    background: greenyellow;
    box-sizing: border-box;
    padding-left: 200px;
    padding-top: 200px;											
}
.app>div{
    width: 100px;
    height: 100px;
    font-size: 20px;
    background: blueviolet;	
    
} 
```



## 8.  单行文本好居中 就是让文本的父元素的line-height和高度相同
```css
.app{
    width: 500px;
    height: 500px;
    background: greenyellow;		
    text-align: center;
    line-height: 500px;
}
.app>div{
    width: 100px;
    height: 100px;
    font-size: 20px;
    background: blueviolet;	
    display: inline;			
} 
```