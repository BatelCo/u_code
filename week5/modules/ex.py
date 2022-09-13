# ex1

import calendar
print(calendar.isleap(2010))
print(calendar.isleap(2020))
print(sum(1 if calendar.isleap(year) else 0 for year in range(2020, 2080)))
print(calendar.weekday(2028, 3, 14))

# ex2

# module1.py


def func1():
    pass


def func2():
    pass


_num = 42

#   - utils
#     - module1.py
#     - math_utils
#       - f1.py
#       - f2.py
#       - f3.py
#     - string_utils
#       - s1.py
#       - s2.py


# If the module utils.math_utils.f1 wants to import the module f2 located in the same directory,
# which import statement should it include?

# from . import f2

# If the module module1 wants to import the module s1 located in string_utils package,
# which import statement it should include?

# from .string_utils import s1
