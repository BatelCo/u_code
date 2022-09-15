evens = {2, 44, 24, 62, 78}

s = set()

print(type(s))
print(s)

s = {3, "Yossi", False, (1,), None}
s = set([4, 3, 2, 1])
print(s)


s = set("Tomorrow never dies")
print(s)

s = {3, 6, 'bibi', ('Simon', 'Garfunkel')}
s.add(5)
print(s)

s.update([11, 22], (55,), ('mimi',))
print(s)

s.discard("22")
print(s)

# s.remove('25')
print(s)

s = {5, 6, 7, 8, 9}
s.pop()
print(s)

'T' in s

print(s)
s.clear()
print(s)

# union
s1 = {1, 3, 5}
s2 = {2, 4}


s1.union(s2)  # {1,3,5,2,4}

s1 | s2  # bitwise operation => {1,3,5,2,4}


s1 = {1, 2, 5}
s2 = {2, 4, 1}

s1.intersection(s2)  # {1,2}

s1 & s2  # {1,2}

s1 = {1, 2, 5}
s2 = {2, 4, 1}

s1 - s2  # {5}
s1.difference(s2)  # {5}

s2.difference(s1)  # {4}

s1.difference([6, 7, 5])

# symetricdif
s1 = {1, 2, 5}
s2 = {2, 4, 1}
print(s1 ^ s2)  # {4,5}

s1.symmetric_difference(s2)


(s1 | s2 - (s1 & s2))


s1 = {1, 2, 3, 4}
s2 = {1, 5, 6, 7}
s3 = {5, 6, 7, 8}

# if totally different return true
print(s1.isdisjoint(s2))
print(s1.isdisjoint(s3))
print(s2.isdisjoint(s3))


s1 = {'a', 'b', 'c', 'd'}
s2 = {'a', 'b', 'c'}
s3 = {'a', 'b', 'e'}
s4 = {'a', 'b', 'c', 'd'}
s5 = set()
# returns True if the set in use (perfectly) contains another set:
print(s1.issuperset(s2))
print(s1.issuperset(s3))
print(s1.issuperset(s4))
print(s1.issuperset(s5))

# returns True if the set in use is contained by another set:

s2.issubset(s1)

lst = [1, 1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 8, 9, 10]
#  all elements in lst
print(set(lst))

# As they are immutable, they do not have add(), update() and remove() methods:
fs = frozenset((1, 2, 3, 4))
print(fs)
print(type(fs))

fs = frozenset([1, 2, 3, 4])
print(fs)

set_ = {1, 2}
frozenset_ = frozenset((1, 3, 4))


dictionary = {}
dictionary[frozenset_] = 1  # valid
# dictionary[set_] = 1  # throws Error
