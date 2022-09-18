# Exercise #4 : Number of calls to a func
from functools import wraps


# print args
def counted(func):
    @wraps(func)
    def inner(*args, **kwargs):
        inner.calls += 1
        return func(*args, **kwargs)
    inner.calls = 0
    return inner


@counted
def return_none():
    return None


time_of_calls = 8
for i in range(time_of_calls):
    return_none()

print(return_none.calls)
