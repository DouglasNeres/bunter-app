import Devices from '../../assets/devices.png'

export function Content() {
  return (
    <div className='contentMain px-40 my-20'>
      <aside className='aside absolute lg:flex lg:flex-col '>
        <h1 className='font-bold break-normal text-5xl flex flex-col gap-3'>Bunter é tudo <h1>que você precisa</h1> em um só lugar.</h1>
        <p className='font-normal text-2xl pt-8 flex flex-col gap-1 pb-8'>A melhor experiência de compra, venda,<p className='text-purplePrimary break-all'> confiança e comunicação é com Bunter!</p></p>
        <a href='#intro' className='flex justify-center items-center h-16 w-72 rounded-xl bg-purpleSecond hover:bg-purple-300 hover:text-purpleThird transition-all'>Confira abaixo!</a>
      </aside>
      <article className='article'>
        <img className="absolute h-2/3 lg:absolute lg:h-3/4 lg: right-44" src={Devices} alt="Dispositivos Bunter" />
      </article>
    </div>
  )
} 