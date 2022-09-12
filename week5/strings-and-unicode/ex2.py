def encode(msg):
    return " ".join(str(ord(c)) for c in msg)


print(encode("Hello"))    # "72 101 108 108 111"


def decode(msg):
    arr = msg.split()
    str = ""
    for x in arr:

    return "".join(str(ord(c)) for c in msg)


print(decode("72 101 108 108 111"))   # "Hello"
print(decode(encode("Hello")))        # "Hello"
