import "./header.css";

export const changeIcon =()=>{
    const themeBtn = document.querySelector("#themebtn");
    themeBtn.addEventListener("click", ()=>{
        if(themeBtn.innerHTML === "🌞"){
            themeBtn.innerHTML = "🌜";
            document.body.className ="dark";
        }else{
            themeBtn.innerHTML="🌞";
            document.body.className ="light";
        }
    });
};


export const Header =()=>`
<nav class="navbar">
<h1>
Virginia Zurita's Portfolio
</h1>
<ul>
<li><a href="#" id="about">About</a></li>
<li><a href="#" id="my_projects">My projects</a></li>
<li><a href="#">Contact Me!</a></li>
<li><button id="themebtn">🌞</button></li>
</ul>
</nav>`