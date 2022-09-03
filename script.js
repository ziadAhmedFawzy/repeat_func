// funct to repeat

function LOOP(string , num) {
    for(let i = 0; i < num; i++)
    {
        console.log(string);
    }
}

LOOP("ziad" , 5);


let btn = document.getElementById('go');

btn.onclick = function() {
    window.location.href = "https://ziadahmedfawzy.github.io/length_func/";
}