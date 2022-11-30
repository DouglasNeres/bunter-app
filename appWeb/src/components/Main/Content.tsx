import Devices from '../../assets/devices.png'

export function Content() {
  return (
    <div className='flex px-40 my-20'>
    <aside className='flex flex-col '>
      <h1 className='font-bold break-normal text-5xl flex flex-col gap-3'>Bunter é tudo <h1>que você precisa</h1> em um só lugar.</h1>
      <strong className='font-normal text-2xl pt-8 flex flex-col gap-1 pb-8'>A melhor experiência de compra, venda,<p className='text-purplePrimary break-all'> confiança e comunicação é com Bunter!</p></strong>
      <button className=' h-16 w-72 rounded-xl bg-purpleSecond hover:bg-purple-300 hover:text-purpleThird transition-all'>Click aqui!</button>
    </aside>
    <article>
      <img className="absolute h-3/4 right-44" src={Devices} alt="Dispositivos Bunter" /> 
    </article>
    </div>
  )
} 