#  exercises_server.py (the server)

import uvicorn
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from store import store

app = FastAPI()


print("server")

if __name__ == "__main__":
    uvicorn.run("exercises_server:app", host="127.0.0.1", port=3000, reload=True)


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
    item_name_price = [{"price": item["price"]} for item in store if item["name"] == name]
    return item_name_price[0] if (len(item_name_price) > 0) else {"price": None}


# ex4
@ app.get("/buy/{furniture_name}")
async def reduce_inventory(furniture_name):
    for item in store:
        if item["name"] == furniture_name:
            item["inventory"] = item["inventory"] - 1
            return item


# http://localhost:3000/sale?is_admin=true
# ex6
@ app.get("/sale")
async def sale(is_admin):
    if (bool(is_admin)):
        for item in store:
            item["price"] = item["price"] * \
                0.5 if item["inventory"] > 10 else item["price"]
    return store
