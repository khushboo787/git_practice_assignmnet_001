function checkPalindrome(string){
    let bag="";
    for(let i=string.length-1;i>=0;i--){
        bag+=string[i];
    }
    if(string===bag){
        console.log("Palindrome");
    }else{
        console.log("Not palindrome");
    }
}
checkPalindrome("naman");
