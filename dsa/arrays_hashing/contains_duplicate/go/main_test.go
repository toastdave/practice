package main

import (
	"testing"
)

func TestNoDupe(t *testing.T) {
	nums := []int{1, 2, 3, 4, 5, 6}
	hasDupe := ContainsDuplicate(nums)
	if hasDupe {
		t.Errorf("boooo")
	}
}

func TestHasDupe(t *testing.T) {
	nums := []int{1, 1, 2, 2, 3, 3}
	hasDupe := ContainsDuplicate(nums)
	if !hasDupe {
		t.Errorf("boooo")
	}
}
