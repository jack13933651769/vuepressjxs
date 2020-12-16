# 移动端

## px 移动端布局
```js
    <meta name="viewport"content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no,viewport-fit=cover" />
    <meta content="yes" name="apple-mobile-web-app-capable" />
    <meta content="black" name="apple-mobile-web-app-status-bar-style" />
    <meta content="telephone=no" name="format-detection" />
    <meta name="author" content="Design:CP; Web Layout:CP;" />
    <meta name="robots" content="index, follow" />
    <meta name="googlebot" content="index, follow" />

        var phoneWidth = parseInt(window.screen.width);
        var phoneScale = phoneWidth / 750;
        var ua = navigator.userAgent;
        if (/Android (\d+\.\d+)/.test(ua)) {
            var version = parseFloat(RegExp.$1);
            // andriod 2.3
            if (version > 2.3) {
                document.write('<meta name="viewport" content="width=750, minimum-scale = ' + phoneScale + ', maximum-scale = ' + phoneScale + ', target-densitydpi=device-dpi">');
                // andriod 2.3
            } else {
                document.write('<meta name="viewport" content="width=750, target-densitydpi=device-dpi">');
            }
        } else {
            document.write('<meta name="viewport" content="width=750, user-scalable=no, target-densitydpi=device-dpi">');
        }
 

        var deviceWidth = document.documentElement.clientWidth;
        if (deviceWidth > 750) {
            deviceWidth = 750
        };
        document.documentElement.style.fontSize = deviceWidth / 7.5 + 'px';


```
