import DouglasImage from "../../assets/IWorking.jpeg"
import PedroImage from "../../assets/pp.jpeg"

export function PersonalCards() {
  return (
    <div className="flex justify-evenly pt-24">
      <div className="flex flex-col justify-end items-center">
        <img className="imgCard" src={DouglasImage} alt="" />
        <div className="textsBg flex flex-col justify-center items-center gap-3 bg-zinc-300 bg-opacity-80 rounded-lg">
          <h2 className="text-2xl text-purpleFifth">Adeilson Aragão</h2>
          <p className="text-xl text-purpleThird">Orientador</p>
        </div>
      </div>
      
      <div className="flex flex-col justify-end items-center">
        <img className="imgCard" src={DouglasImage} alt="" />
        <div className="textsBg flex flex-col justify-center items-center gap-3 bg-zinc-300 bg-opacity-80 rounded-lg">
          <h2 className="text-2xl text-purpleFifth">Douglas Neres</h2>
          <p className="text-xl text-purpleThird">Participante</p>
        </div>
      </div>
      
      <div className="flex flex-col justify-end items-center">
        <img className="imgCard" src={PedroImage} alt="" />
        <div className="textsBg flex flex-col justify-center items-center gap-3 bg-zinc-300 bg-opacity-80 rounded-lg">
          <h2 className="text-2xl text-purpleFifth">Pedro Henrique</h2>
          <p className="text-xl text-purpleThird">Participante</p>
        </div>
      </div>
      
    </div>
  )
}