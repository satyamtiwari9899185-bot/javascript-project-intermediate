let plus = document.getElementById("plus");
let minus = document.getElementById("minus");
let reset = document.getElementById("reset");
let counter = document.getElementById("count");
let count = 0;
plus.addEventListener("click", ()=>{
    count++;
    counter.innerHTML = count;
})
minus.addEventListener("click", ()=>{
    if(count > 0)
    {
        count--;
    }else{
        count = 0;
    }
    counter.innerHTML = count;
})
reset.addEventListener("click", ()=>{
    count = 0;
    counter.innerHTML = count;
})