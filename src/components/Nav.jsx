import { NavButton } from './NavButton'

import {
  MagnifyingGlass,
  House,
  Plus,
  Star,
  FilmReel,
  Television
} from '@phosphor-icons/react'

import Logo from '../assets/logo.svg'

export function Nav() {
  return (
    <nav className="flex flex-1  items-center gap-4 lg:gap-5 ">
      <a href="#" className="w-10 h-7 mr-6 lg:mr-12 lg:w-20 lg:h-14">
        <img src={Logo} alt="Logo da Disney" />
      </a>

      <NavButton title="início">
        <House width={20} height={20} weight="fill" />
      </NavButton>

      <NavButton title="Pesquisa">
        <MagnifyingGlass width={20} height={20} weight="bold" />
      </NavButton>

      <NavButton title="Minha lista">
        <Plus width={20} height={20} weight="bold" />
      </NavButton>

      <NavButton title="Originais">
        <Star width={20} height={20} weight="fill" />
      </NavButton>

      <NavButton title="Filmes">
        <FilmReel width={20} height={20} weight="fill" />
      </NavButton>

      <NavButton title="Séries">
        <Television width={20} height={20} weight="fill" />
      </NavButton>
    </nav>
  )
}
