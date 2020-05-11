import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <ul className='nav'>
    <li className='nav-item'>
      <Link className='nav-link' to='/'>
        Home
      </Link>
    </li>
    <li className='nav-item'>
      <Link className='nav-link' to='/blog'>
        Blog
      </Link>
    </li>
    <li className='nav-item'>
      <Link className='nav-link' to='/career'>
        Career
      </Link>
    </li>
    <li className='nav-item'>
      <Link className='nav-link' to='/skills'>
        Skills
      </Link>
    </li>
  </ul>
);

export default Navigation;
