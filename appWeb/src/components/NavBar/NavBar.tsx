import { LogoNav } from "./LogoNav";

export function NavBar() {
  return (
    <nav className='w-full relative flex items-center justify-between bg-transparent shadow-lg px-20 z-50'>
      <LogoNav />
        <ul className='flex gap-7'>
          <li className='cursor-pointer hover:text-slate-300'>Introdução</li>
          <li className='cursor-pointer hover:text-slate-300  transition-all'>Telas</li>
          <li className='cursor-pointer hover:text-slate-300 transition-all'>Lançamento</li>
          <li className='cursor-pointer hover:text-slate-300 transition-all'>Conheça-nos</li>
          <li className='cursor-pointer hover:text-slate-300 transition-all'>FAQ's</li>
          <li className='cursor-pointer hover:text-slate-300 transition-all'>Considerações</li>
        </ul>
    </nav>
  )
}