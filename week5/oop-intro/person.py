class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age

    def introduce(self):
        print("Hi there, I am " + self.name)


p1 = Person("Jezrien", 102)
p2 = Person("Tal", 96)
p1.introduce()  # outputs: Hi there, I am Jezerien
p2.introduce()  # outputs: Hi there, I am Tal
p3 = Person()
