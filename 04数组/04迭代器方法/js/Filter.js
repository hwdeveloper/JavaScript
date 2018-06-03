function Filter(arrays,call) {
    //1,创建数组
    var buffer = [];
    //2,获得数组的长度
    var length = arrays.length;
    //3,遍历数组
    for (var i = 0; i < length; i++) {
        //4，取出数据
        var value = arrays[i];

        var isTrue=call(value)
        //5满足条件后才把当前的数据放到新数组里面去
        if (isTrue) {
            buffer.push(value);
        }
    }
    return buffer;
}