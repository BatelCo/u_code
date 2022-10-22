import pymysql

# Ex1
# # create DB
# connection = pymysql.connect(
#     host="localhost",
#     user="root",
#     password="",
# )

# connection.cursor().execute('create database grocery_store')

connection = pymysql.connect(
    host="localhost",
    user="root",
    password="",
    db="grocery_store",
    charset="utf8",
    cursorclass=pymysql.cursors.DictCursor,
)
if connection.open:
    print("the connection is opened")
    
# categories
# try:
#     with connection.cursor() as cursor:
#         query = 'CREATE TABLE categories(name VARCHAR(20) NOT NULL PRIMARY KEY);'
#         cursor.execute(query)
#         connection.commit()
# except:
#     print("DB Error")

# add categories to category table 
# try:
#     with connection.cursor() as cursor:
#         query = '''
#         INSERT INTO categories VALUES
#         ('Vegtables'),
#         ('Drinks'),
#         ('Meat'),
#         ('Snacks')
#         '''
#         cursor.execute(query)
#         connection.commit()
# except:
#     print("DB Error")

# try:
#     with connection.cursor() as cursor:
#         query = '''
#             CREATE TABLE products(
#             id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
#             name VARCHAR(22),
#             price INT,
#             category VARCHAR(22),
#             FOREIGN KEY(category) REFERENCES categories(name));
#             '''
#         cursor.execute(query)
#         connection.commit()
# except:
#     print("DB Error")

# try:
#     with connection.cursor() as cursor:
#         query = '''
#         INSERT INTO products VALUES
#         (null, 'Tomato', 3, 'Vegtables'),
#         (null, 'Beer', 8, 'Drinks'),
#         (null, 'Water', 5, 'Meat'),
#         (null, 'Burger', 20, 'Meat'),
#         (null, 'Chips', 3, 'Snacks'),
#         (null, 'Doritos', 5, 'Snacks');
#         '''
#         cursor.execute(query)
#         connection.commit()
# except:
#     print("DB Error")


# ex2
def ex2(category_name):
    try:
        with connection.cursor() as cursor:
            
            query = f'''
            SELECT * FROM products WHERE category = "{category_name}"
            '''
            cursor.execute(query)
            results = cursor.fetchall()
            connection.commit()
            return results
    except:
        print("DB Error")

print(ex2("Meat"))
