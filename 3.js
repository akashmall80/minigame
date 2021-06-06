score=0;
cross=true;

//when we press the uparrow key dino will move up
document.onkeydown=function(e){
    console.log("key code is:",e.keyCode)
    if(e.keyCode == 38){
        dino=document.querySelector('.dino');
        dino.classList.add('animateDino');//add animatedino in css when we press upkey then our animatedino will come
        setTimeout(() => {
            dino.classList.remove('animateDino');
        }, 1000);//timinig of dino when we jump=1s
    }
//when we press the leftarrow key dino will move left
if(e.keyCode == 39){
    dino=document.querySelector('.dino');
   dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
  dino.style.left=dinoX+112+"px";//when we press left key our dino will move left 112px
}


//when we press the backarrow key dino will move back
if(e.keyCode == 37){
    dino=document.querySelector('.dino');
    dinoX=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
   dino.style.left=(dinoX-112)+"px";//when we press right key our dino will move right 112px
}
}
//if my dino and obstacle collide then game over
setInterval(() => {
    dino=document.querySelector('.dino');
    gameover=document.querySelector('.gameover');
    obstacle=document.querySelector('.obstacle');
    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue('left'));
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue('top'));

    
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('left'));
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue('top'));
    offsetX=Math.abs(dx-ox);
    offsetY=Math.abs(dy-oy);
    if(offsetX<93 && offsetY<52){
        gameover.style.display = "block";
        obstacle.classList.remove('obstacle');
    }

    else if(cross){
        score+=1;
        updatescore(score);
        cross=false;
        setTimeout(() => {
            cross=true;
        }, 100);
    }
}, 100);
function updatescore(score){
    score.innerHTML="your score" +score
}