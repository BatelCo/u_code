my_list = ['I', 2, 'Love', 4, 56, 'Coding', 'Python', 'in', [8, 9, 10]]


def test_number():
    # assert 3 in my_list  # Should assert if number 3 is in my_list
    assert 56 in my_list  # Should assert if number 56 is in my_list


def test_str():
    sub_list = ['I', 'Love', 'Coding']
    # Should assert if "I", "Love" and "Coding" are in my_list
    assert all(item in my_list for item in sub_list)


def test_upper_str():

    # Should assert if all the strings in my_list are in upper case﻿
    assert 0 == len([item for item in my_list if (
        isinstance(item, str) and not item.isupper())])


def test_negative():
    # Should assert if number 6 is no﻿t in﻿ my_list - result should be true
    assert not 6 in my_list
