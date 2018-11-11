function Primes() {
  this.prime_count = 0
  this.primes = new Array(25000)
  this.getPrimeCount = () => this.prime_count
  this.getPrime = i => this.primes[i]
  this.addPrime = i => (this.primes[this.prime_count++] = i)
  this.isPrimeDivisible = candidate => {
    for (let i = 1; i < this.prime_count; ++i) {
      if (candidate % this.primes[i] == 0) {
        return true
      }
    }
    return false
  }
}

function main() {
  p = new Primes()
  let c = 1
  while (p.getPrimeCount() < 25000) {
    if (!p.isPrimeDivisible(c)) {
      p.addPrime(c)
    }
    c++
  }
  console.log(p.getPrime(p.getPrimeCount() - 1))
}

main()
