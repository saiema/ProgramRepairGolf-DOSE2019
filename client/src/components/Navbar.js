import React from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom'
import f  from './Authorization';

const Navbar = (props) => {

  return (
    <nav className="nav-wrappen red">
    <div className="container">
      <Link className="brand-logo" to="/">Program Repair Game</Link>
      <ul className="right">
        <li><NavLink exact to="/">Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/hackers'>Hackers</NavLink></li>
        <li><NavLink to='/userstats'>Statistics</NavLink></li>
        <li><NavLink to='/challenge'>Challenge</NavLink></li>
        <li><NavLink to='/comments'> Comments </NavLink></li>
        <li><NavLink style={{background:'white',color:'red'}} to={{pathname:'/'}}
                      activeStyle={{background:'#f63c3c',color:'#f63c3c'}}
                      isActive={(match, location) => {if (!match) {
                        f.signout();
                        return false;}
                      const searchParams = new URLSearchParams(location.search);
                      return match.isExact;
                    }}>Cerrar Sesion</NavLink></li>
      </ul>
    </div>
  </nav>
  );
};

export default withRouter(Navbar)
