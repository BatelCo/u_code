# Exercise: Caesar cipher

def encode(msg, n):
    return "".join(chr(ord(c)+n) if (65 <= ord(c)+n <= 90) else chr(ord(c)-26+n) for c in msg)


print(encode("ABXYZ", 3))   # "DEABC"


def decode(msg, n):
    return "".join(chr(ord(c)-n) if (65 <= ord(c)-n <= 90) else chr(ord(c)-n+26) for c in msg)


print(decode("DEABC", 3))    # "ABXYZ"
