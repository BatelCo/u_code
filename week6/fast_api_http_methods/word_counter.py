from unittest.util import sorted_list_difference
from xml.dom import NotFoundErr
from fastapi import FastAPI
import uvicorn
from fastapi import Request
from fastapi import status, Response
from data import word_counter
import re
import operator

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

# extension 1
def ignore_special_chars(word):
    return "".join(re.findall(r"[a-z]", word))

def update_word_counter(word):
    clean_word = ignore_special_chars(word.lower())
    if clean_word in word_counter:
        word_counter[clean_word] += 1
    else:
        word_counter[clean_word] = 1 

# ex3 + ex4
# http://localhost:8000/add?sentence=orya nir batel
@app.post('/add' , status_code=201)
async def add_word(word=None, sentence=None):
    if word is not None:
        update_word_counter(word)
        return{"text": f"Added {word}", "currentCount": word_counter[word] }
    if sentence is not None:
        words = sentence.split()
        num_old_words = len(word_counter)
        for word in words:
            update_word_counter(word)
        words_num_after_apdate = len(word_counter)
        added_word_number = words_num_after_apdate - num_old_words
        alredy_exist = len(words) - added_word_number 
        return {"text": f"Added {added_word_number} words, {alredy_exist} already existed"}

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

# extension 2
@app.get('/mostPopular')
def most_popular_word():
    max_word = max(word_counter, key=word_counter.get)
    word_value = max(word_counter.values())
    return{"text":max_word, "count":word_value }

# extension 3
@app.get('/topFive')
def top_five_popular():
    top_five_popular = (sorted(word_counter.items(), key=operator.itemgetter(1),reverse=True))[:5]
    print(top_five_popular)
    return {"ranking" : top_five_popular}

# extension 4
@app.get('/totalCount')
def total_count():
        return{"text":"Total count", "count": sum(word_counter.values()) }


if __name__ == "__main__":
    uvicorn.run("word_counter:app", host="0.0.0.0", port=8000, reload=True)