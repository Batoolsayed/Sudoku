
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
    [1,5,9,2,8,0,7,0,3]
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

const cardBtn  = [1,2,3,4,5,6,7,8,9]

let squ = document.getElementById('squ')
let card = document.querySelector('.card');
let sq = document.querySelectorAll('.sq');
let c = document.querySelectorAll('.c');
const h1 = document.querySelector('#h1')

let index=0;

let n = null;
let select =-1;


for (let i=0; i<9; i++){
    for (let j=0; j<9; j++){
        if(board[i][j]!==0){
sq[index].textContent = board[i][j];}
index ++;
    }};



for (let i=0; i < sq.length ;i++){
    sq[i].addEventListener('click', function(){
            
        if(sq[i].textContent !=='') return ;

            n=sq[i];
            select=i;
            h1.textContent='';
});

}



let row,col;

for(let i=0; i < c.length; i++){
    c[i].addEventListener('click', function(){
            if(select == null ) return;

              row = Math.floor(select / 9);
              col= select % 9;

        if(c[i].textContent== answer[row][col]){
            select.textContent = c[i].textContent;
            h1.textContent='correct';
        }
         else {
            select.textContent='';
            h1.textContent='wrong';
         }

        });}

  

