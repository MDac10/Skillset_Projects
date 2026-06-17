def WordFrequency(string: str):
    dict = {}
    for word in string.split():
        dict[word] = dict.get(word,0) + 1
    return dict

print(WordFrequency("hello world hello"))