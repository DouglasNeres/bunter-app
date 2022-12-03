import { useState } from 'react'
import Tela1 from '../assets/screensImgs/tela1.png'
import Tela2 from '../assets/screensImgs/tela2.png'
import Tela3 from '../assets/screensImgs/tela3.png'
import Tela4 from '../assets/screensImgs/tela4.png'
import Tela5 from '../assets/screensImgs/tela5.png'
import Tela6 from '../assets/screensImgs/tela6.png'
import Tela7 from '../assets/screensImgs/tela7.png'
import Tela8 from '../assets/screensImgs/tela8.png'

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
      image: Tela1,
      title: 'Exibição Tela de Entrada',
      description: 'Entrada de carregamento do aplicativo com a apresentação da logo, nome e slogan.',
      linkTitle: 'Veja mais'
    },
    {
      image: Tela2,
      title: 'Exibição Tela de Início',
      description: 'Uma tela inicial com um carrossel de lojas mais visitadas, depois uma seção de produtos destaque e lojas sugeridas cada uma com uma classificação, foto e um símbolo de coração indicando o botão favoritar, mostrando também a distância.',
      linkTitle: 'Veja mais'
    },
    {
      image: Tela3,
      title: 'Exibição Tela de Buscar',
      description: 'Um conjunto de Categorias, levando a produtos distibuídos na respectiva aba escolhida pelo usuário, assim facilitando a busca por encontrar produtos de acordo seu desejo.',
      linkTitle: 'Veja mais'
    },
    {
      image: Tela4,
      title: 'Exibição Tela Notificações',
      description: 'Uma tela dedicada para melhor comunicação entre cliente e vendedor, permitindo com que o vendedor notifique seus clientes, criando uma melhor interação facilmente.',
      linkTitle: 'Veja mais'
    },
    {
      image: Tela5,
      title: 'Exibição Tela Usuário',
      description: 'Tela destinada a divisão de 3 classes como: Configurações Pessoais, Preferências, Sobre nós e Entrar em Contato. Tendo assim cada campo uma forma mais objetiva de uso.',
      linkTitle: 'Veja mais'
    },
    {
      image: Tela6,
      title: 'Exibição Tela Usuário',
      description: 'Tela destinada a divisão de 3 classes como: Configurações Pessoais, Preferências, Sobre nós e Entrar em Contato. Tendo assim cada campo uma forma mais objetiva de uso.',
      linkTitle: 'Veja mais'
    },
    {
      image: Tela7,
      title: 'Exibição Tela Cadastro',
      description: 'Tela destinada a divisão de 3 classes como: Configurações Pessoais, Preferências, Sobre nós e Entrar em Contato. Tendo assim cada campo uma forma mais objetiva de uso.',
      linkTitle: 'Veja mais'
    },
    {
      image: Tela8,
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
            <button className="border-purpleThird text-purplePrimary flex justify-center items-center border-4 w-16 h-16 text-6xl rounded-2xl disabled:text-gray-100 disabled:border-gray-100" disabled={carrouselIndex <= 0} onClick={handlePrevious}>{"<"}</button>
            <button className="border-purpleThird text-purplePrimary flex justify-center items-center border-4 w-16 h-16 text-6xl rounded-2xl disabled:text-gray-100 disabled:border-gray-100" disabled={carrouselIndex >= carrouselData.length - 1} onClick={handleNext}>{">"}</button>
          </div>
        </div>
      </div>

      <div className='flex flex-col justify-center pl-32 mt-20'>
        <p>Telas</p>
        <h1 className='text-5xl pt-8 w-96 leading-normal font-bold text-purplePrimary'>{carrouselData[carrouselIndex].title}</h1>
        <p className='w-96 font-medium leading-snug pt-3'>{carrouselData[carrouselIndex].description}</p>
        <a href='https://www.figma.com/file/eAwsjgrNO2EJWKuAGVII33/Projeto-Dev-App-BUNTER?node-id=0%3A1&t=axIVFKb5uSNNzssr-0' target="_blank" rel="noopener noreferrer" className="bg-purpleSecond w-52 h-16 mt-16 rounded-lg hover:bg-purple-300 hover:text-purpleThird transition-all flex justify-center items-center">{carrouselData[carrouselIndex].linkTitle}</a>
      </div>
    </div>
  );
}