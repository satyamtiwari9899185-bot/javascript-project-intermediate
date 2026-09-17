let button = document.getElementById("bton");
let heading = document.getElementById("head");
let buttoni = document.getElementById("buton");
let headingi = document.getElementById("heading");
let n = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
button.addEventListener("click", ()=>{
    const randomIndex = Math.floor(Math.random() * n.length);
    heading.innerHTML = n[randomIndex];
})
buttoni.addEventListener("click", ()=>{
    const randIndex = Math.floor(Math.random() * 100) + 1;
    headingi.innerHTML = randIndex;
})