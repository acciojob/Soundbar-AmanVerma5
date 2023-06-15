//your JS code here. If required.
let btns=document.getElementsByTagName("button");

for(let i=0;i<btns.length-1;i++){
  //console.log(btns[i].innerText)
  btns[i].addEventListener("click",playSound)
}
btns[btns.length-1].addEventListener("click",stopSound)

function playSound(){
  stopSound();
  let audio=document.getElementById(this.innerText);
  audio.play();
}

function stopSound(){
  for(var i=0;i<btns.length-1;i++){
    const audio = document.getElementById(btns[i].innerText)
    audio.pause()
    audio.currentTime = 0
  }
}