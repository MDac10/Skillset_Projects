from collections import Counter

def CharacterFrequency(string: str):
    dict = {}
    for char in string:
        dict[char] = dict.get(char,0) + 1
    return dict

print(CharacterFrequency("boot"))

def CharacterFrequency2(string: str):
    return Counter(string)

print(CharacterFrequency2("boots"))