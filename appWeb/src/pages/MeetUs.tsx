import { PersonalCards } from "../components";
import ArrowIcon from "../assets/arrow-icon.svg"

export function MeetUs() {
  return (
    <div>
      <div className="flex justify-center pt-56 items-center gap-10">
        <img className="h-4" src={ArrowIcon} alt="Ícone de seta" />
        <h1 className="text-4xl font-semibold">Conheça-nos</h1>
        <img className="h-4" src={ArrowIcon} alt="Ícone de seta" />
      </div>
      <PersonalCards />
    </div>
  )
} 