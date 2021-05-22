function check_balanced_parenthesis(string){
    const arr = string.split('');
    let result = [];
    let index = 0;
    result.push(arr[0]);    
    for(var i=1;i<arr.length;i++){
        switch(arr[i]){
            case '[':
            case '{':
            case '(':
                result.push(arr[i]);
                index++;
                break;
            case ']': if(result[index]=='['){
                        result.pop();
                        index--;
            }
            else{
                i=arr.length;
            }
            break;
            case '}': if(result[index]=='{'){
                result.pop();
                index--;}
                else{
                    i=arr.length;
                }
                break;
            case ')': if(result[index]=='('){
                result.pop();
                index--;
            }
            else{
                i=arr.length;
            }
            break;     
    }
}
//console.log(result);
//console.log(index);
if(result.length != 0){
    return 'unbalanced'
}
else{
    return 'balanced'
}
}
    
//const string = '[{([{()}])}]';
//const string ='[]'
//const string = '[]()'
//const string = '[{}{]'
//const string = '[}{]'
//const string = '[{'
//const string  = '}]'
const string = '[{}]'
console.log(`${string} is ${check_balanced_parenthesis(string)}`);
