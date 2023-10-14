import { HashLink } from 'react-router-hash-link';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className='Navbar'>
      <HashLink className='navItem' smooth to='/#home'>
        fR
      </HashLink>
      <HashLink className='navItem' smooth to='/#projects'>
        Projects
      </HashLink>
      <HashLink className='navItem' smooth to='/#about'>
        About
      </HashLink>
    </nav>
  );
}
