import requests
from fastapi.responses import FileResponse
import uvicorn
from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

app = FastAPI()


print("server")


# server code...

if __name__ == "__main__":
    uvicorn.run("server:app", host="127.0.0.1", port=8000, reload=True)


# @app.get("/")
# async def root():
#     return {"message": "Hello World"}


# @app.get('/')
# def root():
#     return {"message": "Someone has made a request and accessed the server. Exciting!"}
app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get('/')
def root():
    return FileResponse('./static/photo.jpg')


@app.get('/maps')
def maps():
    return "Here's some stuff related to maps"


@app.get('/shoobi')
def shoobi():
    return "This here is the shoobi *route*"


@app.get("/landing/{username}")
async def greet_user(username):
    return {"message": "Hi there {}".format(username)}


@app.get("/optionalParameters/")
async def query_params(name):
    return {"message": "Hi there {}".format(name)}


@app.get("/book/{name}")
async def get_book(name):
    res = requests.get(
        'https://www.googleapis.com/books/v1/volumes?q={}'.format(name))
    return res.json()
