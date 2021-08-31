function sumPrimes(num) {

//creating variable to store the sum result
let result = 0;

//function to check if a number is prime 
function checkPrime(i){
  //For each iteration of k, we want to check whether i is divisible by k. If it is, it is not a prime number, so it returns false.
  for (var k = 2; k < i ; k++){ //
    if (i % k === 0){
      return false;
      }
    }
 //If the loop completes, the number must be a prime, and we can return a result of true.
    return true;
  }
 
 
//iterating over each number less or equal than num to find each primes and sum them into the result variable
 for (var i = 2; i <= num; i++){
  if (checkPrime(i)){
   result += i;
   }
  }

  return result;
}


sumPrimes(10);
