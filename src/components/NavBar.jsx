import React, {useState} from 'react';

import {Link, NavLink} from 'react-router-dom';

import "./NavBar.css";

import Logo from './Logo/logo.png'

export const NavBar = () => {
	const [menuOpen, setMenuOpen] = useState(false)
	return (
	<nav>
		<div className='logo-container'>
			<img src={Logo} alt= "Logo de la pagina" className='logo'/>
			<Link to="/" className= "title">TFLolutions</Link>
		</div>

		<div
		 className='menu'
			onClick={() =>{
			setMenuOpen(!menuOpen);
		}}
		>
			<span></span>
			<span></span>
			<span></span>
		</div>
		<ul className={menuOpen ? "open" : ""}>
			<li>
				<NavLink to="/clientes">Clientes</NavLink>
			</li>
			<li>
				<NavLink to="/contacto">Contacto</NavLink>
			</li>
			<li>
				<NavLink to="/nosotros">Nosotros</NavLink>
			</li>
			<li>
				<NavLink to="/servicios">Servicios</NavLink>
			</li>
		</ul>
	</nav>
	);
}