let boxes=document.querySelectorAll(".box");
let turnO=true;

const winPatter=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(turnO){
            box.classList.add("colO");
            box.classList.remove("colX");
            box.innerText="O";
            turnO=false;
        }else{
            box.classList.add("colX");
            box.classList.remove("colO");
            box.innerText="X"
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    })
})



const checkWinner= () =>{
    for(let pattern of winPatter){
        let pos1=boxes[pattern[0]].innerText;
        let pos2=boxes[pattern[1]].innerText;
        let pos3=boxes[pattern[2]].innerText;
        
        if(pos1!="" && pos2!="" && pos3!=""){
            if(pos1===pos2 && pos2===pos3){
                winner(pos1);
                disable();
            }
        }
    }
}

let disable=()=>{
    boxes.forEach((box)=>{
        box.disabled=true;
    });
}

let wnr=document.querySelector(".game-winner");
let winner=(pos1)=>{
    wnr.innerText=`Congratulation ${pos1} you are winner`;
    wnr.classList.remove("hide");
}

let reset=document.querySelector(".reset");
reset.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
        wnr.classList.add("hide");
    });
})

let newGame=document.querySelector(".new-game");
newGame.addEventListener("click",()=>{
    boxes.forEach((box)=>{
        box.innerText="";
        box.disabled=false;
        wnr.classList.add("hide");
    });
})