# Exercise #2 : Print Function Information
from functools import wraps


# print args
def print_info(func):
    @wraps(func)
    def inner(*args, **kwargs):
        print(f'func name:{func.__name__}')
        print(f'args: {args}')
        print(f'kwargs: {kwargs}')
        return_val = func(*args, **kwargs)
        return_type = type(return_val)
        print(f'return value: {return_val}')
        print(f'return type: {return_type}')
    return inner


@print_info
def add(*args, **kwargs):
    return sum(args)


add(1, 2, age=3, text="hello")
