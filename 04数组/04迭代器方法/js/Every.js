function myEvery(nums,call) {
    //1,获得数组的长度
    var length = nums.length;
    //2,遍历数组
    for(var i=0;i<length;i++){
        //3,取出每个值
        var buffer = nums[i];

       if(!call(buffer)){
            return false;
        }
    }
    return true;
}