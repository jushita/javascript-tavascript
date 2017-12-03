//Given an array of integers, every element appears twice except for one. Find that single one.
 // [1,1,2,2,3,3,4]
 function singleNumber(nums){
     nums = nums.sort(function(a,b){return(a-b)})
     len = nums.length;
     dict = {};
     if (len%2 != 0){
        for(let i = 0; i <= len - 1;i++){
            if(dict[nums[i]] == undefined) {
                dict[nums[i]] = 1;
            } else {
                dict[nums[i]]++;
            }
        }
     }
     else{
         console.log("No single number");
     }
     for (let key in dict){
         if (dict[key] == 1){
             console.log(`${dict[key]} is the single number`);
         }
     }

 }


singleNumber([9,8,6,6,8,9])
//Given an array of integers, every element appears twice except for one. Find that single one. Without using extra memory.

function singleNumber_2(nums){

    var num = 0;
    for(let i=0; i<nums.length; i++){
        num ^= nums[i];
    }

    console.log (num);

}

singleNumber_2([9,8,6,3,6,8,9])
