import { AppContexts } from "./contexts";
import { Introduction, Landing, Launch, MeetUs, Screens, Faqs, Footer } from "./pages";

export default function App() {
  return (
    <AppContexts>
      <Landing />
      <Introduction />
      <Screens />
      <Launch />
      <MeetUs />
      <Faqs />
      <Footer />
    </AppContexts>
  )
}

