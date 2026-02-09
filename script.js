
/// the board without the answer
   
let board =[
    [5,7,2,9,1,0,0,0,0],
    [0,6,0,0,0,0,9,0,5],
    [9,0,4,0,5,8,0,0,0],

    [0,0,0,7,6,2,5,9,8],
    [0,0,8,5,4,0,3,2,6],
    [0,2,0,8,0,9,1,4,7],

    [2,0,6,0,7,5,0,1,9],
    [3,8,0,1,9,6,4,5,0],
    [1,5,9,2,8,0,7,0,3],
];
// the answer

let answer = [
    [5,7,2,9,1,3,6,8,4],
    [8,6,1,4,2,7,9,3,5],
    [9,3,4,6,5,8,2,7,1],

    [4,1,3,7,6,2,5,9,8],
    [7,9,8,5,4,1,3,2,6],
    [6,2,5,8,3,9,1,4,7],

    [2,4,6,3,7,5,8,1,9],
    [3,8,7,1,9,6,4,5,2], 
    [1,5,9,2,8,4,7,6,3]

];

cardss  =[1,2,3,4,5,6,7,8,9]

let squ = document.getElementById('squ')
let card = document.querySelector('.card');
let sq = document.querySelector('.sq');
let c = document.querySelectorAll('.c');
const h1 = document.querySelector('#h1')



for (let i=1; i<9; i++){
    for (let j=1; j<9; j++){
         sq.textContent = board[i][j];

    }}


    /* c.onclick = function(){
    num = sq.value;
        sq.textContent = num}

 */


for (let i=0; i<9; i++){
    for (let j=0; j<9; j++){


        if (board[i][j]===0) {
            sq.onclick = function(){
                // choose the number from card  

             let cards = c.value;
             return;

        }
    }
    else { 
        sq.innerHTML = board[i][j];
        }
}}
  
 
// see if ..true 

for (let i=0; i<9; i++){
    for (let j=0; j<9; j++){

if (board[i][j]=== answer[i][j]){
      return
}
else {
    h1.innerHTML= 'wrong';
}
    }}

