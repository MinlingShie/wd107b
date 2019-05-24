var a=[1,6,2,5,3,6,1];
for (i=0;i<a.length;i++){
    console.log("a[%d]=%d",i,a[i]);
}
/*JavaScript 的陣列宣告非常簡單，
就是用 [...] 所框起來的一連串資料，
或者您也可以用 new Array() 語句來建立一個空的陣列，
而且可以用 length 屬性來取得陣列大小。*/
/* 
for (i=0;i<a.length;i++)
i=0  i一開始等於0
i<a.length  i值小於a矩陣的長度，即i<7，ＰＳ矩陣內的值的位置是從0開始
i++  i=i+1
*/
/*
console.log("a[%d]=%d,i,a[i])
%d 印出數字
第一個 %d 對應 i 的數值
第二個 %d 對應 a[i]的數值
*/