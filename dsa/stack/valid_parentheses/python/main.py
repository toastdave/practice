def main(s: str) -> bool:
    if len(s) % 2 != 0: 
        return False

    stack = []
    hashmap = {'}':'{', ')':'(', ']': '['}

    for c in s:
        if c in hashmap:
            if stack and stack[-1] == hashmap[c]:
                stack.pop()
            else:
                return False
        else:
            stack.append(c)
    
    return True if not stack else False




if __name__ == "__main__":
    main("()")
