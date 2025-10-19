package main

func ContainsDuplicate(nums []int) bool {
	distinct_map := make(map[int]int)

	for _, value := range nums {

		if _, ok := distinct_map[value]; ok {
			return true
		}

		distinct_map[value] = 1
	}

	return false
}
