import SendIcon from '../../assets/send-icon.svg'

export function Form() {
  return(
    <div className="flex flex-col gap-8">
        <strong className="break-words text-2xl">Envio de sugestões <p>para nosso email:</p></strong>
        <div className="flex">
          <input className="pl-4 rounded-md bg-purple-300 outline-none placeholder:text-purpleFifth text-purpleFifth" type="text" placeholder="Sugestão" />
          <button className="flex justify-center items-center rounded-lg bg-purpleThird w-12 h-12 ml-5" type="submit"><img className="w-8 h-7" src={SendIcon} alt="" /></button>
        </div>
        <p className="opacity-50 text-sm">Versão 1.0.0 &copy; BUNTER 2022</p>
      </div>
  )
}