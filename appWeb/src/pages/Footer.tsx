import { About, FooterContent, Form } from "../components";

export function Footer() {
  return (
    <div className='flex justify-center items-center gap-20 mt-20 h-96'>
      <About />
      <FooterContent />
      <Form />
    </div>
  )
}