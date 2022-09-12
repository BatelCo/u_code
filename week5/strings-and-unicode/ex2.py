def encode(msg):
    return " ".join(str(ord(c)) for c in msg)


print(encode("Hello"))    # "72 101 108 108 111"


def decode(msg):
    # arr = msg.split()
    # str = ""
    # for x in arr:
    #     str += chr(int(x))
    # return str

    return "".join(chr(int(x)) for x in msg.split())


print(decode("72 101 108 108 111"))   # "Hello"
print(decode(encode("Hello")))        # "Hello"
