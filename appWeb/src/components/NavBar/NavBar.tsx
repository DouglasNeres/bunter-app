import { useNavMobileContext } from "../../contexts";
import { HambuguerIcon } from "../../Icons";
import { LogoNav } from "./LogoNav";
import { NavMobileItem } from "./NavMobileItem";

export function NavBar() {

  const { isVisible, setIsVisible } = useNavMobileContext()

  return (
    <nav className='w-full fixed flex items-center justify-between bg-zinc-800 bg-opacity-50 shadow-lg px-14 z-50'>
      <LogoNav />
      <ul className=' hidden lg:flex gap-6'>
        <li className='cursor-pointer hover:text-slate-300 transition-all'><a href="#intro">Introdução</a></li>
        <li className='cursor-pointer hover:text-slate-300 transition-all'><a href="#screens">Telas</a></li>
        <li className='cursor-pointer hover:text-slate-300 transition-all'><a href="#launch">Lançamento</a></li>
        <li className='cursor-pointer hover:text-slate-300 transition-all'><a href="#meetus">Conheça-nos</a></li>
        <li className='cursor-pointer hover:text-slate-300 transition-all'><a href="#faqs">FAQ's</a></li>
        <li className='cursor-pointer hover:text-slate-300 transition-all'><a href="#footer">Considerações</a></li>
      </ul>

      <div className="flex lg:hidden">
        <button onClick={() => setIsVisible(prev => !prev)}>
          {isVisible ? (<span className="font-bold text-2xl">X</span>) : (<HambuguerIcon />)}
        </button>
      </div>
      {isVisible && (
        <div className="w-full fixed top-20 left-0 mt-4 bg-transparent shadow-md shadow-purplePrimary">
          <div className='flex flex-col items-stretch justify-center lg:hidden '>

            <a href="#intro"><NavMobileItem>Introdução</NavMobileItem></a>
            <a href="#screens"><NavMobileItem>Telas</NavMobileItem></a>
            <a href="#launch"><NavMobileItem>Lançamento</NavMobileItem></a>
            <a href="#meetus"><NavMobileItem>Conheça-nos</NavMobileItem></a>
            <a href="#faqs"><NavMobileItem>FAQ's</NavMobileItem></a>
            <a href="#footer"><NavMobileItem>Considerações</NavMobileItem></a>
            </div>
          </div>
      )}
          </nav>
          )
}

