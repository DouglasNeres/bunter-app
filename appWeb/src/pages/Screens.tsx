import { useState } from 'react';
import Tela1 from '../assets/screensImgs/tela1.png'

export function Screens() {

  const [carrouselIndex, setCarrouselIndex] = useState(0);

  const handleNext = () => {
    setCarrouselIndex(carrouselIndex + 1);
  }

  const handlePrevious = () => {
    setCarrouselIndex(carrouselIndex - 1);
  }

  const carrouselData = [
    {
      image: 'https://s3-alpha-sig.figma.com/img/7081/b30d/125c0003ddd1e7233f65a463bfa25431?Expires=1670803200&Signature=Yu1Mdc1GDD7DbuS94i5A45VDuKiU1WIqWTDLIZPuxyUAX1zQj8DIOb4bMLF6A-A3AExEXx3vJuoX3SLhcIKUJ7CIWew3wlze~53jghKKDcP0SOfha1usu~sF1t5IVyPSoFSVLlllrAgHuoABmHIvuFV-v04rgX92uekELb7rw2x2w8RtT6NI~YbqP7Q-YI5vvibBhcVe-YVCo7SkKZ26PeqlbDR4pHpiFGB0dikFIYuyX7c-OVpnK68pMuOAecROt7H0Q0Xrh6r2o8NnVn58j9rnjVndqr9g7Mcn-tOGe1q4XbmvYrXfnsAXKHIoAJOzt-rGCk1tcOjBAk5uLju5HA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      title: 'Exibição Tela de Entrada',
      description: 'Entrada de carregamento do aplicativo com a apresentação da logo, nome e slogan.',
      linkTitle: 'Veja mais'
    },
    {
      image: 'https://s3-alpha-sig.figma.com/img/7081/b30d/125c0003ddd1e7233f65a463bfa25431?Expires=1670803200&Signature=Yu1Mdc1GDD7DbuS94i5A45VDuKiU1WIqWTDLIZPuxyUAX1zQj8DIOb4bMLF6A-A3AExEXx3vJuoX3SLhcIKUJ7CIWew3wlze~53jghKKDcP0SOfha1usu~sF1t5IVyPSoFSVLlllrAgHuoABmHIvuFV-v04rgX92uekELb7rw2x2w8RtT6NI~YbqP7Q-YI5vvibBhcVe-YVCo7SkKZ26PeqlbDR4pHpiFGB0dikFIYuyX7c-OVpnK68pMuOAecROt7H0Q0Xrh6r2o8NnVn58j9rnjVndqr9g7Mcn-tOGe1q4XbmvYrXfnsAXKHIoAJOzt-rGCk1tcOjBAk5uLju5HA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      title: 'Exibição Tela de Início',
      description: 'Uma tela inicial com um carrossel de lojas mais visitadas, depois uma seção de produtos destaque e lojas sugeridas cada uma com uma classificação, foto e um símbolo de coração indicando o botão favoritar, mostrando também a distância.',
      linkTitle: 'Veja mais'
    },
    {
      image: 'https://s3-alpha-sig.figma.com/img/7081/b30d/125c0003ddd1e7233f65a463bfa25431?Expires=1670803200&Signature=Yu1Mdc1GDD7DbuS94i5A45VDuKiU1WIqWTDLIZPuxyUAX1zQj8DIOb4bMLF6A-A3AExEXx3vJuoX3SLhcIKUJ7CIWew3wlze~53jghKKDcP0SOfha1usu~sF1t5IVyPSoFSVLlllrAgHuoABmHIvuFV-v04rgX92uekELb7rw2x2w8RtT6NI~YbqP7Q-YI5vvibBhcVe-YVCo7SkKZ26PeqlbDR4pHpiFGB0dikFIYuyX7c-OVpnK68pMuOAecROt7H0Q0Xrh6r2o8NnVn58j9rnjVndqr9g7Mcn-tOGe1q4XbmvYrXfnsAXKHIoAJOzt-rGCk1tcOjBAk5uLju5HA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      title: 'Exibição Tela de Buscar',
      description: 'Um conjunto de Categorias, levando a produtos distibuídos na respectiva aba escolhida pelo usuário, assim facilitando a busca por encontrar produtos de acordo seu desejo.',
      linkTitle: 'Veja mais'
    },
    {
      image: 'https://s3-alpha-sig.figma.com/img/9218/01de/5383caeb071679c15f74e0ce02f3e090?Expires=1670803200&Signature=dvtr3ICYCMes1U2RLmEgw6d6JMavqDIHHMIeHwFQ7bNSwIcBEwojwarkO4hkyjNW1SR08qwCcBRr~rBVB6lRIUrZ2yceT0eMaeM0wNwmdhoKufwpqlXByDJIqtfIXZ~CX0lQbAekmBIyyr5jv4IiQS5a4XS-ngGWdqATcR90po5nH-iOjJiJ61AQZjhoRS7ikiHqTeNMLpyRLLxHeO-ODzQbW~yn1LjTuEyqr9FPACLZbu2bctThiUvwxNIbpy~cWnMz63IGu9WdfYlcEsY1~65L~XdmKqX3S~x5lm2M0FVubc8g64wR4B5jSQqzIWR4LPQAQcZ1wY09EBo3fMgeJA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      title: 'Exibição Tela Notificações',
      description: 'Uma tela dedicada para melhor comunicação entre cliente e vendedor, permitindo com que o vendedor notifique seus clientes, criando uma melhor interação facilmente.',
      linkTitle: 'Veja mais'
    },
    {
      image: 'https://s3-alpha-sig.figma.com/img/9218/01de/5383caeb071679c15f74e0ce02f3e090?Expires=1670803200&Signature=dvtr3ICYCMes1U2RLmEgw6d6JMavqDIHHMIeHwFQ7bNSwIcBEwojwarkO4hkyjNW1SR08qwCcBRr~rBVB6lRIUrZ2yceT0eMaeM0wNwmdhoKufwpqlXByDJIqtfIXZ~CX0lQbAekmBIyyr5jv4IiQS5a4XS-ngGWdqATcR90po5nH-iOjJiJ61AQZjhoRS7ikiHqTeNMLpyRLLxHeO-ODzQbW~yn1LjTuEyqr9FPACLZbu2bctThiUvwxNIbpy~cWnMz63IGu9WdfYlcEsY1~65L~XdmKqX3S~x5lm2M0FVubc8g64wR4B5jSQqzIWR4LPQAQcZ1wY09EBo3fMgeJA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      title: 'Exibição Tela Usuário',
      description: 'Tela destinada a divisão de 3 classes como: Configurações Pessoais, Preferências, Sobre nós e Entrar em Contato. Tendo assim cada campo uma forma mais objetiva de uso.',
      linkTitle: 'Veja mais'
    },
    {
      image: 'https://s3-alpha-sig.figma.com/img/9218/01de/5383caeb071679c15f74e0ce02f3e090?Expires=1670803200&Signature=dvtr3ICYCMes1U2RLmEgw6d6JMavqDIHHMIeHwFQ7bNSwIcBEwojwarkO4hkyjNW1SR08qwCcBRr~rBVB6lRIUrZ2yceT0eMaeM0wNwmdhoKufwpqlXByDJIqtfIXZ~CX0lQbAekmBIyyr5jv4IiQS5a4XS-ngGWdqATcR90po5nH-iOjJiJ61AQZjhoRS7ikiHqTeNMLpyRLLxHeO-ODzQbW~yn1LjTuEyqr9FPACLZbu2bctThiUvwxNIbpy~cWnMz63IGu9WdfYlcEsY1~65L~XdmKqX3S~x5lm2M0FVubc8g64wR4B5jSQqzIWR4LPQAQcZ1wY09EBo3fMgeJA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      title: 'Exibição Tela Usuário',
      description: 'Tela destinada a divisão de 3 classes como: Configurações Pessoais, Preferências, Sobre nós e Entrar em Contato. Tendo assim cada campo uma forma mais objetiva de uso.',
      linkTitle: 'Veja mais'
    },
    {
      image: 'https://s3-alpha-sig.figma.com/img/9218/01de/5383caeb071679c15f74e0ce02f3e090?Expires=1670803200&Signature=dvtr3ICYCMes1U2RLmEgw6d6JMavqDIHHMIeHwFQ7bNSwIcBEwojwarkO4hkyjNW1SR08qwCcBRr~rBVB6lRIUrZ2yceT0eMaeM0wNwmdhoKufwpqlXByDJIqtfIXZ~CX0lQbAekmBIyyr5jv4IiQS5a4XS-ngGWdqATcR90po5nH-iOjJiJ61AQZjhoRS7ikiHqTeNMLpyRLLxHeO-ODzQbW~yn1LjTuEyqr9FPACLZbu2bctThiUvwxNIbpy~cWnMz63IGu9WdfYlcEsY1~65L~XdmKqX3S~x5lm2M0FVubc8g64wR4B5jSQqzIWR4LPQAQcZ1wY09EBo3fMgeJA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      title: 'Exibição Tela Cadastro',
      description: 'Tela destinada a divisão de 3 classes como: Configurações Pessoais, Preferências, Sobre nós e Entrar em Contato. Tendo assim cada campo uma forma mais objetiva de uso.',
      linkTitle: 'Veja mais'
    },
    {
      image: 'https://s3-alpha-sig.figma.com/img/9218/01de/5383caeb071679c15f74e0ce02f3e090?Expires=1670803200&Signature=dvtr3ICYCMes1U2RLmEgw6d6JMavqDIHHMIeHwFQ7bNSwIcBEwojwarkO4hkyjNW1SR08qwCcBRr~rBVB6lRIUrZ2yceT0eMaeM0wNwmdhoKufwpqlXByDJIqtfIXZ~CX0lQbAekmBIyyr5jv4IiQS5a4XS-ngGWdqATcR90po5nH-iOjJiJ61AQZjhoRS7ikiHqTeNMLpyRLLxHeO-ODzQbW~yn1LjTuEyqr9FPACLZbu2bctThiUvwxNIbpy~cWnMz63IGu9WdfYlcEsY1~65L~XdmKqX3S~x5lm2M0FVubc8g64wR4B5jSQqzIWR4LPQAQcZ1wY09EBo3fMgeJA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      title: 'Exibição Tela Login',
      description: 'Tela destinada a divisão de 3 classes como: Configurações Pessoais, Preferências, Sobre nós e Entrar em Contato. Tendo assim cada campo uma forma mais objetiva de uso.',
      linkTitle: 'Veja mais'
    },
  ];

  return (
    <div className='flex'>
      <div className="pt-48 pl-64">
        <div className='flex justify-center items-center flex-col pl-32'>
          <img className="h-560 hover:relative bottom-2 shadow-md shadow-white rounded-3xl" src={carrouselData[carrouselIndex].image} alt="" />
          <div className="mt-7 flex items-center gap-8 pt-8 border-t-8 rounded-sm">
            <button className="flex justify-center items-center border-4 w-16 h-16 text-6xl rounded-2xl" disabled={carrouselIndex <= 0} onClick={handlePrevious}>{"<"}</button>
            <button className="flex justify-center items-center border-4 w-16 h-16 text-6xl rounded-2xl" disabled={carrouselIndex >= carrouselData.length - 1} onClick={handleNext}>{">"}</button>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center pl-32 mt-20'>
        <p>Telas</p>
        <h1 className='text-5xl pt-8 w-96 leading-normal font-bold text-purplePrimary'>{carrouselData[carrouselIndex].title}</h1>
        <p className='w-96 font-medium leading-snug pt-3'>{carrouselData[carrouselIndex].description}</p>
        <button className="bg-purpleSecond w-52 h-16 mt-16 rounded-lg hover:bg-purple-300 hover:text-purpleThird transition-all">{carrouselData[carrouselIndex].linkTitle}</button>
      </div>
    </div>
  );
}