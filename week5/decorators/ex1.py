# Exercise #1 : Timer Decorator
from functools import wraps
from datetime import timedelta
import time


def time_to_exe(func):
    @wraps(func)
    def inner(number):
        start_time = time.monotonic()
        func(number)
        end_time = time.monotonic()
        print('function runtime: ' + str(timedelta(end_time - start_time)))
    return inner


@time_to_exe
def sum_many(number):
    return sum(range(0, number))


@time_to_exe
def sum_many_more(number):
    return sum(range(0, number))


sum1 = sum_many(100000)
sum2 = sum_many_more(5000000)
