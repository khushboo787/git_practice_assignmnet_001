function checkPrime(num){
  let count_factor =0;
    for(let i=1;i<=num;i++){
       if(num%i==0){
         count_factor++;
        }
    }
     if(count_factor==2){
    console.log(num, "is a prime number");
    }else{
    console.log(num, "is not a prime number");
    }
}
checkPrime(17);