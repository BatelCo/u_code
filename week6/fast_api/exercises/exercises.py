#  exercises.py (the server)

import requests
from fastapi.responses import FileResponse
import uvicorn
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from store import store

app = FastAPI()


print("server")

if __name__ == "__main__":
    uvicorn.run("exercises:app", host="127.0.0.1", port=3000, reload=True)


@app.get("/")
async def root():
    return {"message": "Hello from exercises"}

#  ex1 part A


@app.get('/sanity')
def sanity():
    return "Server is up and running smoothly"


# ex1 part B
app.mount("/static", StaticFiles(directory="static"), name="static")

# ex2


@ app.get("/store/{name}")
async def get_item_price(name):
    # for item in store:
    #     if (item["name"] == name):
    #         print(item)
    #         price = item["price"]
    #         return ({"price": price})
    # return {"price": None}
    item_name_price = [{"price": item["price"]}
                       for item in store if item["name"] == name]
    return item_name_price[0] if (len(item_name_price) > 0) else {"price": None}


# ex4
@ app.get("/buy/{name}")
async def reduce_inventory(name):
    for item in store:
        if item["name"] == name:
            item["inventory"] = item["inventory"] - 1
            return item


# http://localhost:3000/sale/?is_admin=true
# ex6
@ app.get("/sale/")
async def sale(is_admin):
    if (is_admin == "true"):
        for item in store:
            if item["inventory"] > 10:
                item["price"] = item["price"]*0.5
    return store
