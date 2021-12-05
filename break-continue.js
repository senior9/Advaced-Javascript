const nums = [1, -1, -2,  2, 3, -3, -4, 4, 5, 6, 7, 8, 9];
// for (let i = 0; i < nums.length; i++) {
    
//     if (nums[i]> 4) {  
//         break;
//     }
//     console.log(nums[i]);
// }


for (let i = 0; i < nums.length; i++) {
    
    if (nums[i]< 1) {  
        continue;
    }
    console.log(nums[i]);
}