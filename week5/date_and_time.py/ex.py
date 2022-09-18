from datetime import datetime

# ex1
print(datetime.today())
# Output: 2020-01-12 10:40:38.367704

# ex2
print("ex2")
print(datetime.today().strftime("time: %H:%M:%S"))
print(datetime.today().strftime("current1: %m/%d/%Y, %H:%M:%S"))
print(datetime.today().strftime("current1: %d/%m/%Y, %H:%M:%S"))

# ex3
print(datetime.today().strftime("current year is: %Y"))
print(datetime.today().strftime("current day is: %A"))

# extension
bday = input("enter your bday in this format DD-MM-YYYY: ")
date_format = "%d-%m-%Y"
birthday_datetime = datetime.strptime(bday, date_format)
today = datetime.today()
print("Your age is:", today.year - birthday_datetime.year)
next_birthday = birthday_datetime.replace(year=today.year)

if next_birthday < today:
    next_birthday = birthday_datetime.replace(year=today.year + 1)
    time_until_next_birthday = next_birthday - today
    print("The time until the next birthday is:", time_until_next_birthday)
