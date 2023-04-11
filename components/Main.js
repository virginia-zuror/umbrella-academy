import "./Main.css";

export const Main = () => {
  const main = document.querySelector("main");

  main.innerHTML = `
  <div class="hero"></div>
  <div class="about" id="about">
    <h1 class="me">About</h1>
    <p class="description">After 9 years working as a veterinarian surgeon and in the field of Public Health and Food Safety I decided to change my professional routemap and try something new. Thanks to good friends and my family I got to met the web developing world, it fascinated me, and as soon as I could I jumped into it.
    </p>
    <div class="studies">
    <h2>Education</h2>
    <ul>
    <li>Full Stack Web Developer - NEOLAND, jan 2023 - march 2023</li>
    <li>Public Health and Epidemiology Master of Science, M.S. - Universidad Internacional de Valencia, 2022</li>
    <li>Veterinary Science Degree - Universidad de Córdoba, 2007-2014</li>
    <li>First Certificate in English Language - Cambridge University, 2016</li></ul>
    </div>
    <div class="work">
    <h2>Professional experience</h2>
    <ul>
    <li>Public Health and Food Safety Veterinarian, Junta de Andalucía, dic 2022- jan 2023</li>
    <li>Veterinarian Surgeon, 2014 - 2022</li></ul></div>
    </div>
    <div class="myProjects" id="my_projects">
      <h1>My Projects</h1>
      <figure>
      <h3>NeoVet</h3>
      <img src="/images/Icono_neovet_Mesa_de_trabajo_1.png" alt="neovet logo"/>
      <p>Final bootcamp project, made with 3 coworkers in 10 days.</p>
      <a href="https://github.com/virginia-zuror/_NeoVet_FrontEnd">Link to repository</a>
      </figure>
      <figure>
      <h3>NeoVet</h3>
      <img src="/images/Icono_neovet_Mesa_de_trabajo_1.png" alt="neovet logo"/>
      <p>Lorem ipsum dolor sit amet consectetur adipiscing elit habitant, tristique sed erat egestas etiam at tellus, malesuada nam aliquet penatibus quam ante aenean. </p>
      <a href="https://github.com/virginia-zuror/_NeoVet_FrontEnd">Link to repository</a>
      </figure>

    </div>

`;
};
