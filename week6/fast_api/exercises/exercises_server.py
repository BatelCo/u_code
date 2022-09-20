#  exercises_server.py (the server)

import uvicorn
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from store import store

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

@app.get("/")
async def root():
    return {"message": "Hello from exercises"}

@app.get('/sanity')
def sanity():
    return "Server is up and running smoothly"

@ app.get("/store/{item_name}")
async def get_item_price(item_name):
    # for item in store:
    #     if (item["name"] == item_name):
    #         return ({"price": item["price"]})
    # return {"price": None}
    item_name_price = [{"price": item["price"]} for item in store if item["name"] == item_name]
    return item_name_price[0] if (len(item_name_price) > 0) else {"price": None}

@ app.get("/buy/{furniture_name}")
async def reduce_inventory(furniture_name):
    for item in store:
        if item["name"] == furniture_name:
            item["inventory"] = item["inventory"] - 1
            return item

@ app.get("/sale") # http://localhost:3000/sale?is_admin=true
async def sale(is_admin):
    if (bool(is_admin)):
        for item in store:
            item["price"] = item["price"] * 0.5 if item["inventory"] > 10 else item["price"]
    return store

if __name__ == "__main__":
    uvicorn.run("exercises_server:app", host="127.0.0.1", port=3000, reload=True)
