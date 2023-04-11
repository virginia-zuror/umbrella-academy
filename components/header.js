import "./header.css";

export const changeIcon =()=>{
    const themeBtn = document.querySelector("#themebtn");
    themeBtn.addEventListener("click", ()=>{
        if(themeBtn.innerHTML === "🌞 Change color"){
            themeBtn.innerHTML = "🌜 Change color";
            document.body.className ="dark";
        }else{
            themeBtn.innerHTML="🌞 Change color";
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
<li><button id="themebtn">🌞 Change color</button></li>
<li><a href="#about">About</a></li>
<li><a href="#my_projects" >My projects</a></li>
<li><a href="#">Contact Me!</a></li>

</ul>
</nav>`