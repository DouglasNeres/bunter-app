import { About, FooterContent, Form } from "../components";

export function Footer() {
  return (
    <div id="footer" className='flex justify-center items-center gap-20 py-52'>
      <About />
      <FooterContent />
      <Form />
    </div>
  )
}