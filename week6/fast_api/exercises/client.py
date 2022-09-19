# client.py (the client file that sends requests to the server)

import requests

# ex3


def get_furniture_price(furniture_name):
    res = requests.get(
        'http://localhost:3000/store/{}'.format(furniture_name))
    return (res.json())


print('Enter furniture name:')
furniture_name = input()
print(get_furniture_price(furniture_name))

# ex5 +  Extension 1
money = 200


def buy_furniture(furniture_name):
    res = requests.get(
        'http://localhost:3000/buy/{}'.format(furniture_name))
    name = res.json()["name"]
    price = res.json()["price"]
    inventory = res.json()["inventory"]
    print(
        f"Congratulations, you've just bought {name} for {price}. There are {inventory} left now in the store.")


print('What furniture do you want to buy?')
furniture_name = input()
furniture_price = get_furniture_price(furniture_name)["price"]
if (money >= furniture_price):
    buy_furniture(furniture_name)
    money = money - furniture_price
else:
    print("you should get a job")
