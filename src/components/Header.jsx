import React from 'react';
import '../pages/Pages.css';
import { BsChevronLeft } from 'react-icons/bs';
import { MdKeyboardVoice } from 'react-icons/md';
import { IoIosSettings } from 'react-icons/io';

const Header = () => (
  <div>
    <header>
      <nav className="navBar">
        <section className="logo">
          <BsChevronLeft />
          <p className="link">Fruity</p>
        </section>
        <section className="navIcons">
          <MdKeyboardVoice />
          <IoIosSettings />
        </section>

      </nav>
    </header>
  </div>
);

export default Header;
