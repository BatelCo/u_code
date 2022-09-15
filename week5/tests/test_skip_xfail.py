import pytest


@pytest.mark.skip
def test_sum1():
    assert 1 + 2 == 3


def test_sum2():
    assert 1 + 2 == 4

# test to be executed but not to be count as part of the failed or passed tests we can use xfail marker by adding @pytest.mark.xfail.


@pytest.mark.xfail
def test_sum3():
    assert 10 + 20 == 31
