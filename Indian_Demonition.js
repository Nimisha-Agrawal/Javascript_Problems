let obj = {};
const divide_into_Indian_Rupees_Categories = (amt,obj) => {
        const arr = [2000,500,200,100,50,20,10,2,1];

        for(let i of arr){
            if(amt>=i){
                obj[i] = parseInt(amt/i);
                amt = amt%i;
            }
            if(amt===0){
                //console.log(arr.indexOf(i));
                break;
            }
        }
            return obj;
}
console.log(divide_into_Indian_Rupees_Categories(2000,obj));

// Alternative Solution - 1

// let isMatchingBrackets = function (str) {
//     let stack = [];
//     let map = {
//         '(': ')',
//         '[': ']',
//         '{': '}'
//     }

//     for (let i = 0; i < str.length; i++) {

//         // If character is an opening brace add it to a stack
//         if (str[i] === '(' || str[i] === '{' || str[i] === '[' ) {
//             stack.push(str[i]);
//         }
//         //  If that character is a closing brace, pop from the stack, which will also reduce the length of the stack each time a closing bracket is encountered.
//         else {
//             let last = stack.pop();

//             //If the popped element from the stack, which is the last opening brace doesn’t match the corresponding closing brace in the map, then return false
//             if (str[i] !== map[last]) {return false};
//         }
//     }
//     // By the completion of the for loop after checking all the brackets of the str, at the end, if the stack is not empty then fail
//         if (stack.length !== 0) {return false};

//     return true;
// }

// console.log(isMatchingBrackets("(){}")); // returns true
// console.log(isMatchingBrackets("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]")); // returns true
// console.log(isMatchingBrackets("({(()))}}"));  // returns false

//Alternative Solution - 2

// let isParenthesisMatching = (str) => {
//     let stack = [];

//     let open = {
//         '{': '}',
//         '[': ']',
//         '(': ')'
//     };

//     let closed = {
//         '}': true,
//         ']': true,
//         ')': true
//     }

//     for (let i = 0; i < str.length; i++) {

//         let char = str[i];

//         if (open[char]) {
//             stack.push(char);
//         } else if (closed[char]) {
//             if (open[stack.pop()] !== char) return false;
//         }
//     }
//     return stack.length === 0;
// }

// And then below is a much more beautiful and shorter solution using Array.reduce() method.

// let isBalancedParenthesis = (str) => {
    
//     return !str.split('').reduce((uptoPrevChar, thisChar) => {
//         if(thisChar === '(' || thisChar === '{' || thisChar === '[' ) {
//             return ++uptoPrevChar;
//         } else if (thisChar === ')' || thisChar === '}' || thisChar === ']') {
//             return --uptoPrevChar;
//         }

//         return uptoPrevChar
//     }, 0);
// }

// // Test Cases
// console.log(isBalancedParenthesis("[()]{}{[()()]()}"));  // returns true
// console.log(isBalancedParenthesis("[{()()}({[]})]({}[({})])((((((()[])){}))[]{{{({({({{{{{{}}}}}})})})}}}))[][][]"));  // returns true
// console.log(isBalancedParenthesis("({(()))}}"));  // returns false

// And another variation of the above solution using the beauties of ES6.

// function isBalanced([...str]) {return str.reduce((uptoPrevChar, thisChar) => {
//     ((thisChar === '(' && uptoPrevChar++ || thisChar === ')' && uptoPrevChar--)) &&
//     ((thisChar === '{' && uptoPrevChar++ || thisChar === '}' && uptoPrevChar--)) &&
//     ((thisChar === '[' && uptoPrevChar++ || thisChar === ']' && uptoPrevChar--));

//     return uptoPrevChar;
// }, 0) === 0 }
