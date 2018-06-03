function Map(arrayData,call) {
    //1，获得数组的长度
    var length = arrayData.length;
    //2,创建一个数组
    var buffer = [];
    //3,遍历
    for(var i=0;i<length;i++){

        var data=call(arrayData[i]);
        buffer.push(data)  ;
    }
    return buffer;
}