import React from 'react';
import {NavbarContainer} from './styles'

const Navbar: React.FC = () => {
    return(
        <header>
        <NavbarContainer>
            <div>
                <div>
                    <h1>TGL</h1>
                    <hr />
                </div>
                <div>
                    <li><a  href="/">Home</a></li>
                </div>
            </div>
            <div>
                <div>
                    <li><a href="/">Account</a></li>
                    <li>
                        <a href="/">Log out
                            <svg width="1em" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </a>
                    </li>
                </div>
            </div>
        </NavbarContainer>
    </header>
    );
}

export default Navbar;