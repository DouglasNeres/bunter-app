export function FooterContent() {
  return (
    <div className='flex gap-20 '>
      <div className="flex flex-col gap-2">
        <strong className="text-3xl mb-5">Tecnologias</strong>
        <p className="text-xl" >Figma</p>
        <p className="text-xl">React</p>
        <p className="text-xl">Tailwind CSS</p>
        <p className="text-xl">React-Native</p>
      </div>

      <div className="flex flex-col gap-2">
        <strong className="text-3xl mb-5">Finalidade</strong>
        <p className="text-xl" >Qualidade</p>
        <p className="text-xl">Segurança</p>
        <p className="text-xl">E-commerce</p>
        <p className="text-xl">Mobile</p>
      </div>

      <div className="flex flex-col gap-2">
        <strong className="text-3xl mb-5">Suporte</strong>
        <p className="text-xl" >Email</p>
        <p className="text-xl">GitHub</p>
        <p className="text-xl">Discord</p>
        <p className="text-xl">Documentações</p>
      </div>
    </div>
  )
}
