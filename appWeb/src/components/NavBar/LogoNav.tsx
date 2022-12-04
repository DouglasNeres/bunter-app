import LogoBunter from '../../assets/logo-bunter.svg'

export function LogoNav() {
  return (
    <a href="#home">
      <img className='hover:cursor-pointer' src={LogoBunter} alt="Logo do projeto" />
    </a>
  )
}