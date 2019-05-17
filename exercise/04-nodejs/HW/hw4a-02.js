/* 陣列處理習題02 */
/* 請用二分搜尋法搜尋一個已經排好序的陣列。
範例： find([ 1, 4, 5, 8, 9], 5) => 2 , 找不到時傳回 -1。 */

var a=[1,4,5,8,9];
function find(n){
    for(i=0;i<a.length;i++){
        if(a[i]===n)
        console.log(i)
    }
}
find(5);