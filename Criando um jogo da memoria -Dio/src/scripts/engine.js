const emojis = [
    "😍",
    "😍",
    "😎",
    "😎",
    "🤬",
    "🤬",
    "💀",
    "💀",
    "🎃",
    "🎃",
    "⚽",
    "⚽",
    "💖",
    "💖",
    
];
let openCards = [];

let embaralhadorDeEmojis = emojis.sort(()=>(Math.random()> 0.5 ? 2: -1));

for(let i=0;i<emojis.length;i++){
    let box = document.createElement("div");
    box.className = "item";
    box.innerHTML = embaralhadorDeEmojis[i];
    document.querySelector(".game").appendChild(box);
}