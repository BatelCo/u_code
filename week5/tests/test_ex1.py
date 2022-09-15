import pytest


def fibonacci(n):

    # Check if input is 0 then it will
    # print incorrect input
    if n < 0:
        print("Incorrect input")

    # Check if n is 0
    # then it will return 0
    elif n == 0:
        return 0

    # Check if n is 1,2
    # it will return 1
    elif n == 1 or n == 2:
        return 1

    else:
        return fibonacci(n-1) + fibonacci(n-2)


@pytest.mark.parametrize("index, fib_num", [(2, 1), (5, 4)])
def test_fib(index, fib_num):
    assert fibonacci(index) == fib_num


def test_sum(num1, num2, num3):
    assert num1 + num2 == num3, "Got error in test_sum!"
