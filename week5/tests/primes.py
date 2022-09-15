from primePy import primes


class Primes:
    def is_prime(self, number):
        return primes.check(number)

    def are_prime_numbers(self, *args):
        ans = [False for a in args if not self.is_prime(a)]
        return True if len(ans) == 0 else False
