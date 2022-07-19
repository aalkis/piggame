'use strict';

let curscore1 = 0;
let curscore2 = 0;
let totalscore1 = 0;
let totalscore2 = 0;
var rollresult = 0;

function roll(){
    var randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}

function btn_rolling(){
    rollresult = roll();
    var check = document.getElementById('turnleft').textContent;
    diceimg();
    if (rollresult === 1)
    {
        if (check.includes("playing")){
            swaptoright()
        }
        else{
            swaptoleft()
        }
    }
    else if (check.includes("playing")){
        curscore1 = curscore1 + rollresult
        document.getElementById('curr_scoreleft').textContent = curscore1; 
    }
    else{
        curscore2 = curscore2 + rollresult
        document.getElementById('curr_scoreright').textContent = curscore2; 
    }
}
function btn_holding(){
    var check = document.getElementById('turnleft').textContent;
    if(check.includes("playing")){
        totalscore1 = totalscore1 + curscore1;
        swaptoright();
        document.getElementById('scoreleft').textContent = totalscore1; 
        winnercheck();
    }
    else{
        totalscore2 = totalscore2 + curscore2;
        swaptoleft();
        document.getElementById('scoreright').textContent = totalscore2;  
        winnercheck();   
    }
}
function diceimg(){
    switch (rollresult){
        case 1:
            document.getElementById('id_img').src = "dice-1.png";
            break;
        case 2:
            document.getElementById('id_img').src = "dice-2.png";
            break;
        case 3:
            document.getElementById('id_img').src = "dice-3.png";
            break;
        case 4:
            document.getElementById('id_img').src = "dice-4.png";
            break;
        case 5:
            document.getElementById('id_img').src = "dice-5.png";
            break;
        case 6:
            document.getElementById('id_img').src = "dice-6.png";
            break;
    }
}
function swaptoright(){
    document.getElementById('turnleft').textContent = 'Is waiting'
    document.getElementById('turnright').textContent = 'Is playing'
    document.getElementById('id_leftside').style.borderColor = 'white'
    document.getElementById('id_rightside').style.borderColor = 'yellow'
    document.getElementById('id_leftside').style.opacity = '0.5'
    document.getElementById('id_rightside').style.opacity = '1'
    document.getElementById('id_img').src = "dice-1.png";
    curscore1 = 0;
    document.getElementById('curr_scoreleft').textContent = curscore1;
}
function swaptoleft(){
    document.getElementById('turnleft').textContent = 'Is playing'
    document.getElementById('turnright').textContent = 'Is waiting'
    document.getElementById('id_leftside').style.borderColor = 'yellow'
    document.getElementById('id_rightside').style.borderColor = 'white'
    document.getElementById('id_leftside').style.opacity = '1'
    document.getElementById('id_rightside').style.opacity = '0.5'
    document.getElementById('id_img').src = "dice-1.png";
    curscore2 = 0;
    document.getElementById('curr_scoreright').textContent = curscore2; 
}
function winnercheck(){
    if (totalscore1 >= 100){
        swaptoleft();
        document.getElementById('bell').style.display = 'block';
        document.getElementById('turnleft').textContent = 'Is the Winner'
        document.getElementById('turnright').textContent = 'Is the loser'
        setTimeout(function(){document.getElementById('bell').style.display = 'none';},2000)
        document.querySelector('.btn_roll').disabled = true;
        document.querySelector('.btn_hold').disabled = true;
    }
    else if (totalscore2 >= 100){
        swaptoright();
        document.getElementById('bell').style.display = 'block';
        document.getElementById('turnleft').textContent = 'Is the loser'
        document.getElementById('turnright').textContent = 'Is the Winner'
        setTimeout(function(){document.getElementById('bell').style.display = 'none';},2000)
        document.querySelector('.btn_roll').disabled = true;
        document.querySelector('.btn_hold').disabled = true;     
    }
}
function restart() {
    document.querySelector('.btn_roll').disabled = false;
    document.querySelector('.btn_hold').disabled = false;
    swaptoright();
    swaptoleft();
    totalscore1 = 0;
    totalscore2 = 0;
    document.getElementById('scoreleft').textContent = totalscore1; 
    document.getElementById('scoreright').textContent = totalscore2; 
}