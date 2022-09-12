# Convert string-number to int
from cmath import nan


def string_number_to_int(numInStr):
    num = 0
    # sapperate the string so char arr
    arr = [*numInStr]
    for i, s in enumerate(arr):
        if ord("0") <= ord(s) <= ord("9"):
            num += (ord(s) - ord("0")) * (10 ** (len(arr)-i-1))
        else:
            return nan
        return num


print(string_number_to_int("10"))       # output: 10
print(string_number_to_int("123"))      # output: 123
print(string_number_to_int("99"))       # output: 99
print(string_number_to_int("ABC"))
print(ord("0"))
