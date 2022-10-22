import pymysql 
connection = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    db="jobs",
    charset="utf8",
    cursorclass=pymysql.cursors.DictCursor
)
if connection.open:
    print("the connection is opened")


# try:
#     with connection.cursor() as cursor:
#         query = 'INSERT into company (name,industry, employees) values ("Wix", "hi tech", 4000)'
#         cursor.execute(query)
#         connection.commit()
# except:
#     print("Error")

try:
    with connection.cursor() as cursor:
        query = "SELECT name FROM company"
        cursor.execute(query)
        result = cursor.fetchall()
        for company in result:
            print(company["name"])
except:
    print("DB Error")

