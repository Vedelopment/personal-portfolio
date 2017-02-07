// sanity check
console.log("app.js linked.");
/*function getRandomInt(min, max) {
  min = Math.ceil(1);
  max = Math.floor(2);
  return Math.floor(Math.random() * (max - min)) + min;
  console.log(return)
}
var slothCroissantCursor = function() {
  var cursorUrl = document.slothLink;
  var whichCursor = {

  }
  cursorUrl.style.cursorUrl = whichCursor;
}*/
// TASSEL PIANO -------------------------------------------------------------
function playMode() {
  if (document.getElementById("buttonToggle").innerHTML=="Click/Hover") {
  document.getElementById("buttonToggle").innerHTML="Hover";
  document.getElementById("top").removeAttribute("onClick");
  document.getElementById("do").removeAttribute("onClick");
  document.getElementById("re").removeAttribute("onClick");
  document.getElementById("mi").removeAttribute("onClick");
  document.getElementById("fa").removeAttribute("onClick");
  document.getElementById("sol").removeAttribute("onClick");
  document.getElementById("la").removeAttribute("onClick");
  document.getElementById("ti").removeAttribute("onClick");
  document.getElementById("dooct").removeAttribute("onClick");
  document.getElementById("top").setAttribute("onmouseover", "playRoll()");
  document.getElementById("do").setAttribute("onmouseover", "playDo()");
  document.getElementById("re").setAttribute("onmouseover", "playRe()");
  document.getElementById("mi").setAttribute("onmouseover", "playMi()");
  document.getElementById("fa").setAttribute("onmouseover", "playFa()");
  document.getElementById("sol").setAttribute("onmouseover", "playSol()");
  document.getElementById("la").setAttribute("onmouseover", "playLa()");
  document.getElementById("ti").setAttribute("onmouseover", "playTi()");
  document.getElementById("dooct").setAttribute("onmouseover", "playDooct()");
  }
  else if (document.getElementById("buttonToggle").innerHTML=="Click") {
    document.getElementById("buttonToggle").innerHTML="Hover";
    document.getElementById("top").removeAttribute("onClick");
    document.getElementById("do").removeAttribute("onClick");
    document.getElementById("re").removeAttribute("onClick");
    document.getElementById("mi").removeAttribute("onClick");
    document.getElementById("fa").removeAttribute("onClick");
    document.getElementById("sol").removeAttribute("onClick");
    document.getElementById("la").removeAttribute("onClick");
    document.getElementById("ti").removeAttribute("onClick");
    document.getElementById("dooct").removeAttribute("onClick");
    document.getElementById("top").setAttribute("onmouseover", "playRoll()");
    document.getElementById("do").setAttribute("onmouseover", "playDo()");
    document.getElementById("re").setAttribute("onmouseover", "playRe()");
    document.getElementById("mi").setAttribute("onmouseover", "playMi()");
    document.getElementById("fa").setAttribute("onmouseover", "playFa()");
    document.getElementById("sol").setAttribute("onmouseover", "playSol()");
    document.getElementById("la").setAttribute("onmouseover", "playLa()");
    document.getElementById("ti").setAttribute("onmouseover", "playTi()");
    document.getElementById("dooct").setAttribute("onmouseover", "playDooct()");
  }
  else if (document.getElementById("buttonToggle").innerHTML=="Hover") {
    document.getElementById("buttonToggle").innerHTML="Click";
    document.getElementById("top").removeAttribute("onmouseover");
    document.getElementById("do").removeAttribute("onmouseover");
    document.getElementById("re").removeAttribute("onmouseover");
    document.getElementById("mi").removeAttribute("onmouseover");
    document.getElementById("fa").removeAttribute("onmouseover");
    document.getElementById("sol").removeAttribute("onmouseover");
    document.getElementById("la").removeAttribute("onmouseover");
    document.getElementById("ti").removeAttribute("onmouseover");
    document.getElementById("dooct").removeAttribute("onmouseover");
    document.getElementById("top").setAttribute("onClick", "playRoll()");
    document.getElementById("do").setAttribute("onClick", "playDo()");
    document.getElementById("re").setAttribute("onClick", "playRe()");
    document.getElementById("mi").setAttribute("onClick", "playMi()");
    document.getElementById("fa").setAttribute("onClick", "playFa()");
    document.getElementById("sol").setAttribute("onClick", "playSol()");
    document.getElementById("la").setAttribute("onClick", "playLa()");
    document.getElementById("ti").setAttribute("onClick", "playTi()");
    document.getElementById("dooct").setAttribute("onClick", "playDooct()");
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
document.getElementById("top").style.backgroundColor=x;  // "#000000";
}
function changeColorStringEgg(x) {
document.getElementById("stringEgg").style.backgroundColor=x;  // "#000000";
}
function changeColorDo(x) {
document.getElementById("do").style.backgroundColor=x;  // "#000000";
}
function changeColorRe(x) {
document.getElementById("re").style.backgroundColor=x;  // "#000000";
}
function changeColorMi(x) {
document.getElementById("mi").style.backgroundColor=x;  // "#000000";
}
function changeColorFa(x) {
document.getElementById("fa").style.backgroundColor=x;  // "#000000";
}
function changeColorSol(x) {
document.getElementById("sol").style.backgroundColor=x;  // "#000000";
}
function changeColorLa(x) {
document.getElementById("la").style.backgroundColor=x;  // "#000000";
}
function changeColorTi(x) {
document.getElementById("ti").style.backgroundColor=x;  // "#000000";
}
function changeColorDooct(x) {
document.getElementById("dooct").style.backgroundColor=x;  // "#000000";
}
function playRoll()
{
  document.getElementById("top").style.backgroundColor='rgba(143, 0, 255, 1)';
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
  document.getElementById("do").style.backgroundColor='rgba(255, 100, 100, 1)';
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
  document.getElementById("re").style.backgroundColor='rgba(255, 202, 75, 1)';
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
  document.getElementById("mi").style.backgroundColor='rgba(255, 255, 200, 1)';
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
  document.getElementById("fa").style.backgroundColor='rgba(200, 255, 200, 1)';
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
  document.getElementById("sol").style.backgroundColor='rgba(100, 100, 255, 1)';
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
  document.getElementById("la").style.backgroundColor='rgba(165, 40, 250, 1)';
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
  document.getElementById("ti").style.backgroundColor='rgba(183, 0, 255, 1)';
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
  document.getElementById("dooct").style.backgroundColor='rgba(255, 100, 255, 1)';
  setTimeout("changeColorDooct('rgba(255, 0, 255, 1)')", 200)
   var playDooct = document.getElementById("playDooct");
    playDooct.play()
      if (playDooct.paused) {
          playDooct.play();
      }else{
          playDooct.currentTime = 0;}
}
$(document).ready(function(){
  // $("#main-section").on("click", playMeow());
});
