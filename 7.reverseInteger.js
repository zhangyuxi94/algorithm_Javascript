/**
 * Created by zhangyuxi on 2016/9/19.
 */
console.log(reverseInteger(-4294967296));
function reverseInteger(N){
    var neg=1;
    var beforeDig=N;
    var afterDig;
    var reverse=0;
    var intRange=Math.pow(2,32);
    if(N<-intRange||N>intRange){
        return 0;
    }
    if(N<0){
        neg=-1;
        beforeDig=neg*N;
    }
    while(beforeDig>0){
        afterDig=beforeDig%10;
        beforeDig=(beforeDig-afterDig)/10;
        reverse=reverse*10+afterDig;
    }
    if(neg==-1){
        return neg*reverse;
    }
    return reverse;
}