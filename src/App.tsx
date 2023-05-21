import './App.scss';
import { PreviousExperienceSet } from './components/PreviousExperience';
import { Header } from "./components/header/Header";

export default function App() {
  return (
    <div className="App">
      <Header/>
      <PreviousExperienceSet experiences={[
        {
          title: "System admin",
          dateRange: {
            from: "2021",
            to: "2022"
          },
          content: "fuck you"
        }
     ]} />
    </div>
  );
}
