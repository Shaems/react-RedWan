import React, {useState, useEffect} from 'react';
import { FaBars } from 'react-icons/fa';
import {IconContext} from 'react-icons/lib'
import {
    Nav, 
    NavbarContainer, 
    NavLogo, 
    MobileIcon, 
    NavMenu, 
    NavItem, 
    NavLinks,
    NavBtn,
    NavBtnLink
    } from './NavbarElements'

const Navbar = ({toggle}) => {
    const [scrollNav, setScrollNav] = useState(false)

    const changeNav = () => {
        if(window.scrollY >=80) {
            setScrollNav(true)
        } else { void
            setScrollNav(false)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', changeNav)
    }, []);



    return (
        <>
        <IconContext.Provider value={{color: '#fff'}}>
            <Nav scrollNav={scrollNav}>
                <NavbarContainer>
                    <NavLogo to='/'>RedWan IPS</NavLogo>
                    <MobileIcon onClick={toggle}>
                        <FaBars />
                    </MobileIcon>
                    <NavMenu>
                        <NavItem>
                            <NavLinks to='about'
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            >Home</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='discover'
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            >Office</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='services'
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            >Servicios</NavLinks>
                        </NavItem>
                        <NavItem>
                            <NavLinks to='signup'
                            smooth={true} 
                            duration={500} 
                            spy={true} 
                            exact='true' 
                            offset={-80}
                            >Instalación</NavLinks>
                        </NavItem>
                    </NavMenu>
                    <NavBtn>
                        <NavBtnLink to="/signin"
                        smooth={true} 
                        duration={500} 
                        spy={true} 
                        exact='true' 
                        offset={-80}
                        >Iniciar sesión</NavBtnLink>
                    </NavBtn>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>
        </>
    )
}

export default Navbar
