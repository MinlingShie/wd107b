/* 陣列處理習題04 */
/* 請請算出某陣列的平均值？
範例： mean([1,2,3,4,5]) => 3 */

 
function average()
{
    var sum=0;
    var a=[1,2,3,4,5];
    for (i=0;i<a.length;i++){
        sum=sum+a[i]
        console.log('sum=',sum)
    }
    var average=sum/a.length
    console.log('average=',average)
}
average();
