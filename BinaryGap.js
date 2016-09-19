/**
 * Created by zhangyuxi on 2016/9/18.
 */
var N=72;
console.log(BinaryGap(N));

function BinaryGap(N){
    var flag=false;
    var count=0;
    var result=0;

    while(N>0){
        if(N%2==0){
            count++;
        }
        else if(N%2==1){
            if(flag==true){
                result=count;
            }
            else if(flag==false){
                flag=true;
            }
            count=0;
        }
        N>>=1;
    }
    result=Math.max(count,result);
    console.log(result);
    return result;
}

//only when N>1 start loop(while)