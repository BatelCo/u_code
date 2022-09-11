BIG_COUNTRY = 50

country_populations = {
    "country": {
        "Ghana":  28,
        "Brazil": 209,
        "Mongolia": 3
    }
}

country = "Mongolia"
print(country, "is a big country") if country_populations["country"][country] >= BIG_COUNTRY else print(
    country, "is a small country")
