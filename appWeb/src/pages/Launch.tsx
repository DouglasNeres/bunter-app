import GooglePlayBadge from '../assets/google-play-badge.svg'
import AppStoreBadge from '../assets/app-store-bagde.svg'

export function Launch() {
  return (
    <div id='launch' className='pt-44'>
    <div className="bg-purpleFifth rounded-lg shadow-md shadow-purplePrimary w-5/6 h-80 flex items-center m-auto">
      <aside className="m-auto">
        <h1 className="break-words text-5xl font-medium leading-normal">Em produção para o <p>Grande Lançamento!</p></h1>
      </aside>
      <article className='m-auto'>
        <p className='text-center text-xl pb-7'>Em breve nas Lojas de Aplicativo:</p>
        <div className='flex h-16 gap-4'>
          <img src={GooglePlayBadge} alt="Badge da Google Play" />
          <img src={AppStoreBadge} alt="Badge da App Store" />
        </div>
      </article>
    </div>
    </div>
  )
}