
def ReverseString(string: str):
    return string[::-1]

print(ReverseString("Hello World"))


def ReverseString2(string: str):
    reversedString = []
    
    for i in range(len(string)-1, -1, -1):
        reversedString.append(string[i])
        
    return ''.join(reversedString)

print(ReverseString2("Reverse Me"))