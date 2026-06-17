from typing import List


def SumNums(nums: List[int]):
    sum = 0
    for n in nums:
        sum += n
    return sum

print(SumNums([1,2,3,4,5]))