function randomNumber1 (){
    var n = 6 * Math.random();
    n = Math.floor(n) + 1;
    return n;
}

function rand_dice (){

    var d1 = randomNumber1();
    var d2 = randomNumber1();

    document.querySelectorAll("img")[0].setAttribute("src" , "images/dice" + d1 + ".png");
    document.querySelectorAll("img")[1].setAttribute("src" , "images/dice" + d2 + ".png");

    if(d1 > d2)
    {
        document.querySelector("h1").innerHTML = "P1 wins";
    }
    else if (d2 > d1)
    {
        document.querySelector("h1").innerHTML = "P2 wins";
    }
    else
    {
        document.querySelector("h1").innerHTML = "Its is a draw";
    }
}

rand_dice();