/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    const startTime = new Date();
    for(let i = 0 ;i < nums.length;i++){
        for(let j = i+1; j < nums.length;j++){
            if(nums[i]+nums[j] === target){
                const endTime = new Date();
                const executionTime = endTime - startTime;
                console.log(`โปรแกรมที่รันเสร็จในเวลา: ${executionTime} มิลลิวินาที`)
                return [i,j]
            }
        }
    }
};

const nums = [3,2,4]
const target = 6

console.log(twoSum(nums,target))