# if、顯示時間
## 網站
  [網頁設計期末](https://minlingshie.github.io/wd107b/final/110414209.html)


## 功能與說明
1. 滑鼠游標移至招呼語會變色並且放大
2. 因時間不同，會顯示不同的日文打招呼語
3. 於網站最下方顯示現在的時間


當滑鼠游標移至招呼語時，文字會變色並且放大，其主要是使用css：
```js
.aisatsu{
    color: firebrick;
}
.aisatsu:hover{
    transition: 0.3s;
    color: rgb(240, 184, 42);
    font-size: 200%;
}
```
此項目說明可以「[https://minlingshie.github.io/wd107b/final/project/02_changeImage/02_changeImage.md](說明＿圖片變換)」類推。


因時間不同，而會顯示出不同的招呼語，其主要是使用Javascript：
```js
<div class="aisatsu">
    <script type="text/javascript">
        var d = new Date();
        var time = d.getHours();
        if (time<10)
        {
            document.write("<b><h1>おはようございます</h1></b>");
        }
        else if (time>=10 && time<16)
        {
            document.write("<b><h1>こんにちは</h1></b>");
        }
        else
        {
            document.write("<b><h1>こんばんは<h1></b>");
        }
    </script>
</div>
```
當時間小於10點時，會顯示出來的字串為「 おはようございます 」；
若時間介於大於等於10點且小於16點（下午4點）時，會顯示出來的字串為「 こんにちは 」；
若前兩項皆不符合，則會顯示出來的字串為「 こんばんは 」。
