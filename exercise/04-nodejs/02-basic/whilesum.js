/* while 迴圈2 */
/*如果在從 1 數到 10 的過程當中，把變數 i 進行累加，
那麼就可以得到累加總和， 1+..+10 = 55 的結果如下。*/
sum=0;
i=1;
while(i<=10){
    sum=sum+i;
    console.log('i=',i,'sum',sum)
    i=i+1;
}