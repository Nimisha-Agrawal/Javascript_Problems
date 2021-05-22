/*
    *ZERO MATRIX
    *Write an algorithm suh that if an element in an N*N matrix is 0,its entire row and colun are set to 0.
*/
/*
example 1
4 1 3       4 1 0
2 -4 0 =    0 0 0
5 9 2       5 9 0
example 2
5 2 0     0 0 0
[9 0 1] = 0 0 0
2 9 3     2 0 0

.............Algorithm O(n^3).................
* find the element and mark it
* find the row and col numbers
* make zero 0<row-i<n
* make zero 0<col-i<n
*/
const _matrix = [[4,1,3],[2,-4,0],[5,9,2]];

/*
------------O(n^3)----------------
*/
const zeroMatrix = (matrix,n)=>{
    // mark the positions
    for(let r=0;r<n;r++){
        for(let c=0;c<n;c++){
            if(matrix[r][c]===0)
            matrix[r][c] = true;
        }
    }
// find the locations and zero
for(let r=0;r<n;r++)
{
    for(let c=0;c<n;c++){
        if(matrix[r][c]===true){
            //zero row
            for(let i=0;i<n;i++){
                matrix[r][i] = 0;
            }
            // zero the col
            for(let i=0;i<n;i++)
            matrix[i][c] = 0;
        }
    }
}
return matrix;
}

console.log(zeroMatrix(_matrix,3))
