import { useState } from "react"
import Points from '../assets/points.svg'
import ArrowUp from '../assets/arrow-up.svg'
import ArrowDown from '../assets/arrow-down.svg'

export function Faqs() {

  const data = [
    {
      question: 'Por que Bunter?',
      answer: 'Quando pensamos em várias compras em um só lugar, temos a idéia de um centro de compras, com isso vindo do inglês BUY CENTER, veio a idéia da junção BUNTER.'
    },
    {
      question: 'Por que Usar?',
      answer: 'Quando pensamos em várias compras em um só lugar, temos a idéia de um centro de compras, com isso vindo do inglês BUY CENTER, veio a idéia da junção BUNTER.'
    },
    {
      question: 'Como Funciona?',
      answer: 'Quando pensamos em várias compras em um só lugar, temos a idéia de um centro de compras, com isso vindo do inglês BUY CENTER, veio a idéia da junção BUNTER.'
    },

  ]

  const [selected, setSelected] = useState(null)

  const toogle = (i: any) => {
    if (selected === i) {
      return setSelected(null)
    }

    setSelected(i)
  }

  return (
    <div id="faqs" className="flex pt-40">
      <aside className="pl-44 flex flex-col gap-10">
        <h1 className="break-words font-semibold text-5xl leading-normal">Perguntas <p className="text-purplePrimary">mais Frequentes</p></h1>
        <p className="break-words">Sabemos que você pode ter algumas dúvidas, <p>então consulte ao lado para tirar algumas.</p></p>
        <img className="h-36" src={Points} alt="" />
      </aside>

      <article className="m-auto">
        {data.map((item, i) => (
          <div className="flex flex-col gap-3 mb-1 py-3 px-5 cursor-pointer border-b-2 bg-zinc-900 shadow-sm shadow-gray-200 rounded-lg">
            <div className="flex justify-between items-center" onClick={() => toogle(i)}>
              <h2 className="text-3xl font-semibold text-purplePrimary">{item.question}</h2>
              <span className="w-6">{selected === i ? <img src={ArrowUp} alt="" /> : <img src={ArrowDown} alt="" />}</span>
            </div>
              <div className={selected !== i ? 'content' : 'content show'}>{item.answer}</div>
          </div>
        ))}
      </article>
    </div>
  )
}