# 圖片變換
## 網站
  [https://minlingshie.github.io/wd107b/final/droptown/Java02.html](網頁設計期末＿嘗試點點看)


## 功能與說明
1. 滑鼠游標移至圖片時，圖片放大
2. 點擊圖片時，切換成另一張圖片
3. 再次點擊時，切換回原本的圖片


當滑鼠游標移至圖片時，圖片會放大，其主要是使用css：
```js
img{
    max-width: 80%;
    max-height: 80%;
}
img:hover{
    transition: 1s;
    max-width: 90%;
    max-height: 90%;
}  
```
「 img 」中「 max-width 」、「 max-heigh 」分別表示最大的寬與高，此設定為頁面的80%
當游標移至圖片時，就會啟動「 img:hover 」中的css，於1秒的時間讓圖片放大至頁面的90%，其中「 transition: 1s; 」表示轉換、過度。


當點擊圖片時，會切換成另一張圖片，若再次點擊，則會切換回原本的圖片，其是使用Javascript：
    以第二張圖為範例：
```js
    <script>
        function changeImage(){
            var s2 = document.getElementById('jinn')
            s2.src = s2.src.match('jinnja')?"../img/jinn.png":"../img/jinnja.png";
        }
    </script>
    <img id="jinn" onclick="changeImage()" src="../img/jinnja.png"/>
```
「 img 」設定其「 id 」為「jinn」，並將其設置「onclick="changImage()"」以表示：點擊後觸發函數「 changeImage() 」。
用「 document.getElementById('jinn') 」取得 jinn 元件，
利用「 s2.scr.match('jinnja') 」檢索「 scr」屬性的值「 ../img/jinnja.png 」是否有包含「 jinnja 」這個字串。
如果有，「 id=jinn 」的圖片將會在點擊後更新為「 jinn.png 」；
若沒有，「 id=jinn 」的圖片將會在點擊後更新為「 jinnja.png 」。

另外第一張與第三張圖片，以此類推．


