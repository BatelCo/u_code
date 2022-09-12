ord('C')  # 67
print(ord('C'))
res = ""

for c in "abc":
    code = ord(c)
    incremented_code = code + 1
    incremented_char = chr(incremented_code)
    res += incremented_char

print(res)

print("".join([chr(ord(c)+1) for c in "abc"]))


def print_unicode_table(start, end):
    for i in range(start, end + 1):
        print(f"{i}: {chr(i)}")


print_unicode_table(200, 205)

print("This is a new\n dawn")

print(r"This is a new\n dawn")

byte_string = b'ABC'
for x in byte_string:
    print(x)

print()
print(bytes([65, 66, 67]))  # ABC
print(b'ABC'.hex())  # 414243

print("ABC".encode('ascii'))
print("ABC".encode('utf-8'))

# convert each character to the character after it
for b in "ABC".encode("ascii"):
    print(b)

# for b in "ABC😂".encode("ascii"):
#     print(b)

print("ABC😂".encode('utf-8'))
