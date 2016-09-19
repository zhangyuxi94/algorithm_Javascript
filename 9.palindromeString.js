/**
 * Created by zhangyuxi on 2016/9/18.
 */
var string="status";
console.log(palindromeString(string));
function palindromeString(string){
    var reverse="";
    for(var i=string.length-1;i>=0;i--){
        reverse+=string[i];
    }
    if(reverse===string){
        return true;
    }
    return false;
}