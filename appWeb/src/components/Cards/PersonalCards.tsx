import AdeilsonImage from "../../assets/dd.jpg"
import AdeilsonImage2 from "../../assets/dd 1.png"
import DouglasImage from "../../assets/dn.jpg"
import DouglasImage2 from "../../assets/dn 1.png"
import PedroImage from "../../assets/pp.jpeg"
import PedroImage2 from "../../assets/pp 1.png"

export function PersonalCards() {
  return (
    <div className="flex justify-evenly pt-24">
      <div className="bgCard flex flex-col justify-end items-center">
        <img className="" src={AdeilsonImage2} alt="" />
        <div className="textsBg flex flex-col justify-center items-center gap-3 text-purpleFifth bg-zinc-300 bg-opacity-80 rounded-lg hover:bg-purplePrimary transition-all">
          <h2 className="text-xl">Adeilson Aragão</h2>
          <p className="text-lg text-zinc-900">Orientador</p>
          </div>
      </div>
      
      <div className="bgCard flex flex-col justify-end items-center">
        <img className="" src={DouglasImage2} alt="" />
        <div className="textsBg flex flex-col justify-center items-center text-purpleFifth gap-3 bg-zinc-300 bg-opacity-80 rounded-lg hover:bg-purplePrimary transition-all">
          <h2 className="text-xl text-purpleFifth">Douglas Neres</h2>
          <p className="text-lg text-zinc-900">Participante</p>
        </div>
      </div>
      
      <div className="bgCard flex flex-col justify-end items-center">
        <img className="" src={PedroImage2} alt="" />
        <div className="textsBg flex flex-col justify-center items-center gap-3 bg-zinc-300 bg-opacity-80 rounded-lg hover:bg-purplePrimary transition-all">
          <h2 className="text-xl text-purpleFifth">Pedro Henrique</h2>
          <p className="text-lg text-zinc-900">Participante</p>
        </div>
      </div>
      
    </div>
  )
}