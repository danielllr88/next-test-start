import React from 'react';
import {
    Collapse,
    Navbar,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const CustomNavbar = () => (
    <div>
        <Navbar color="light" light expand="md">
            <Collapse navbar>
                <Nav className="ml-auto" navbar>
                    <NavItem>
                        <NavLink href="/about">About</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="https://github.com/fluxitsoft/react-nextjs-starter">GitHub</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    </div>
)

export default CustomNavbar;
