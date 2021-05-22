/*Implement a method to perform a basic string compresion using the counts of repeated characters.
For example,
"aaabcccccaaa" =>"a3b1c5a3"
"abcd" => "abcd"
........ALGORITHM................
1. We need a count variable to keep track of each character(count = 1);
1b. we also need another count variable for cases when each charcter is unique
2.loop(
    - if(arr[i]===arr[i+1]),count++;
    - else output: a[i]+count ; count = 1
    - uniqueCount++;
    - increment i 
)
3. if totalcount = str.length then return str
*/

//There are two type of scope in Javascript-Global scope and function scope.Parent scope is accessible to child scope .But child scope is not accessible to parent scope.
const stringCompression = (str) => {
        let count = 1;
        let result = "";
        let uniqueCount=0;
        let i;
        for(i=0;i<str.length-1;i++){
            if(str[i]===str[i+1]){
                count++;
            }
            else{
                result += str[i]+count;
                count = 1;
                uniqueCount++;
            }
        }
        result += str[i]+count;
        uniqueCount++;
        if(uniqueCount===str.length){
            return str;
        }else{
        return result;
        }
}

console.log({
    "aaabcccccaaa":stringCompression("aabcccccaaa"),
    "abcd":stringCompression("abcd")
});