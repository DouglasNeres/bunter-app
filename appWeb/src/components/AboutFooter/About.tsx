import { LogoNav } from '../NavBar'

import EmailIcon from '../../assets/email-icon.svg'
import LinkedinIcon from '../../assets/linkedin-icon.svg'
import GithubIcon from '../../assets/github-icon.svg'

export function About(){
  return(
    <div className="flex flex-col items-center">
        <LogoNav/>
        <p className="break-words mt-4 text-lg text-left">Cidade de Crateús-CE, no <p>Brasil - EEEP Manoel Mano</p></p>
        <div className="flex gap-8 mt-10">
          <a href="mailto:bunter@yahoo.com" target="_blank" rel="noopener noreferrer"><img className="h-9 w-9 hover:bg-purpleFifth rounded-full" src={EmailIcon} alt="Ícone de Email" /></a>
          <a href="https://abre.bio/NetWork-Bunter" target="_blank" rel="noopener noreferrer"><img className="h-9  w-9 hover:bg-purpleFifth rounded-full" src={LinkedinIcon} alt="Ícone do LinkedIn" /></a>
          <a href="https://abre.bio/NetWork-Bunter" target="_blank" rel="noopener noreferrer"><img className="h-9  w-9 hover:bg-purpleFifth rounded-full" src={GithubIcon} alt="Ícone do GitHub" /></a>
        </div>
        <div className='gradientFinal'></div>
      </div>

  )
}