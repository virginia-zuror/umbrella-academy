import './style.css'
import { Header } from './components/header';
import { changeIcon } from './components/header';
import { Main } from './components/Main';




const header = document.querySelector("header");
header.innerHTML=Header();

changeIcon();

Main();



