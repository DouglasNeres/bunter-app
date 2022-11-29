import WorkImage from "../../assets/IWorking.jpeg"
import AvatarIcon from "../../assets/avatar.svg"


export function PersonalCards() {
  return (
    <div className="flex justify-evenly pt-24">
      <div className="bgCard flex flex-col justify-end items-center">
        <img src={AvatarIcon} alt="" />
        <div className="z-10 w-full h-32 bg-gray-400 flex flex-col justify-center items-center gap-3">
          <h2 className="text-2xl text-purpleFifth">Adeilson Aragão</h2>
          <p className="text-xl text-purpleThird">Orientador</p>
        </div>
      </div>

      <div className="bgCard flex flex-col justify-end items-center">
        <img src={AvatarIcon} alt="" />
        <div className="z-10 w-full h-32 bg-gray-400 flex flex-col justify-center items-center gap-3">
          <h2 className="text-2xl text-purpleFifth">Douglas Neres</h2>
          <p className="text-xl text-purpleThird">Participante</p>
        </div>
      </div>

      <div className="bgCard flex flex-col justify-end items-center">
        <img src={AvatarIcon} alt="" />
        <div className="z-10 w-full h-32 bg-gray-400 flex flex-col justify-center items-center gap-3">
          <h2 className="text-2xl text-purpleFifth">Pedro Henrique</h2>
          <p className="text-xl text-purpleThird">Participante</p>
        </div>
      </div>
    </div>
  )
}