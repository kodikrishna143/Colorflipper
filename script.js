
 const btn = document.querySelector(".btn");
 const hexCode = document.querySelector(".hexCode")
 const randomColorCode = [
    "#FF0000",
    "#00FFFF",
    "#0000FF",
    "#00008B",
    "#ADD8E6",
    "#800080",
    "#FFFF00",
    "#00FF00",
    "#FF00FF",
    "#C0C0C0",
    "#808080",
    "#000000",
    "#FFA500",
    "#A52A2A",
    "#800000",
    "#008000",
    "#808000",
    "#808000",
    "#f0ff00",
    "#2F9C09",
    "#B1D3B2",
    "#7BA1F8",
    "#CB15A5",
    "#724443",
    "#6ADE21",
    "#19E786",
    "#B38D86",
    "#631E8A",
    "#F1f5f8",
    "#59CC83"
 ];
 btn.addEventListener("click", ()=>{
    const random = randomColorCode[Math.floor(Math.random() * randomColorCode.length)];
    document.body.style.background = random;
    hexCode.textContent = random;
 });


