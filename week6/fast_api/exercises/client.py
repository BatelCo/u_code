# client.py (the client file that sends requests to the server)

import requests


class Client:
    def __init__(self, money):
        self.money = money

    def get_furniture_price(self, furniture_name):
        res = requests.get(
            'http://localhost:3000/store/{}'.format(furniture_name))
        return (res.json())

    def buy_furniture(self, furniture_name):
        res = requests.get(
            'http://localhost:3000/buy/{}'.format(furniture_name))
        name = res.json()["name"]
        price = res.json()["price"]
        inventory = res.json()["inventory"]
        print(f"Congratulations, you've just bought {name} for {price}. There are {inventory} left now in the store.")


client = Client(200)

def get_item_by_user():# ex3
    print('Enter furniture name:')
    furniture_name = input()
    print(client.get_furniture_price(furniture_name))

def user_buy():  # ex5 +  Extension 1
    print('What furniture do you want to buy?')
    furniture_name = input()
    furniture_price = client.get_furniture_price(furniture_name)["price"]
    if (client.money >= furniture_price):
        client.buy_furniture(furniture_name)
        client.money = client.money - furniture_price
    else:
        print("you should get a job")

get_item_by_user()
user_buy()
