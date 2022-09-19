# client.py (the client file that sends requests to the server)

import requests

# ex3


def get_furniture_price(furniture_name):
    res = requests.get(
        'http://localhost:3000/store/{}'.format(furniture_name))
    print(res.json())


print('Enter furniture name:')
furniture_name = input()
get_furniture_price(furniture_name)

# ex5


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
buy_furniture(furniture_name)
