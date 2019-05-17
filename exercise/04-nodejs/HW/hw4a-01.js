/* 陣列處理習題01 */
/*請在一個已經排序的陣列中之正確位置插入一個數值。
範例： insert([1,2,5,6,7], 3) => [1,2,3,5,6,7]*/

var a=[1,2,5,6,7];
function insert(n){
    a.push(n);/* 把n推入列陣尾端 */
    a.sort();/* 將a排序（由小到大） */
    for(i=0;i<a.length;i++)
    {
        console.log(a[i]);
    }
}
insert(3);
console.log('a=',a)