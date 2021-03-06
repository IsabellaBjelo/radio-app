import { useState } from 'react';
import { Link } from 'react-router-dom';

import style from '../css/Navbar.module.css'

const Navbar = () => {
  const [links] = useState(
    [
      { name: "Hem", url: "/" }, 
      { name: "Kanaler", url: "/channels" }, 
      { name: "Kategorier", url: "/categories" },
      // { name: "Mina Sidor", url: "/mypage" },
      // { name: "Logga in", url: "/login" }
    ]);

  const mapLinks = () => {
    return links.map((link) => (
      <Link className={style.link} key={link.name} to={link.url}>
        {link.name}
      </Link>
    ));
  };


  return <nav className={style.navbar}>{mapLinks()}</nav>
}
 
export default Navbar;
