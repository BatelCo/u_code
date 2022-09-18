# Exercise #3 : Slow Down
from functools import wraps
import time


# print args
def slow_one_sec(func):
    @wraps(func)
    def inner():
        time.sleep(1)
        func()
    return inner


@slow_one_sec
def return_three():
    return 3


return_three()
