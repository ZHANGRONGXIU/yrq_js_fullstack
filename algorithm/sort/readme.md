# 算法题排序有几个必考题

- 桶排序
    时间复杂度 循环开销
    一重循环   M 代表最大值 99 100 
    又一重循环 N
    又一次循环 M 循环 有值得桶子
        嵌套循环 >= 0 1 2 3  有限的， <N
        多层循环是最花时间的 M+N
    O(M+N+M+N) = O(2*(M+N)) = O(M+N) 乘法系数2可以省略
    缺点： 占物理内存，因为要分配M个元素的数组 
- 冒泡排序
- 快排

35 99 18 76 12

排序？  [100] for 老数组 将数字放在相应的位置  => 桶排序