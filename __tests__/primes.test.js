// nodejs don't love es6 module
function Primes(i) {
    this.prime_count = 0
    this.primes = new Array(i)
    this.getPrimeCount = () => this.prime_count
    this.getPrime = i => this.primes[i]
    this.addPrime = i => (this.primes[this.prime_count++] = i)
    this.isPrimeDivisible = candidate => {
        for (let i = 1; i < this.prime_count; ++i) {
            console.log(i);
            if (candidate % this.primes[i] === 0) {
                return true
            }
        }
        return false
    }
}

test("valid primes", () => {
    const num = 5
    const p = new Primes(num)
    let c = 1
    while (p.getPrimeCount() < num) {
        if (!p.isPrimeDivisible(c)) {
            p.addPrime(c)
        }
        c++
    }
    expect(p.primes).toEqual([1, 2, 3, 5, 7])
})
