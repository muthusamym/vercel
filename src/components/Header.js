/* eslint-disable jsx-a11y/anchor-is-valid */
import { Bars3Icon } from '@heroicons/react/24/solid'
import {useState} from 'react';

export default function Header()
{
    const [toggleMenu,setToggleMenu] = useState(false);

    return <header className="flex justify-between px-5 py-2 bg-header">
        <a  className ='text-white' href="#">Muthu Dot</a>
        <nav className='hidden md:block'>
            <ul className="flex text-white font-bold ">
                 <li><a href="/">Home</a>
                </li>
                <li><a href="#about">About us</a>
                </li>
                <li><a href="#projects">Projects</a>
                </li>
                <li><a href="#resume">Resume</a>
                </li>
                <li><a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
       { toggleMenu &&  <nav className='block md:hidden'>
            <ul onClick={() => setToggleMenu(!toggleMenu)} className="flex flex-col text-white font-bold mobile-nav">
            <li><a href="/">Home</a>
                </li>
                <li><a href="#about">About us</a>
                </li>
                <li><a href="#projects">Projects</a>
                </li>
                <li><a href="#resume">Resume</a>
                </li>
                <li><a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>}
    <button  onClick={() => setToggleMenu(!toggleMenu)} className="block md:hidden"><Bars3Icon  className="text-white h-5" /> </button>
    </header>
}