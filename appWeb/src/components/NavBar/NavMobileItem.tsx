import { useNavMobileContext } from "../../contexts";

type Props = {
  children: React.ReactNode
}

export function NavMobileItem({children }: Props) {
  const { setIsVisible } = useNavMobileContext()
  function handleButtonClick() {
    setIsVisible(false)
  }

  return (
    <button 
    onClick={handleButtonClick}
    className='flex w-full cursor-pointer hover:text-slate-300 transition-all bg-zinc-900 px-5 py-3 border-b-2 border-zinc-700 hover:bg-zinc-700'>
      {children}
    </button>

  )
}