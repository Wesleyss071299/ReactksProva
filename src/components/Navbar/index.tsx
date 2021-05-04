import React from 'react';
import { NavbarContainer, LogoContainer,NavLink } from './styles'

const Navbar: React.FC = () => {
    return(
        <header>
        <NavbarContainer>
            <div>
                <LogoContainer>
                    <h1>TGL</h1>
                    <hr />
                </LogoContainer>
                <div>
                    <li><NavLink  href="/">Home</NavLink></li>
                </div>
            </div>
            <div>
                <div>
                    <li><NavLink href="/">Account</NavLink></li>
                    <li>
                        <NavLink href="/">Log out
                            <svg width="1em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </NavLink>
                    </li>
                </div>
            </div>
        </NavbarContainer>
    </header>
    );
}

export default Navbar;