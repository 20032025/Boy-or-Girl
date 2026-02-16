/* SET REAL GENDER HERE */
let realGender = "girl"; // change to "boy" or "girl"

/*
ORDER YOU REQUESTED:

1 = girl
2 = girl
3 = boy
4 = boy
5 = boy
6 = girl
7 = boy
8 = girl
9 = real gender

*/

let circles = document.querySelectorAll(".scratch");

/* fixed pattern for first 8 circles */
let pattern = [
"girl", // 1
"girl", // 2
"boy",  // 3
"boy",  // 4
"boy",  // 5
"girl", // 6
"boy",  // 7
"girl"  // 8
];

circles.forEach(function(circle, index){

circle.addEventListener("click", function(){

if(circle.classList.contains("done")) return;

circle.classList.add("done");

/* show baby feet */
circle.innerHTML = "👣";

/* last circle = real gender */
if(index === 8){

if(realGender === "boy"){

circle.classList.add("reveal-boy");

}else{

circle.classList.add("reveal-girl");

}

/* go to result page */
setTimeout(function(){

window.location.href = "result.html";

},800);

}
else{

/* use pattern */
if(pattern[index] === "boy"){

circle.classList.add("reveal-boy");

}else{

circle.classList.add("reveal-girl");

}

}

});

});