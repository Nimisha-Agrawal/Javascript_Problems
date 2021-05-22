// There are three types of edits that can be performed on a String
//     - insert a character
//     - remove a character and
//     - replace a character
// Given two strings, write a method to determine if they are one edit away from each other
//     (pale,ple) -> true -> insert 'a'
//     (pales,pale) -> true -> insert's'
//     (pale,kale) -> true-> replace 'p' with 'k'
//     (pale,pales) -> true -> remove 's'
//     (pale,bake) -> replace 'p' with 'b' and 'l' with 'k'
//Solution steps ->
/*
1. If strings are identical - then return false - zero edit
2. create character maps of both strings
3. check if each character are of same type and value.
    if they are not, increase the counter.
    if the counter is 2 or more. then return false.
4. return true.
*/
const charMap=(str)=>{
    let obj = {};
    for(let i of str){
        (!obj[i])?obj[i] = 1:obj[i]++;
    }
    return obj;
}

const oneAway = (str1, str2) => {
    if(str1===str2) return false;
    const obj1 = charMap(str1);
    const obj2 = charMap(str2);
    let counter = 0;
    for(let i in obj1){
        if(obj1[i]!==obj2[i]){
            counter++;
        }
        if(counter>=2){
            return false;
        }
    }
    return true;
}

//console.log({oneAway:oneAway("pale","ple")});
//console.log({oneAway:oneAway("pale","bake")});
