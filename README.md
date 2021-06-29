# Markdown
学习Markdown使用

---

# 一级标题  标题样式`#文字`
## 二级标题
### 三级标题
一级标题
========
二级标题
--------

---

## 分割线  `---`
***
* * *
*****
- - -
--------------  

---

## 文字样式`*文字*`
*斜体*  
**粗体**  
***粗斜体***  

---

## 删除线`~~`
~~这里是删除线~~  

---

## 下划线`<u></u>`
<u>这里是下划线</u>

---

## 脚注 `[^RUNOOB]`
带脚注的文本[^RUNOOB].  
[^RUNOOB]:这里是脚注的内容.

---

## 无序列表 `* 第几项`  `+ 第几项`  `- 第几项`
* 第一项
* 第二项
* 第三项
+ 第一项
+ 第二项
+ 第三项
- 第一项
- 第二项
- 第三项

## 有序列表 `1. 第一项`  `2. 第二项`  `3. 第三项`
1. 第一项
2. 第二项
3. 第三项

### 列表嵌套 `四个空格 * - =`
1. 第一项:
    - 嵌套一
    - 嵌套二
    - 嵌套三
2. 第二项
    * 嵌套一
    * 嵌套二
    * 嵌套三

---

## 区块引用`> 文字`
> 最外层区块引用
> > 第一层区块引用
> > > 第三层区块引用

### 区块中使用列表
> 区块中使用列表
> 1. 第一项
>       - 嵌套一
>           - 嵌套二
>               - 嵌套三
>       - 嵌套二
>       - 嵌套三
> 2. 第二项
> 3. 第三项
> * 第一项
> * 第二项
> * 第三项

### 列表中使用区块
1. 第一项
    > 嵌套区块一  
    > 嵌套区块二
        > > 嵌套区块一
        > > 嵌套区块二
            > > > 嵌套区块一

---

## 代码块 `tab` or ```语言名
    $(document).ready(function () {
        alert('RUNOOB');
    });
    
```
$(document).ready(function () {
    alert('RUNOOB');
});
```

```php
function(){
    $arr = [];
    foreach ($arr as $key => $value) {
        // $arr[3] 会被 $arr 的每一项值更新掉…
        echo "{$key} => {$value} ";
        print_r($arr);
    }
}
```
---

## 超文本链接 `[链接接名称](链接地址)`

[百度一下,你就知道](http://www.baidu.com)  

<http://www.baidu.com>

### 高级链接
我们可以设置链接变量在文档末尾来赋值

    [百度一下,你就知道][baidu]
    
    [baidu]:http://www.baidu.com

[百度一下,你就知道][baidu]

[baidu]:http://www.baidu.com

---

## 图片
![百度贴吧](https://tb2.bdstatic.com/tb/static-common/img/search_logo_big_v1_8d039f9.png "百度贴吧")

    ![百度贴吧](https://tb2.bdstatic.com/tb/static-common/img/search_logo_big_v1_8d039f9.png "百度贴吧")

![百度贴吧][tieba]

[tieba]:https://tb2.bdstatic.com/tb/static-common/img/search_logo_big_v1_8d039f9.png

    ![百度贴吧][tieba]
    [tieba]:https://tb2.bdstatic.com/tb/static-common/img/search_logo_big_v1_8d039f9.png

