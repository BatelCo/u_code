import string


class YouTubeLessonManager:
    def __init__(self):
        self.lessons = {}

    def changeStr(self, lesName):
        return lesName.lower().replace(" ", "").translate(str.maketrans('', '', string.punctuation))

    def save(self, name, url):
        urlParts = url.split('=')
        self.lessons[self.changeStr(name)] = urlParts[1]

    def get(self, lessonName):
        list = []
        for key, value in self.lessons.items():
            if (key.find(self.changeStr(lessonName)) != -1):
                list.append(f"https://www.youtube.com/watch?v={value}")
        return list[0] if len(list) == 1 else list

    def getCount(self):
        self.count


# ex1
lesson_manager = YouTubeLessonManager()
print(lesson_manager.lessons)


# lesson_manager = YouTubeLessonManager()
lesson_manager.save("For-Loops", "https://www.youtube.com/watch?v=OnDr4J2UXSA")
lesson_manager.save(
    "While-Loops", "https://www.youtube.com/watch?v=6TEGxJXLAWQ")
lesson_manager.save("Functions", "https://www.youtube.com/watch?v=NSbOtYzIQI0")
lesson_manager.save(
    "Dictionaries", "https://www.youtube.com/watch?v=ZEZdys-fHDw")
print(lesson_manager.lessons)


# ex2
# lesson_manager = YouTubeLessonManager()
# lesson_manager.save("For-Loops", "https://www.youtube.com/watch?v=OnDr4J2UXSA")

# # outputs: {"For-Loops": "https://www.youtube.com/watch?v=OnDr4J2UXSA"}
# print(lesson_manager.lessons)

# # outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'

# print(lesson_manager.lessons["For-Loops"])


# ex3
# outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
print("ex3:")
print(lesson_manager.get("For-Loops"))


# ex4
print("ex4:")
# outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
print(lesson_manager.get("for-loops"))
# outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
print(lesson_manager.get("fOr-LooPS"))

# ex5
print("ex5:")
# outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
print(lesson_manager.get("for-loops"))
# outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
print(lesson_manager.get("for loops"))

# ex6
print("ex6:")
# outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
print(lesson_manager.get("for loops"))
# outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
print(lesson_manager.get("for"))
# outputs ['https://www.youtube.com/watch?v=OnDr4J2UXSA', 'https://www.youtube.com/watch?v=6TEGxJXLAWQ']
print(lesson_manager.get("loops"))

# extension 1
print("extension 1:")
lesson_manager.save("For-Loops", "https://www.youtube.com/watch?v=OnDr4J2UXSA")
# outputs: 'https://www.youtube.com/watch?v=OnDr4J2UXSA'
print(lesson_manager.get("For-Loops"))

# # extension 2
# print("extension 2:")

# lesson_manager.get("For-Loops")
# lesson_manager.get("For-Loops")
# lesson_manager.get("Dictionaries")
# lesson_manager.get("For-Loops")
# lesson_manager.get("Dictionaries")
# print(lesson_manager.get_counts('For-Loops'))  # outputs: 3
# print(lesson_manager.get_counts('Dictionaries'))  # outputs: 2

# # extension 3
# print("extension 3:")
