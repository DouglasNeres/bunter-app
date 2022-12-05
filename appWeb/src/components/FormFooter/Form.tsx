import SendIcon from '../../assets/send-icon.svg'
import { api } from '../../services/api'
import {useState} from 'react'

//https://sendmessages-deploy-production.up.railway.app/mail



export function Form() {

  const [text , setText] = useState<string>()

  const sendMessage = async () => {
    const a = await api.post('/mail/send' , {
      text,
    })

    setText('')
  }
  

  return (
    <div className="flex flex-col gap-8">
      <strong className="break-words text-2xl">Envio de sugestões <p>para nosso email:</p></strong>
      <div className="flex">
        <input className="pl-4 rounded-md bg-purple-300 outline-none placeholder:text-purpleFifth text-purpleFifth" 
        type="text" 
        placeholder="Sugestão"  
        onChange={e => setText(e.target.value)}
        value={text}
        />
        <button className="flex justify-center items-center rounded-lg bg-purpleThird w-12 h-12 ml-5" onClick={sendMessage}><img className="w-8 h-7" src={SendIcon} alt="" /></button>
      </div>
      <p className="opacity-50 text-sm cursor-text">Versão 1.0.0 &copy; BUNTER 2022</p>
    </div>
  )
}