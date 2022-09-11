from collections import Counter

line = "wee wee goo koo goo doo doo so go go yo yo yo yo fo zo"


def five_high_freq(text):
    line = text.split()
    return Counter(line).most_common(5)


line = "wee wee goo koo goo doo doo so go go yo yo yo yo fo zo"
print(five_high_freq(line))


# from collections import defaultdict
# def get_5common(line):
#     words_counter = defaultdict(int) # using the default of the type(int) which is 0

#     for word in line.split():
#         words_counter[word] += 1
#     pair_array = [(k,v) for k,v in words_counter.items()]
#     most_common_words = sorted(pair_array, reverse=True, key=lambda pair: pair[1])
#     return most_common_words[:5]

# line = "wee wee goo koo goo doo doo so go go yo yo yo yo fo zo"
# print(get_5common(line))


# 15. Extension - Dictionary Challenge

LONG_LENGTH = 15


def is_palindrome(text):
    return text == text[::-1]


def is_lower(text):
    return text.islower()


def is_digits(text):
    return text.isdigit()


def is_long(text):
    return len(text) > LONG_LENGTH


def is_empty(text):
    return not text


def exit_program(text=None):
    print("Exit successfully")
    exit(0)


def starts_with_a(x):
    return x.startswith("a")


operations = {
    "1": {
        "text": "Palindrome: Check if the input is palindrome",
        "func": is_palindrome
    },
    "2": {
        "text": "Lower: Check if all characters in the input are lowercase",
        "func": is_lower
    },
    "3": {
        "text": "Digit: Check if all characters in the input are digits",
        "func": is_digits
    },
    "4": {
        "text": f"Long: Check if the input length is longer than {LONG_LENGTH}",
        "func": is_long
    },
    "5": {
        "text": "Empty: Check if the input is empty",
        "func": is_empty
    },
    "6": {
        "text": "Exit: Exit successfully from the application",
        "func": exit_program
    }
}


def print_menu(operations):
    print("The available operations are:")
    for operation_id, operation in operations.items():
        operation_text = operation.get("text")
        print(operation_id, "-", operation_text)


def start_app():
    while True:
        print_menu(operations)
        user_operation = input(
            "Please enter the number of the operation you choose: ")
        user_input = input("Enter an input: ")
        operation_object = operations.get(user_operation)
        if operation_object:
            operation_func = operation_object.get("func")
            result = operation_func(user_input)
            print("The answer is: ", result)
        else:
            print("Wrong operation, try again")


start_app()
