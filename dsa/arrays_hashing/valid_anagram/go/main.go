package main

func IsValidAnagram(s string, t string) bool {
	if len(s) != len(t) {
		return false
	}

	sMap := map[rune]int{}

	for _, value := range s {
		sMap[value] += 1
	}

	for _, tValue := range t {
		value, ok := sMap[tValue]
		if !ok || value == 0 {
			return false
		}
		sMap[tValue] -= 1
	}

	return true
}
