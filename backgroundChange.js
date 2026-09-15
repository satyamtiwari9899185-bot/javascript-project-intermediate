let button = document.getElementById("btn");
button.addEventListener("click", ()=>{
    const color = ["red", "yellow", "green", "blue", "pink", "black", "purple"];
    let randomIndex = Math.floor(Math.random() * color.length);
    document.getElementById("innerBox").style.backgroundColor = color[randomIndex];
})