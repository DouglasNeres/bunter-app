import { LogoNav } from '../NavBar'

import EmailIcon from '../../assets/email-icon.svg'
import LinkedinIcon from '../../assets/linkedin-icon.svg'
import GithubIcon from '../../assets/email-icon.svg'

export function About(){
  return(
    <div className="flex flex-col items-center">
        <LogoNav/>
        <p className="break-words mt-4 text-lg text-left">Cidade de Crateús-CE, no <p>Brasil - EEEP Manoel Mano</p></p>
        <div className="flex gap-8 mt-10">
          <a href=""><img className="h-9 w-9" src={EmailIcon} alt="Ícone de Email" /></a>
          <a href=""><img className="h-9 w-9" src={LinkedinIcon} alt="Ícone do LinkedIn" /></a>
          <a href=""><img className="h-9 w-9" src={GithubIcon} alt="Ícone do GitHub" /></a>
        </div>
      </div>

  )
}