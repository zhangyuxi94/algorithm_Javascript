/**
 * Created by zhangyuxi on 2016/9/18.
 */
var N=1123211;
console.log(palidromeNumber(N));
function palidromeNumber(N){
    if(N<0){
        return false;
    }
    if(N<10){
        return true;
    }
    if(N<100&&N%11==0){
        return true;
    }
    var before=parseInt(N/10);
    var after=parseInt(N%10);
    while (before-after>0){

        after=parseInt(after*10+before%10);
        before=parseInt(before/10);
    }
    if(after-before==0){
        return true;
    }
    else if(after-before>0){
        if(before==parseInt(after/10)){
            return true;
        }
        else{
            return false;
        }
    }
    return false;
}