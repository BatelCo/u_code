def get_word_value(word):
    # sum = 0
    # for c in word:
    #     sum += (ord(c)-96)
    # return sum
    return sum((ord(c)-96) for c in word)


print(get_word_value("day"))    # 4 + 1 + 25 = 30
