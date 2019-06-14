# 點擊顯示
## 網站
  [網頁設計期末＿Node.js](https://minlingshie.github.io/wd107b/final/droptown/NodeJs.html)


## 功能與說明
1. 點擊後觀看結果

點擊「按鈕（顯示結果）」後，下方粉紅色區塊會顯示出上方黃色區塊於node內顯示的結果．
以第一項為範例：
```js
<p>console.log('something you want to show')</p>
<button class="jsbt" onclick="hello()">顯示結果</button><br/>
<div class="node-out">
<p id="hello"></p>
</div>
<script>
    function hello(){
        var H ="something you want to show";
        document.getElementById("hello").innerHTML=H;
    }
</script>
```
定義第二個「 <p> 」id 為「 hello 」，「 button 」設置「onclick="hello()"」以表示：點擊後觸發函數「 hello() 」
定義函數內「 hello() 」內「 h 」值為「 something you want to show 」字串。
利用 document.getElementById('hello') 取得 hello 元件，並帶入 H 值。
便能得出其所顯示的結果，其餘依此類推。

