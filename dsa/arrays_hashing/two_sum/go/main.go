package main

func TwoSum(nums []int, target int) []int {
	prevMap := make(map[int]int)

	for i, value := range nums {
		diff := target - value

		if j, found := prevMap[diff]; found {
			return []int{i, j}
		}

		prevMap[value] = i
	}

	return []int{}
}
