package main

import "fmt"

type Primes struct {
	prime_count int
	primes      [25000]int
}

func (p *Primes) getPrimeCount() int { return p.prime_count }
func (p *Primes) getPrime(i int) int { return p.primes[i] }
func (p *Primes) addPrime(i int) {
	p.primes[p.prime_count] = i
	p.prime_count = p.prime_count + 1
}
func (p *Primes) isDivisibe(i int, by int) bool { return (i % by) == 0 }
func (p *Primes) isPrimeDivisible(candidate int) bool {
	for i := 1; i < p.prime_count; i++ {
		if p.isDivisibe(candidate, p.primes[i]) {
			return true
		}
	}

	return false
}

func main() {
	p := &Primes{}
	c := 1
	for p.getPrimeCount() < 25000 {
		if !p.isPrimeDivisible(c) {
			p.addPrime(c)
		}
		c++
	}
	fmt.Println(p.getPrime(p.getPrimeCount() - 1))
}
