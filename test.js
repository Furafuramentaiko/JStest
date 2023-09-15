window.addEventListener("load", ()=>{

//scratchの定義ブロック的な部分 知らんけど
function timeset(){
    let getime = new Date();
    document.getElementById("timenow").innerHTML = getime;

    let y = getime.getFullYear();
    let mo = getime.getMonth();
    let d = getime.getDay();
    let h = getime.getHours() < 10 ? '0' + getime.getHours():getime.getHours();
    let m = getime.getMinutes() < 10 ? '0' + getime.getMinutes():getime.getMinutes();
    let s = getime.getSeconds() < 10 ? '0' + getime.getSeconds():getime.getSeconds();
    let c = getime.getMilliseconds() %10;

    let time = y + "/" + mo + "/" + d + " " + h +":" + m + ":" + s + ";" + c;

    document.getElementById("time").innerHTML=time;
    console.log("しゅとくできtea");

    if(h<=11){
        document.getElementById("timemsg").innerHTML="おはよう！";
    }
    else if(11<h){
        if(18<h){
            document.getElementById("timemsg").innerHTML="こんばんは！";
        }
        else{
            document.getElementById("timemsg").innerHTML="こんにちは！";
        }
    }
    //時間判定ガバガバですね 直すのめんどくさい
}

//呼び出し(ループ前に一瞬画面が皆無になるのを防ぐ)
timeset();

//ループ ",1000);"は更新する頻度(ミリ秒)
var timeloop = setInterval(function(){

//呼び出し
timeset();

},100);

});

let a = "123abc";
let b = "assa"
document.body.innerHTML = a;
a = document.body.innerHTML;
document.body.innerHTML = a+b;

buttonvalue = document.getElementById("timebutton").value;
console.log(buttonvalue);