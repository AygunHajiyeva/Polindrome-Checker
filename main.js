function palindrome(str) {
    str = str.replace(/\W+|_/g, "");
  

  
    let newString = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }

     if (str !== newString) {
        return false;
    }
  return true
}

palindrome("eye");