import Logo from '../../assets/sportify.png';
import './Header.css';
import { Menu, BicepsFlexed } from 'lucide-react';
import { useState, useRef } from 'react';

function Header() {
  const [menu, setMenu] = useState(true)
  const menuContainer = useRef(null)

  const toggleMenu = () => {
    if(menu){
      menuContainer.current.classList.remove('hidden')
      setMenu(false)
    }else{
      menuContainer.current.classList.add('hidden')
      setMenu(true)
    }
  }

  return (
    <>
      <header className="header-content">
        <Menu onClick={toggleMenu} className="header-icon" height={40} width={40}/>
        <nav ref={menuContainer} className="header-navbar hidden">
          <a href=""><img src={Logo}/></a>
          <ul className="navbar-list">
            <li><a href="">Home</a></li>
            <li><a href="">Home</a></li>
            <li><a href="">Home</a></li>
            <li><a href=""><BicepsFlexed /></a></li>
          </ul>
        </nav>
      </header>
    </>
  );
}

export default Header;
