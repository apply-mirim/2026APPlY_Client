import { motion } from 'motion/react';
import styled from 'styled-components';

const StyledHeader = styled(motion.header)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 3rem;
  background: rgba(255, 251, 253, 0.95);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);
`;

const Logo = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: #000;
  font-weight: 900;
  font-size: 25px;
  letter-spacing: -0.02em;
  font-family: 'Pretendard', sans-serif;

  img {
    height: 2rem;
    width: auto;
  }
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 2.5rem;
`;

const NavLink = styled.a`
  position: relative;
  color: #000;
  text-decoration: none;
  font-weight: 900;
  font-size: 25px;
  letter-spacing: 0.02em;
  font-family: 'Pretendard', sans-serif;
  transition: color 0.25s ease;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 0;
    height: 2px;
    background: #e91e8c;
    transition: width 0.3s cubic-bezier(0.22, 1, 0.36, 1);
  }

  &:hover {
    color: #e91e8c;

    &::after {
      width: 100%;
    }
  }
`;

function scrollToSection(e: React.MouseEvent<HTMLAnchorElement>, id: string) {
  e.preventDefault();
  const el = document.getElementById(id);
  el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function Header() {
  return (
    <StyledHeader
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
    >
      <Logo href="#home" onClick={(e) => scrollToSection(e, 'home')}>
        <img src="/assets/logo_typo.png" alt="APP:LY" />
      </Logo>
      <Nav>
        <NavLink href="#home" onClick={(e) => scrollToSection(e, 'home')}>
          HOME
        </NavLink>
        <NavLink href="#about" onClick={(e) => scrollToSection(e, 'about')}>
          ABOUT US
        </NavLink>
        <NavLink href="#projects" onClick={(e) => scrollToSection(e, 'projects')}>
          PROJECTS
        </NavLink>
        <NavLink href="#qa" onClick={(e) => scrollToSection(e, 'qa')}>
          Q&A
        </NavLink>
      </Nav>
    </StyledHeader>
  );
}

export default Header;
