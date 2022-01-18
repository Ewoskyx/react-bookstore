import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import {
  Nav, NavContainer, NavMenu, NavItems, NavLinks, NavLogo,
} from './NavbarElements';

const links = [
  {
    id: uuidv4(),
    to: '/',
    text: 'BOOKS',
  },
  {
    id: uuidv4(),
    to: '/categories',
    text: 'CATEGORIES',
  },
];
const Navbar = () => (
  <>
    <Nav>
      <NavContainer>
        <NavLogo>Bookstore CMS</NavLogo>
        <NavMenu>
          {links.map((link) => (
            <NavItems key={link.id}>
              <NavLinks to={link.to}>{link.text}</NavLinks>
            </NavItems>
          ))}
        </NavMenu>
      </NavContainer>
    </Nav>
  </>
);

export default Navbar;
