import { useState } from "react"
import Points from '../assets/points.svg'

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
    <div className="flex mt-28">
      <aside className="pl-44 flex flex-col gap-7">
        <h1 className="break-words font-semibold text-5xl leading-normal">Perguntas <p className="text-purplePrimary">mais Frequentes</p></h1>
        <p className="break-words">Sabemos que você pode ter algumas dúvidas, <p>então consulte ao lado para tirar algumas.</p></p>
        <img className="h-36" src={Points} alt="" />
      </aside>
      <article className="m-auto">
        {data.map((item, i) => (
          <div className="item mb-1 py-3 px-5 cursor-pointer">
            <div className="flex justify-between items-center" onClick={() => toogle(i)}>
              <h2 className="text-3xl font-semibold text-purplePrimary">{item.question}</h2>
              <span>{selected === i ? '-' : '+'}</span>
            </div>
              <div className={selected !== i ? 'content' : 'content show'}>{item.answer}</div>
          </div>
        ))}
      </article>
    </div>
  )
}