//create objet map
const getObj = (str) => {
    let obj = {};
    for(let i of str){
        (!obj[i])?obj[i]=1:obj[i]++;
    }
    return obj;
}

const palindromePermutation = (str) => {
    //remove white spaces between string
    //str = str.replace(/ +/g,"");
    //get obj
    const obj = getObj(str);
    console.log(obj);
    //check if odd
    if(str.length % 2===1){
        //return false if more than one odd number character count
        let counter = 0;
        for(let i of str){
            if(obj[i]%2===1){
                counter++;
            }
            if(counter>1){
                return false;
            }
        }
    }
    else{
        // if length of string is even
        for(let i of str){
            // return false if any one character count is not even
            if((obj[i]%2) !== 0){
                return false;
            }
        }
    }
    return true;
}

console.log({
    palindromePermutation : palindromePermutation("TPOPTO") //true -> TOPPOT ot OTPPTO or POTTOP etc....hence all permutations of given string are palindrome.String = "hannah" will also return true
    //palindromePermutation : palindromePermutation("PUIPIP") //false -> PIUPIP -> this permutation of string is not palindrome hence false
})

// obj = {
//     t:2,
//     a:2,
//     c:2,
//     o:1
// }