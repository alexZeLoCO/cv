import './App.scss';
import { PreviousExperienceSet } from './components/PreviousExperience';

function App() {
  return (
    <div className="App">
      <h1>Alex</h1>
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
