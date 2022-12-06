import Poligono from '../../assets/poligono.svg'
import Polis from '../../assets/poligono2.svg'
import Poligonosos from '../../assets/poligono3.svg'

export function Poligonos(){
  return(
    <div>
      <img id='Poligonosos' className=' absolute left-3/4 top-20' src={Poligonosos} alt="poligono" />
      <img id='Poligono' className=' absolute left-40 top-20' src={Poligono} alt="poligono" />
      <img id='Polis' className=' absolute left-1/3 top-3/4' src={Polis} alt="poligono" />
    </div>
  )
}