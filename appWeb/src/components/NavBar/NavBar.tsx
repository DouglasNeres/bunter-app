import { LogoNav } from "./LogoNav";

export function NavBar() {
  return (
    <nav className='w-full fixed flex items-center justify-between bg-zinc-800 bg-opacity-50 shadow-lg px-20 z-50'>
      <LogoNav />
        <ul className='flex gap-7'>
          <li className='cursor-pointer hover:text-slate-300 transition-all'><a href="#intro">Introdução</a></li>
          <li className='cursor-pointer hover:text-slate-300 transition-all'><a href="#screens">Telas</a></li>
          <li className='cursor-pointer hover:text-slate-300 transition-all'><a href="#launch">Lançamento</a></li>
          <li className='cursor-pointer hover:text-slate-300 transition-all'><a href="#meetus">Conheça-nos</a></li>
          <li className='cursor-pointer hover:text-slate-300 transition-all'><a href="#faqs">FAQ's</a></li>
          <li className='cursor-pointer hover:text-slate-300 transition-all'><a href="#footer">Considerações</a></li>
        </ul>
    </nav>
  )
}