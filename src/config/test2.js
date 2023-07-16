let arr=[1,2,3,4];
//返回满足条件的第一个元素值
let result = arr.find(item =>{
    return item > 3
});
//返回满足条件第一个元素的下标
var result2 = arr.findIndex(item =>{
    return item > 3
});
export {result}