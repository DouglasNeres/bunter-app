import FastIcon from '../../assets/fast-icon.svg'
import NetworkIcon from '../../assets/network-icon.svg'
import SecurityIcon from '../../assets/security-icon.svg'

export function PartsBlocks(){
  return(
    <div className="flex pt-24">
        <div className='flex flex-col border-r-2 px-10'>
          <div className='flex items-center gap-5'>
            <img className='h-16' src={FastIcon} alt="Ícone de Rapidez" />
            <h2 className='text-3xl font-medium'>Rapidez</h2>
          </div>
          <p className='break-words text-center pt-4 text-xl'>Velocidade de entrega,
            <p> com desempenho e </p>
            <p>agilidade para sua melhor </p>
            experiência.</p>
        </div>

        <div className='flex flex-col border-r-2 px-20'>
          <div className='flex items-center gap-5'>
            <img className='h-16' src={NetworkIcon} alt="Ícone de Rede/Comunicação" />
            <h2 className='text-3xl font-medium'>Comunicação</h2>
          </div>
          <p className='break-words text-center pt-4 text-xl'>Comunicação cliente -
            <p>vendedor mais direta,</p>
            <p>dificultando mal</p>
            entendidos.</p>
        </div>

        <div className='flex flex-col px-10'>
          <div className='flex items-center gap-5'>
            <img className='h-16' src={SecurityIcon} alt="Ícone de Segurança" />
            <h2 className='text-3xl font-medium'>Segurança</h2>
          </div>
          <p className='break-words text-center pt-4 text-xl'>Nada melhor do que
            <p>comprar sem medo de ser</p>
            <p>feliz, assim trazendo a</p>
            <p>segurança que sua compra</p>
            precisa.</p>
        </div>
      </div>

  )
}