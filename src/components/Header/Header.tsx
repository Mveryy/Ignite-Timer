import { HeaderContainer, Logo, Nav } from './styles'
import logoIgnite from '../../assets/ignite-logo.svg'
import { Timer, Scroll } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <HeaderContainer>
      <Logo src={logoIgnite} />
      <Nav>
        <NavLink to="/" title="Timer">
          <Timer size={24} />
        </NavLink>
        <NavLink to="/history" title="Histórico">
          <Scroll size={24} />
        </NavLink>
      </Nav>
    </HeaderContainer>
  )
}
