from ast import List, Tuple
from socketserver import BaseServer
from typing import Union
from urllib.request import Request
from fastapi.security import HTTPBasic, HTTPBasicCredentials
from fastapi import Depends, FastAPI
from starlette.authentication import requires
from fastapi_auth_middleware import AuthMiddleware, FastAPIUser
import uvicorn
app = FastAPI()

# Takes a string that will look like 'Bearer eyJhbGc...'
def verify_authorization_header(auth_header: str) -> Tuple[List[str], BaseServer]: # Returns a Tuple of a List of scopes (string) and a BaseUser
    user = FastAPIUser(first_name="Code", last_name="Specialist", user_id=1)  # Usually you would decode the JWT here and verify its signature to extract the 'sub'
    scopes = []  # You could for instance use the scopes provided in the JWT or request them by looking up the scopes with the 'sub' somewhere
    return scopes, user

app.add_middleware(AuthMiddleware, verify_header=verify_authorization_header)
security = HTTPBasic()

@app.get("/profile")
async def main(credentials: HTTPBasicCredentials = Depends(security)):
    return {"name": "John Smith"}

async def common_parameters(q: Union[str, None] = None, skip: int = 0, limit: int = 100):
    return {"q": q, "skip": skip, "limit": limit}

@app.get("/items")
async def read_items(commons: dict = Depends(common_parameters)):
    return commons

@app.get("/users")
async def read_items(commons: dict = Depends(common_parameters)):
    return commons

@app.get('/home')  # Sample endpoint (secured)
@requires("admin")  # Requires the role 'admin' (Will succeed)
def home(request: Request):
    return request.user



if __name__ == "__main__":
    uvicorn.run("server:app", host="127.0.0.1", port=8000, log_level="info", reload=True)