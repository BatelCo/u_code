# ex1 - is palindrom
def is_palindrom(str):
    return str == str[::-1]


print(is_palindrom("dood"))
print(is_palindrom("dodo"))

# ex2 - Reverse Words in a Sentence

def reverse_words(sentence):
    return " ".join(word[::-1] for word in sentence.split())


print(reverse_words("hello world"))

# ex3 - Swap Two Variables

def swap_two_vars(first_var, second_var):
    return second_var, first_var


print(swap_two_vars(1, 2))

# ex4 - sum even items

def sum_even_items(given_list):
    return sum(item for item in given_list if item % 2 == 0)


print(sum_even_items([1, 3, 4, 5, 6]))


# ex5 - Duplicate a list

def list_duplicate(given_list):
    return given_list + given_list


print(list_duplicate([1, 2, 3]))

# ex6 - Change Spaces

def change_space(str):
    return str.replace(" ", "@")

print(change_space("na na na na na"))

# ex7 - Number of spaces
def spaces_number(str):
    return str.count(" ")

print(spaces_number("v v v v"))


# ex8 - Number of all spaces
def all_spaces_num(str):
        return str.count(" ")+str.count('\n')+str.count('\t')

print(all_spaces_num("Here is\na new line"))

# ex9 Largest Lexicographically
def largest_lexi(str):
    return max((str.replace("."," ").split()))

print(largest_lexi("Imagination is .more important than knowledge."))


# ex10 Longest Word
def lenght_of_longest(str):
    return len(max(str.split() , key=len))

print(lenght_of_longest("If you can't explain it simply you don't understand it well enough." ))

# ex11 reverse string
def reverse_string(str):
    return str[::-1]

print(reverse_string("batel"))

# ex12 Reverse Word Order
def reverse_word_order(str):
    return " ".join(str.split()[::-1])

print(reverse_word_order("hello dear world"))

# extension 1: Factorial
import math

def factorial(num):
    return math.prod([i for i in range(1,num+1)])

print(factorial(6))

# extension 2: Fibonacci
def fibonacci(num):
    return 1 if num<=2 else fibonacci(num-1) + fibonacci(num-2)

print(fibonacci(6))

# extension 3: Remove Duplicates
def remove_duplicates(item_list):
    return list(set(item_list))

print(remove_duplicates([1,2,1,3,3,2,2]))