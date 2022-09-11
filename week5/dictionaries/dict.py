print("Hello World")

favorite_city = "Edoras"
number_of_people = 4000

info = {
    "city": favorite_city,
    "population": number_of_people
}

# The above is exactly equivalent to:
info = {
    "city": "Edoras",
    "population": 4000
}

print(info)

student1 = "Vivian"
student2 = "Leeroy"
student3 = "Wayne"

student_statuses = {
    student1: True,
    student2: False,
    student3: False
}

print(student_statuses)
# outputs: {'Vivian': True, 'Leeroy': False, 'Wayne': False}

user = {
    "name": "Karolin",
    "username": "ksmart3",
    "age": 27,
    "has_purchased": False
}

print(user["name"] + " is " + str(user["age"]) + " years old.")
# outputs: Karolin is 27 years old.

generated_password = user["name"] + "_" + user["username"]
print(generated_password)  # outputs Karolin_ksmart3

student = {

    "name": "koko",
    "age": 42
}


print(student.get("name"))

print(student.get("address"))  # None
# print(student["address"]) # throws KeyError: 'address'

score = student.get("score", 0)  # score = 0
print(score)

fridge = {
    "milk": 1,
    "bananas": 4,
    "juice": 2
}


milk_amnt = fridge.get("milk")

print(f"There are {milk_amnt} bottles of milk left")

x = "1"
print(f"hi {x}")

if fridge["milk"] == 1:
    print("There is one bottle of milk left")
else:
    print("There are " + str(fridge["milk"]) + " bottles of milk left")


exam_scores = {}

exam_scores["Nick"] = 82
exam_scores["Andrew"] = 85
exam_scores["Jessi"] = 91
exam_scores["Missy"] = 96

print(exam_scores)

exam_scores["Missy"] += 3
exam_scores["Andrew"] = 87
print(exam_scores)

values_to_add = {"1": 'complete number', "0.5": 'half', "0.25": 'quarter'}
numbers = {'pi': 3.14159265359, 'phi': 1.6180339887, "1": 'complete'}


numbers.update(values_to_add)
print(numbers)

metrics = {
    "ram": {
        "size": 4,
        "status": "OK"
    },
    "disk": {
        "size": 512,
        "type": "SSD"
    }
}
print(metrics["ram"]["status"])  # outputs: OK

# now `ram` is a dict with two keys: size and status
ram = metrics["ram"]
print(ram["status"])  # accessing a dict's key normally

closet = {
    "shirts": {
        "blue": 4,
        "black": 1,
        "white": 13,
        "flamingo-pink": 2
    },
    "pants": {
        "shorts": {
            "purple": 1,
            "red": 2,
            "flamingo-pink": 3
        },
        "jeans": {
            "denim": 8,
            "organic": 1
        }
    },
    "jackets": {}
}

shirts = closet["shirts"]
print(shirts["white"])
pants = closet["pants"]
shorts = pants["shorts"]
print(shorts["flamingo-pink"])
jeans = pants["jeans"]
jeans["organic"] = 7
print(jeans["organic"])
jeans["denim"] -= 4
print(jeans["denim"])


pink_shorts = closet["pants"]["shorts"]["flamingo-pink"]
pink_shirts = closet["shirts"]["flamingo-pink"]

if pink_shirts > pink_shorts:
    print("top")
else:
    print("bottom")


data = {
    "a": 1,
    "b": 2,
    "c": 3
}

other_data = data
other_data["d"] = 4

print(data)  # outputs a dict with keys a, b, c, and d
print(other_data)  # outputs the same dict!

student = {
    "name": "koko",
    "age": 42,
    "level": "A"
}

deleted = student.pop("level")
print(deleted)

student = {
    "name": "koko",
    "age": 42
}


# deleted = student.pop("hobies")
# Throws Error

student = {
    "name": "koko",
    "age": 42,
    "level": "A"
}

del student["level"]
print(student)

person = {
    "name": "koko",
    "age": 17,
    "is vegan": True
}


for key in person:
    print(key)

print(person.keys())

for value in person.values():
    print(value)

for key, value in person.items():
    print(key, value)

nums = [2, 4, 6]
numbers = {str(value): value for value in nums}
print(numbers)

names = ["koko", "momo", "bobo"]
result = {"name" + str(i): v for i, v in enumerate(names)}
print(result)

names = ["koko", "mimi", "bobo", "fifi"]
{"n" + str(i): names[i] for i in range(len(names)) if names[i][1] == "i"}


# {'n1': 'mimi', 'n3': 'fifi'}

def get_squares_dictionary(number):
    return {x: x**2 for x in range(1, number + 1)}


print(get_squares_dictionary(5))
