from math import expm1


fruits_tuple = ("apple", "orange", "banana")
print(fruits_tuple)
# output: ('apple', 'orange', 'banana')

mixed_tuple = (0, "apple", 3.4)
print(mixed_tuple)
# output: (0, 'apple', 3.4)

# tuple with one value
num_tuple = (10,)
print(num_tuple)  # (10,)

# This is aslo tuple with one value
num_tuple = 10,
print(num_tuple)  # (10,)

# This is a string, NOT a tuple.
not_tuple = ('apple')
print(not_tuple)  # apple

# This is an int, NOT a tuple.
not_tuple2 = (10)
print(not_tuple2)  # 10

empty_tuple = ()
print(empty_tuple)  # ()

my_tuple = ('a', 'b', 'c', 'd')
print(my_tuple[0])  # output:'a'
print(my_tuple[3])  # output:'d'
# print(my_tuple[4])  # IndexError: tuple index out of range
print(my_tuple[-1])  # output:'d'

nested_tuple = ("shoobert", [10, 20, 30], (0, 2.0, 3.5))

# nested index
print(nested_tuple[0][5])  # output: 'e'
print(nested_tuple[1][1])  # output: 20

my_tuple = ("aaa", "bbb", "ccc", "ddd")

# Accessing elements 2nd and 4th
print(my_tuple[1:4])  # print places 1 2 3 output: ('bbb', 'ccc', 'ddd')
print(my_tuple[-3:-1])  # print places -3 -2 output: ('bbb', 'ccc')

my_tuple = ("aaa", "bbb", "ccc", "ddd", "eee", "fff", "ggg")

# Accessing elements 2nd and 4th [start:stop:step]
print(my_tuple[2:4:2])  # output: ('ccc',)

str = "batelcohen"
print(str[:5])  # from 0 to 5 not include 5
# defualt : start = 0 stop = len(str), the length of the string, step = 1
print(str[::])
print(str[1:])

num_tuple = (0, 1, 2, 3, 4, 5, 6, 7, 8, 9)
print(num_tuple[::2])

# Tuples are immutable
my_tuple = ("aaa", "bbb", "ccc", "ddd")
# my_tuple[1] = "eee" # TypeError: 'tuple' object does not support item assignment

numbers1 = (1, 2, 3)
numbers2 = (4, 5, 6)

total = numbers1 + numbers2
print(total)  # output: (1, 2, 3, 4, 5, 6)

tup = (1, 2, 3, 4)
tup_no_parentheses = 1, 2, 3, 4
empty_tuple = tuple()
empty_tuple = tuple([1, 5, 3])


# ex1
my_tuple = ("hi", 1, {1, 3}, [1, 2], 3.2, True, None, bytes(1))
print(my_tuple)

# ex2
print(my_tuple[3])
print(my_tuple[-4])

# ex3
days = ("Sunday", "Monday", "Tuesday", "Wednesday",
        "Thursday", "Friday", "Saturday")

print(days[2])
days = [day for day in days if day != "Tuesday"]
print(days)

# ex4
numbers = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10)

print(reversed(numbers))  # returns an iterator

print(numbers[::-1])  # returns a new reversed tuple


# ex5
# (1,2,3) => (3,2)
# (2,4,6,8,10,12) => (12,10,8,6,4)
def reverseWithoutFirst(tup):
    return (tup[:0:-1])


print(reverseWithoutFirst((1, 2, 3)))
print(reverseWithoutFirst((2, 4, 6, 8, 10, 12)))


# (1,2,3) => (2, 1)
# (2,4,6,8,10,12) => (10, 8, 6, 4, 2)
def reverseWithoutLast(tup):
    return (tup[-2::-1])


print(reverseWithoutLast((1, 2, 3)))
print(reverseWithoutLast((2, 4, 6, 8, 10, 12)))
