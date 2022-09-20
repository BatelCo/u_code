from xml.dom import NotFoundErr
from fastapi import FastAPI
import uvicorn
from fastapi import Request
from fastapi import status, Response
from data import word_counter
import re

app = FastAPI()

# ex1
@app.get('/sanity')
def sanity():
    return {"message":"Server is up and running"}

# ex2
@app.get('/get/{word}')
def get_word_count(word):
    value = word_counter.get(word, None)
    if value is not None:
        return {"count": value}
    return {"count" : 0}

# extention
def update_word_counter(word):
    
    ignore_case_word = word.lower()

    if ignore_case_word in word_counter:
        word_counter[ignore_case_word] += 1
    else:
        word_counter[ignore_case_word] = 1 

# ex3 + ex4
# http://localhost:8000/add?sentence=orya nir batel
@app.post('/add' , status_code=201)
async def add_word(word=None, sentence=None):
    if word is not None:
        update_word_counter(word)
        return{"text": f"Added {word}", "currentCount": word_counter[word] }
    if sentence is not None:
        words = sentence.split()
        numOldWords = len(word_counter)
        for word in words:
            update_word_counter(word)
        numNewWords = len(word_counter)
        return {"text": f"Added {numNewWords-numOldWords} words, {numOldWords} already existed"}

# ex5
@app.delete('/delete/{word}' )
async def delete_word(word, response: Response):
    try:
        deleted_word_value = word_counter[word]
        del word_counter[word]
        print(word_counter)
        return {"text": f"{word}: {deleted_word_value}  is deleted"}
    except KeyError:
        response.status_code = status.HTTP_404_NOT_FOUND
        return {"text": f"{word} is not a key"}



if __name__ == "__main__":
    uvicorn.run("word_counter:app", host="0.0.0.0", port=8000, reload=True)