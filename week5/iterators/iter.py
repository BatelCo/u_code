numbers = [11, 3, 64, 17, 94]


def find_index(items, item):
    for number in items:
        if number == item:
            return number


def find_index(items, item):
    for index, value in enumerate(items):
        if value == item:
            return index
        return -1


numbers = [11, 3, 64, 17, 94]
for i, v in enumerate(numbers, 100):
    print(i, v)


# lists
for num in [1, 2, 3]:
    print(num)

# tuples
for num in (1, 2, 3):
    print(num)

# strings
for char in "wonders":
    print(char)

# dictionaries:
for key in {"name": "momo", "age": 33}:
    print(key)

string_iterator = iter("Python is great")
list_iterator = iter([2, 4, 6])

string_iterator = iter("Python")

print(next(string_iterator))
print(next(string_iterator))
print(next(string_iterator))
print(next(string_iterator))
print(next(string_iterator))
print(next(string_iterator))
print(next(string_iterator, None))

list_iterator = iter([])
# next(list_iterator)  # throws StopIteration exception

try:
    print(next(list_iterator))
except StopIteration as e:
    print("no more items")

numbers = [10, 12, 15, 18, 20]
fruits = ("apple", "pineapple", "blueberry")
message = "I love Python"
print(iter(numbers))
print(iter(fruits))
print(iter(message))

numbers = [10, 12, 15, 18, 20]
iterator = iter(numbers)
print(next(iterator))
print(next(iterator))
print(next(iterator))
print(next(iterator))
print(next(iterator))

# incorrect implementation becwase return self its update self


class PrintNumbers:
    def __init__(self, size):
        self.max = size

    def __iter__(self):
        self.numbers = list(range(self.max + 1))
        self.counter = 0
        return self

    def __next__(self):
        if self.counter >= self.max:
            raise StopIteration

        self.counter += 1
        return self.numbers[self.counter]


iterable = PrintNumbers(3)
for num in iterable:
    print(num)

# generator - generate the next value only when I ask(when i do next)
# save memory. generator is iterator
# yield - return i and remember where the function was


def plus1(stop):
    for i in range(stop):
        yield i


for x in plus1(4):
    print(x)


def my_gen():
    n = 1
    print('This is printed in the first call')
    yield n
    n += 1
    print('This is printed second')
    yield n
    n += 1
    print('This is printed at last')
    yield n


iter_gen = my_gen()

# next(iter_gen)
# next(iter_gen)
# next(iter_gen)
# next(iter_gen)


def reverse(iterable):
    length = len(iterable)
    for i in range(length - 1, -1, -1):
        yield iterable[i]    # For loop to print the reversed string


for item in reverse("hello"):
    print(item)


for item in reverse(["Eric", 1985, ["Dan", "James", "Anna"]]):
    print(item)

list_comprehension = [x for x in range(20)]
print(list_comprehension)
print(type(list_comprehension))

#  a generator expression will return an iterator (that returns items one by one).
gen = (x for x in range(20))
print(gen)
print(type(gen))

# The following example can generate all the even numbers


def all_even():
    n = 0
    while True:
        yield n
        n += 2
