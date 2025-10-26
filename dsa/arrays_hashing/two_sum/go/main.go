package main

func TwoSum(nums []int, target int) []int {
	for i, iValue := range nums {
		for j := i + 1; j < len(nums); j++ {
			if iValue+nums[j] == target {
				return []int{i, j}
			}
		}
	}
	return []int{}
}
