from http.client import HTTPException
import statistics
from urllib.request import Request
from fastapi.security.utils import get_authorization_scheme_param


async def get_current_user(request: Request):
    header_authorization: str = request.headers.get("Authorization")
    cookie_authorization: str = request.cookies.get("Authorization")

    header_scheme, header_param = get_authorization_scheme_param(header_authorization)
    cookie_scheme, cookie_param = get_authorization_scheme_param(cookie_authorization)

    if header_scheme.lower() == "bearer":
        authorization = True
        scheme = header_scheme
        param = header_param

    elif cookie_scheme.lower() == "bearer":
        authorization = True
        scheme = cookie_scheme
        param = cookie_param

    else:
        authorization = False

    if not authorization or scheme.lower() != "bearer":
        raise HTTPException(
            status_code=statistics.HTTP_403_FORBIDDEN, detail="Not authenticated"
        )
   