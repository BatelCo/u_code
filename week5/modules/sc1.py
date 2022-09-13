import sys
import math

print(math.floor(-5.3))

print(math.ceil(math.tan(16.8)))


def get_regular_polygon_area(num_of_sides, length_of_side):
    return (num_of_sides * (length_of_side ** 2)) / (4 * math.tan(math.pi / num_of_sides))


print(get_regular_polygon_area(15, 2.5))


print(sys.builtin_module_names)


print(sys.path)
