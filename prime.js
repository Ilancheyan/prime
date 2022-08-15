// Finding the Largest Prime Factor between 1 an 20
// Prime Numbers are: 2, 3, 5, 7, 11, 13, 17, 
// Largest Prime Factor for 15 = 5

function isPrime(num) {
    
    for (let i = 1; i < num; i++) {

        if (num % i === 0) {
            console.log(i)
       } 
    }   

}

isPrime(20)
