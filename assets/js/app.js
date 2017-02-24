console.log("app.js linked.");

// $(document).ready(function(){
// });

// TASSEL PIANO LOGIC
//           _
//          (_)
//    _ __  _  __ _ _ __   ___
//    | '_ \| |/ _` | '_ \ / _ \
//    | |_) | | (_| | | | | (_) |
//    | .__/|_|\__,_|_| |_|\___/
//    | |
//    |_|


function playMode() {
  if (document.getElementById("buttonToggle").innerHTML=="Click/Hover") {
  document.getElementById("buttonToggle").innerHTML="Hover";
  document.getElementById("dev-top").removeAttribute("onClick");
  document.getElementById("dev-do").removeAttribute("onClick");
  document.getElementById("dev-re").removeAttribute("onClick");
  document.getElementById("dev-mi").removeAttribute("onClick");
  document.getElementById("dev-fa").removeAttribute("onClick");
  document.getElementById("dev-sol").removeAttribute("onClick");
  document.getElementById("dev-la").removeAttribute("onClick");
  document.getElementById("dev-ti").removeAttribute("onClick");
  document.getElementById("dev-dooct").removeAttribute("onClick");
  document.getElementById("dev-top").setAttribute("onmouseover", "playRoll()");
  document.getElementById("dev-do").setAttribute("onmouseover", "playDo()");
  document.getElementById("dev-re").setAttribute("onmouseover", "playRe()");
  document.getElementById("dev-mi").setAttribute("onmouseover", "playMi()");
  document.getElementById("dev-fa").setAttribute("onmouseover", "playFa()");
  document.getElementById("dev-sol").setAttribute("onmouseover", "playSol()");
  document.getElementById("dev-la").setAttribute("onmouseover", "playLa()");
  document.getElementById("dev-ti").setAttribute("onmouseover", "playTi()");
  document.getElementById("dev-dooct").setAttribute("onmouseover", "playDooct()");
  }
  else if (document.getElementById("buttonToggle").innerHTML=="Click") {
    document.getElementById("buttonToggle").innerHTML="Hover";
    document.getElementById("dev-top").removeAttribute("onClick");
    document.getElementById("dev-do").removeAttribute("onClick");
    document.getElementById("dev-re").removeAttribute("onClick");
    document.getElementById("dev-mi").removeAttribute("onClick");
    document.getElementById("dev-fa").removeAttribute("onClick");
    document.getElementById("dev-sol").removeAttribute("onClick");
    document.getElementById("dev-la").removeAttribute("onClick");
    document.getElementById("dev-ti").removeAttribute("onClick");
    document.getElementById("dev-dooct").removeAttribute("onClick");
    document.getElementById("dev-top").setAttribute("onmouseover", "playRoll()");
    document.getElementById("dev-do").setAttribute("onmouseover", "playDo()");
    document.getElementById("dev-re").setAttribute("onmouseover", "playRe()");
    document.getElementById("dev-mi").setAttribute("onmouseover", "playMi()");
    document.getElementById("dev-fa").setAttribute("onmouseover", "playFa()");
    document.getElementById("dev-sol").setAttribute("onmouseover", "playSol()");
    document.getElementById("dev-la").setAttribute("onmouseover", "playLa()");
    document.getElementById("dev-ti").setAttribute("onmouseover", "playTi()");
    document.getElementById("dev-dooct").setAttribute("onmouseover", "playDooct()");
  }
  else if (document.getElementById("buttonToggle").innerHTML=="Hover") {
    document.getElementById("buttonToggle").innerHTML="Click";
    document.getElementById("dev-top").removeAttribute("onmouseover");
    document.getElementById("dev-do").removeAttribute("onmouseover");
    document.getElementById("dev-re").removeAttribute("onmouseover");
    document.getElementById("dev-mi").removeAttribute("onmouseover");
    document.getElementById("dev-fa").removeAttribute("onmouseover");
    document.getElementById("dev-sol").removeAttribute("onmouseover");
    document.getElementById("dev-la").removeAttribute("onmouseover");
    document.getElementById("dev-ti").removeAttribute("onmouseover");
    document.getElementById("dev-dooct").removeAttribute("onmouseover");
    document.getElementById("dev-dev-top").setAttribute("onClick", "playRoll()");
    document.getElementById("dev-do").setAttribute("onClick", "playDo()");
    document.getElementById("dev-re").setAttribute("onClick", "playRe()");
    document.getElementById("dev-mi").setAttribute("onClick", "playMi()");
    document.getElementById("dev-fa").setAttribute("onClick", "playFa()");
    document.getElementById("dev-sol").setAttribute("onClick", "playSol()");
    document.getElementById("dev-la").setAttribute("onClick", "playLa()");
    document.getElementById("dev-ti").setAttribute("onClick", "playTi()");
    document.getElementById("dev-dooct").setAttribute("onClick", "playDooct()");
  }
}
function playMeow()
{
  document.getElementById("stringEgg").style.backgroundColor='rgba(255, 0, 255, 1)';
  setTimeout("changeColorStringEgg('rgba(135, 0, 225, 1)')", 16000)
   var playMeow = document.getElementById("playMeow");
   playMeow.volume = 0.5;
    playMeow.play()
      if (playMeow.paused) {
          playMeow.play();
      }else{
          playMeow.currentTime = 0;}
}
function changeColorTop(x) {
document.getElementById("dev-top").style.backgroundColor=x;  // "#000000";
}
function changeColorStringEgg(x) {
document.getElementById("stringEgg").style.backgroundColor=x;  // "#000000";
}
function changeColorDo(x) {
document.getElementById("dev-do").style.backgroundColor=x;  // "#000000";
}
function changeColorRe(x) {
document.getElementById("dev-re").style.backgroundColor=x;  // "#000000";
}
function changeColorMi(x) {
document.getElementById("dev-mi").style.backgroundColor=x;  // "#000000";
}
function changeColorFa(x) {
document.getElementById("dev-fa").style.backgroundColor=x;  // "#000000";
}
function changeColorSol(x) {
document.getElementById("dev-sol").style.backgroundColor=x;  // "#000000";
}
function changeColorLa(x) {
document.getElementById("dev-la").style.backgroundColor=x;  // "#000000";
}
function changeColorTi(x) {
document.getElementById("dev-ti").style.backgroundColor=x;  // "#000000";
}
function changeColorDooct(x) {
document.getElementById("dev-dooct").style.backgroundColor=x;  // "#000000";
}
function playRoll()
{
  document.getElementById("dev-top").style.backgroundColor='rgba(143, 0, 255, 1)';
  setTimeout("changeColorTop('rgba(113, 0, 225, 1)')", 200)
  var playRoll = document.getElementById("playRoll");
  playRoll.volume = 0.3;
    playRoll.play()
      if (playRoll.paused) {
          playRoll.play();
      }else{
          playRoll.currentTime = 0;}
}
function playDo()
{
  document.getElementById("dev-do").style.backgroundColor='rgba(255, 100, 100, 1)';
  setTimeout("changeColorDo('rgba(255, 0, 0, 1)')", 200)
   var playDo = document.getElementById("playDo");
    playDo.play()
      if (playDo.paused) {
          playDo.play();
      }else{
          playDo.currentTime = 0;}
}
function playRe()
{
  document.getElementById("dev-re").style.backgroundColor='rgba(255, 202, 75, 1)';
  setTimeout("changeColorRe('rgba(255, 127, 0, 1)')", 200)
   var playRe = document.getElementById("playRe");
    playRe.play()
      if (playRe.paused) {
          playRe.play();
      }else{
          playRe.currentTime = 0;}
}
function playMi()
{
  document.getElementById("dev-mi").style.backgroundColor='rgba(255, 255, 200, 1)';
  setTimeout("changeColorMi('rgba(255, 255, 0, 1)')", 200)
   var playMi = document.getElementById("playMi");
    playMi.play()
      if (playMi.paused) {
          playMi.play();
      }else{
          playMi.currentTime = 0;}
}
function playFa()
{
  document.getElementById("dev-fa").style.backgroundColor='rgba(200, 255, 200, 1)';
  setTimeout("changeColorFa('rgba(0, 255, 0, 1)')", 200)
   var playFa = document.getElementById("playFa");
    playFa.play()
      if (playFa.paused) {
          playFa.play();
      }else{
          playFa.currentTime = 0;}
}
function playSol()
{
  document.getElementById("dev-sol").style.backgroundColor='rgba(100, 100, 255, 1)';
  setTimeout("changeColorSol('rgba(0, 0, 225, 1)')", 200)
   var playSol = document.getElementById("playSol");
    playSol.play()
      if (playSol.paused) {
          playSol.play();
      }else{
          playSol.currentTime = 0;}
}
function playLa()
{
  document.getElementById("dev-la").style.backgroundColor='rgba(165, 40, 250, 1)';
  setTimeout("changeColorLa('rgba(135, 0, 190, 1)')", 200)
   var playLa = document.getElementById("playLa");
    playLa.play()
      if (playLa.paused) {
          playLa.play();
      }else{
          playLa.currentTime = 0;}
}
function playTi()
{
  document.getElementById("dev-ti").style.backgroundColor='rgba(183, 0, 255, 1)';
  setTimeout("changeColorTi('rgba(143, 0, 255, 1)')", 200)
   var playTi = document.getElementById("playTi");
    playTi.play()
      if (playTi.paused) {
          playTi.play();
      }else{
          playTi.currentTime = 0;}
}
function playDooct()
{
  document.getElementById("dev-dooct").style.backgroundColor='rgba(255, 100, 255, 1)';
  setTimeout("changeColorDooct('rgba(255, 0, 255, 1)')", 200)
   var playDooct = document.getElementById("playDooct");
    playDooct.play()
      if (playDooct.paused) {
          playDooct.play();
      }else{
          playDooct.currentTime = 0;}
}
