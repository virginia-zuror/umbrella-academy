import './style.css'
import { Header } from './components/header';
import { changeIcon } from './components/header';
import { About } from './components/About';



const header = document.querySelector("header");
header.innerHTML=Header();

changeIcon();

About();


