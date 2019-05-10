/* 題目：請寫一個程式計算 10! ，也就是 10*9*8*....*1。 */
/*
    function: 函數
    factorial: 階層
*/ 
function factorial(n){
    var i=1,r=1;
    while(i<=n){
        r=r*i
        console.log('i=',i,'r=',r)
        i=i+1
    }
    return r;
}

var f=factorial(10)
console.log('10!=',f)