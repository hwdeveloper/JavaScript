function myForEach(nums,call) {
    var length =nums.length;
    for(var i=0;i<length;i++){
        call(nums[i]);
    }
}