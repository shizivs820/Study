/*
用递归算法实现，数组长度为5且元素的随机数在2-32间不重复的值
1.这是一道大题目，把考点拆成了4个小项；需要侯选人用递归算法实现（限制15行代码以内实现；限制时间10分钟内完成）：
  a) 生成一个长度为5的空数组arr。
  b) 生成一个（2－32）之间的随机整数rand。
  c) 把随机数rand插入到数组arr内，如果数组arr内已存在与rand相同的数字，则重新生成随机数rand并插入到arr内[需要使用递归实现，不能使用for/while等循环]
  d) 最终输出一个长度为5，且内容不重复的数组arr。
 */
function test(i,arr){
  var rand = Math.floor(Math.random() * 31) + 2;
  if(i<5){
    if(arr.indexOf(rand) === -1){
      arr[i] = rand;
      i++;
    }
    test(i,arr);
  }else{
    console.log(arr);
    return
  }
}
test(0,new Array(5));