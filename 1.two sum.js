// two sum
/*Given nums = [2, 7, 11, 15], target = 9,
Because nums[0] + nums[1] = 2 + 7 = 9,
return [0, 1].*/

var number=[1,2,2,7,8,5,3];
var target=15;
twoSum(number,target);

function twoSum(number, target){
    var sortedNumber=number.sort();
    var startIndex=0;
    var endIndex=sortedNumber.length-1;
    var result=[];
    if(number==null||number.length==0){
        return null;
    }
    while(startIndex<endIndex){
        if(sortedNumber[startIndex]+sortedNumber[endIndex]<target){
            startIndex++;
        }
            else if(sortedNumber[startIndex]+sortedNumber[endIndex]>target){
            endIndex--;
        }
        else if(sortedNumber[startIndex]+sortedNumber[endIndex]==target){
            result[0]=startIndex;
            result[1]=endIndex;
            console.log(result);
            startIndex++;
        }
    }
    if(result==null){
        console.log(null);
    }
}

