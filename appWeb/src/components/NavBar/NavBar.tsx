import LogoBunter from '../../assets/logo-bunter.svg'

export function NavBar() {
  return (
    <nav className='w-full fixed flex items-center justify-between bg-transparent shadow-lg px-20 z-50'>
      <img className='hover:cursor-pointer' src={LogoBunter} alt="Logo do projeto" />
        <ul className='flex gap-7'>
          <li className='cursor-pointer hover:text-slate-300'>Início</li>
          <li className='cursor-pointer hover:text-slate-300  transition-all'>Como funciona?</li>
          <li className='cursor-pointer hover:text-slate-300 transition-all'>Contato</li>
          <li className='cursor-pointer hover:text-slate-300 transition-all'>Sobre Nós</li>
        </ul>
    </nav>
  )
}