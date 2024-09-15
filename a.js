let gameseq=[]; // game ka maintain krega
let userseq=[]; // ye user ka maintain krega
let head1=document.querySelector('h2');
let level=0;
let started=false;
let btns=["yellow","red","blue","green"];
// ye game start krne ko
document.addEventListener('keypress',function(){
    if(level==0){
        started=true;
        levelup();
    }
    
})

// ye level up krne ko
function levelup(){
    level++;
    userseq=[];
    head1.innerText=`Level ${level}` ;
   
    let randmindx=Math.floor(Math.random()*4); // ye 1 no. mil gya b/w 0 and 3
    let randmcolor=btns[randmindx]; // ye color pr pahunch gye array k ab uski class pr pahunchna h
    let rdmbtn=document.querySelector(`.${randmcolor}`); // sbki class, color k according hi h
    
    // neeche alert working check k liye tha
    // alert(randmindx);
    // alert(randmcolor);
    // alert(rdmbtn);
    gameseq.push(randmcolor); // yha store krate jha rhe h sequences ko
    // alert(gameseq);
    gameflash(rdmbtn);
}

// ye btn flash k liye function ki wo kya krega level up pr 
function gameflash(btn){
    btn.classList.add("flash"); // isse add hp gyi
    setTimeout(function(){
        btn.classList.remove("flash");
    },100);
}

// ye jb user click kre to flash kesa hona chahiye
function userflash(btn){
    btn.classList.add("userflash"); // isse add ho gyi
    setTimeout(function(){
        btn.classList.remove("userflash");
    },100);
}
// saare btn ko access kro
let allbtns=document.querySelectorAll(".box");
for(btn of allbtns){
    btn.addEventListener("click",btnpress);
}

// btn press krne pr kya hona chahiye
function btnpress(){
    if(started==true){
        userflash(this); // jiske liye call aayi h vhi press hoga
        // alert(btn);

        let clrpress=this.getAttribute("id");
        // alert(clrpress); check tha bs
        userseq.push(clrpress);
        check(userseq.length-1); // isse har baar jo element enter krenge vhi check 
                                 // hoga corresponding game sequence wale  se
    }
    else{
        alert("The Game is not Started Yet");
    }
   
}
function check(idx){
    if(userseq[idx]==gameseq[idx]){
        if(idx==gameseq.length-1){
            setTimeout(levelup,500); // press hone k thode tym baad to click ho level up ho jaae agr last sequence h
        }
    }
    else{
        let bg=document.querySelector('body');
        bg.style.backgroundColor='rgba(246, 30, 30, 0.753)';
        setTimeout(function(){
            bg.style.backgroundColor='#381937';
        },100)
        let score=(level-1)*10;
        head1.innerHTML=`Game Over! <br><br> <b>Your Score is ${score}</b> <br><br>Press any key to Restart the Game `;
        reset();
    }
}

function reset(){
    started=false;
    level=0;
    gameseq=[];
    userseq=[];
}