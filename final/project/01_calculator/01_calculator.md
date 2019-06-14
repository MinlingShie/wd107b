# 計算機
## 網站
  [網頁設計期末-計算機](https://minlingshie.github.io/wd107b/final/droptown/Java01.html)


## 功能與說明
1. 簡易的文字型計算機
2. 輸入：a, op, b 三個欄位
3. 輸出：result

已預設為範例，a=3 , op=+ , b=5
```js
  function calculate() {
    var a = document.getElementById('a')
    var op = document.getElementById('op')
    var b = document.getElementById('b')
    var result = document.getElementById('result')
    result.innerText = eval(a.value + op.value + b.value)
  }
```
用 document.getElementById('a') 取得 a 元件、document.getElementById('op') 取得 op 元件、document.getElementById('a') 取得 a 元件。

「a.value」、「a.value」、「a.value」會分別取的你輸入的 a、op、b 欄位內容

接著按下計算按鈕之後，就會用
```js
result.innerText = eval(a.value + op.value + b.value)
```
算出結果並呈現在畫面上，此範例會顯示出「 8 」