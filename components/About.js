import "./About.css";

export const About = () => {
  const main = document.querySelector("main");

  main.innerHTML = `<div class="about">
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
`;
};
