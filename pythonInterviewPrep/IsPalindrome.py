def IsPalindrome(string: str):
    return string == string[::-1]

def IsPalindrome2(string: str):
    rev = []
    
    for i in range(len(string) - 1, -1, -1):
        rev.append(string[i])
        
    reversed = ''.join(rev)
        
    return string == reversed

print(IsPalindrome("validity"))
print(IsPalindrome("xorox"))

print(IsPalindrome2("validity2"))
print(IsPalindrome2("racecar"))


