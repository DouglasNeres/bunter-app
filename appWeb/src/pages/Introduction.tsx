import { PartsBlocks } from "../components";

export function Introduction() {
  return (
    <div id="intro" className='flex justify-center items-center flex-col p-36'>
      <h1 className='font-semibold text-5xl break-words leading-tight'>Muito mais que um <strong className='text-purpleSecond'>projeto</strong>,
        <p> a Iniciativa de <strong className='text-purpleSecond'>Mudança!</strong></p></h1>

      <div className='flex justify-around pt-10'>
        <p className='text-left w-2/6'>Projetar o futuro não é simples, porém jamais será
          impossível, cada investimento e esforço no seu objetivo, sempre será bem recompensado.</p>

        <p className='text-left break-words'>Assim desenvolvendo tamanha aplicação em <p>busca
          do avanço.</p>
        </p>
      </div>

    <PartsBlocks />

    </div>
  )
}