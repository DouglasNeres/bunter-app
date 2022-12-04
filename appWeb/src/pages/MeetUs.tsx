import { PersonalCards } from "../components";
import Lines1 from "../assets/lines1.svg"
import Lines2 from "../assets/lines2.svg"

export function MeetUs() {
  return (
    <div id="meetus" className="pt-28">
      <div className="flex justify-center items-center gap-10">
        <img className="" src={Lines1} alt="Ícone de seta" />
        <h1 className="text-3xl font-semibold">Conheça-nos</h1>
        <img className="" src={Lines2} alt="Ícone de seta" />
      </div>
      <PersonalCards />
    </div>
  )
} 