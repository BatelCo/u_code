def to_upper(char):
    if (97 <= ord(char) <= 122):
        return chr(ord(char)-32)
    return char


print(to_upper("d"))    # "D"
print(to_upper("Q"))    # "Q" (no change)
print(to_upper("!"))    # "!" (no change)


def upper(s):
    upper_str = ""
    for c in s:
        upper_str += to_upper(c)
    return upper_str


print(upper("I love Python!"))    # "I LOVE PYTHON!"
