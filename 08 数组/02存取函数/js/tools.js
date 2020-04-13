function indexOf(array,data) {
    var index=-1;
    //(2)对数组元素进行遍历
    for(var i=0;i<array.length;i++){
        //(3)对数组中每个数据进行判断
        if(array[i]==data){
            //(4)记录当前的index值
            index=i;
            return index;
        }
    }
    //当前array里面没有data
    return index;
}


function lastIndexOf(array,data) {
    //(1)设置查找数据的下标
    var index=-1;
    //(2)遍历数组数据
    for(var i=array.length-1;i >=0;i--){
        //(3)查找数据
        if(array[i]==data){
            index=i;
            return index;
        }
    }
    return index;
}

function join(array,type) {
    //1,设置缓存的字符串
    var buffer="";
    //2,对数组进行遍历
    for(var i=0;i<array.length;i++){
        //5,每次遍历的时候，把当前数组的数据追加到buffer上面

        if(i==array.length-1){
            //如果获得的是最后那个数组的元素，就不需要在后面添加分割符号
            buffer=buffer+array[i];
        }else{
            buffer=buffer+array[i]+type;
        }

    }
    return buffer;
}


function concat(array1,array2) {
    //1,获得第二个数组的长度
    var length2=array2.length;
    //2,对第二个数组数据进行遍历
    for(var i=0;i<length2;i++){
        //3,把遍历出来的数据始终追加到第一个数组后面
        array1[array1.length]=array2[i];
    }
    return array1;
}
function splice(array,startIndex,num) {
    //1,对startIndex进行验证
    if(startIndex<0)
        startIndex=0;

    //2,对num进行验证
    if(num+startIndex>names1.length)
        num=names1.length-startIndex;

    //3,创建新的数组
    var buffer=[];
    //4,对当前的数组进行遍历
    for(var i=startIndex;i<startIndex+num;i++){
        //开始的时候buffer.length为0
        buffer[buffer.length]=array[i];
    }
    return buffer;

}


function split(string,type) {
    //1,创建数组
    var buffer=[];
    //3,从当前字符串中找 type 所代表的值的下标，如果找到就为真，执行函数体里面的操作
    while(string.indexOf(type)!=-1){
        //4,获得当前查找元素的下标
        var index = string.indexOf(type);
        //5,获得下标前面的字符串
        var data=string.substring(0,index);
        //6,把查找到的数据放置到数组里面
        buffer[buffer.length]=data;
        //7,更改字符串
        string = string.substr(index+1);
    }
    buffer[buffer.length]=string;

    return buffer;
}

