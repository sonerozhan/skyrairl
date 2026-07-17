// Yayın tarihi (değiştirebilirsin)
const targetDate = new Date("December 31, 2026 20:00:00").getTime();

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

function updateCountdown() {

    const now = new Date().getTime();
    const distance = targetDate - now;

    if(distance < 0){

        days.innerHTML="00";
        hours.innerHTML="00";
        minutes.innerHTML="00";
        seconds.innerHTML="00";

        return;

    }

    const d = Math.floor(distance / (1000*60*60*24));
    const h = Math.floor((distance % (1000*60*60*24)) / (1000*60*60));
    const m = Math.floor((distance % (1000*60*60)) / (1000*60));
    const s = Math.floor((distance % (1000*60)) / 1000);

    days.innerHTML = String(d).padStart(2,"0");
    hours.innerHTML = String(h).padStart(2,"0");
    minutes.innerHTML = String(m).padStart(2,"0");
    seconds.innerHTML = String(s).padStart(2,"0");

}

setInterval(updateCountdown,1000);

updateCountdown();


// Fare hareketine göre hafif parlama efekti

document.addEventListener("mousemove",(e)=>{

    const blur1=document.querySelector(".blur1");
    const blur2=document.querySelector(".blur2");

    let x=e.clientX/window.innerWidth;
    let y=e.clientY/window.innerHeight;

    blur1.style.transform=`translate(${x*40}px,${y*40}px)`;

    blur2.style.transform=`translate(${-x*40}px,${-y*40}px)`;

});


// Avatar ışık animasyonu

const avatar=document.querySelector(".avatar");

let glow=0;

setInterval(()=>{

    glow++;

    avatar.style.boxShadow=
`
0 0 ${20+Math.sin(glow)*5}px #00ff99,
0 0 ${45+Math.sin(glow)*8}px #00ff99,
0 0 ${80+Math.sin(glow)*10}px rgba(0,255,153,.45)
`;

},60);



// Kart hover efekti

document.querySelectorAll(".card").forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.background=
`radial-gradient(circle at ${x}px ${y}px,
rgba(0,255,153,.18),
rgba(255,255,255,.04) 60%)`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="rgba(255,255,255,.04)";

});

});
