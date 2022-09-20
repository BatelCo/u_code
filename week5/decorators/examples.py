from functools import wraps


def my_decorator(some_func):
    @wraps(some_func)
    def wrapper():
        print("1. before executing some_func()")
        some_func()  # here we execute the function
        print("2. after executing some_func()")
    return wrapper


@my_decorator
def just_print():
    print("** some function that uses the decorator")


just_print()
print(just_print.__name__)
print()


# print args
def print_args(func):
    @wraps(func)
    def inner(*args, **kwargs):
        print("args: ", end=" ")
        for x in args:
            print(x, end=" ")
        print()
        res = func(*args, **kwargs)
        print(res)
        return res
    return inner


@print_args
def add2(x, y):
    return x+y


@print_args
def add3(x, y, z):
    return x+y+z


@print_args
def add4(w, x, y, z):
    return w+x+y+z


add2(1, 2)
add3(1, 2, 3)
add4(1, 2, 2, 4)

# print(add2(1, 2))
