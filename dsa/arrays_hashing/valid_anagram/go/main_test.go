package main

import (
	"testing"
)

func TestShortAnagram(t *testing.T) {
	one := "bat"
	two := "tab"
	isAnagram := IsValidAnagram(one, two)
	if !isAnagram {
		t.Error()
	}
}

func TestLongAnagram(t *testing.T) {
	one := "aaaannnnnttttt"
	two := "nnnnnaaaattttt"
	isAnagram := IsValidAnagram(one, two)
	if !isAnagram {
		t.Error()
	}
}

func TestNotAnagram(t *testing.T) {
	one := "tar"
	two := "dog"
	isAnagram := IsValidAnagram(one, two)
	if isAnagram {
		t.Error()
	}
}

func TestDifferentLength(t *testing.T) {
	one := "bat"
	two := "taby"
	isAnagram := IsValidAnagram(one, two)
	if isAnagram {
		t.Error()
	}
}
