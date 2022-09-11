state = "France"

heads_of_states = {
    "Italy": {
        "president": "Sergio Mattarella",
        "prime minister": "Giuseppe Conte"
    },
    "India": {
        "president": "Ram Nath Kovind",
        "prime minister": "Narendra Modi"
    },
    "France": {
        "president": "Emmanuel Macron",
        "prime minister": "Edouard Philippe"
    }
}
state_name = "India"
state = heads_of_states[state_name]
state_pres = state["president"]
state_prime_minister = state["prime minister"]
print(
    f"The president of {state_name} is {state_pres} and the prime minister is {state_prime_minister}")
