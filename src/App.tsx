import "./App.scss";
import { Collapsible } from "./components/Collapsible";
import { PreviousExperienceSet } from "./components/PreviousExperience";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div className="App">
    </div>
  ); 
}

/*
export default function App() {
  return (
    <div className="App">
      <Header
        pfp=""
        name="Rodríguez López, Alejandro"
        info={[
          {
            k: "Born in",
            v: "Sep 2002",
          },
          {
            k: "Tlf.",
            v: "+34 660 51 01 99",
          },
          {
            k: "email",
            v: "alejandro.rod.lop@gmail.com",
          },
          {
            k: "Location.",
            v: "33204, Gijón, Asturias, Spain",
          },
          {
            k: "Driving License",
            v: "B",
          },
        ]}
      />
      <hr />
      <Collapsible
        title="Previous Experience"
        children={[
          <PreviousExperienceSet
            experiences={[
              {
                title: "IT System Configurator",
                dateRange: {
                  from: "May 2021",
                  to: "Sep 2022",
                },
                content: (
                  <ul>
                    <li>
                      60% of the computer systems used by the employees were
                      renovated. This upgraded notably their performance as well
                      as availability and reliability.
                    </li>
                    <li>
                      A new software written in Java was implemented. It is
                      currently being used to keep track of undone tasks in the
                      company.
                    </li>
                    <li>
                      I assisted on a help-desk, offering technical insight as
                      well as explanation on how the new system worked.
                    </li>
                    <li>
                      I redesigned the complete structure of the IT system, as
                      well as the administration and storage networks. After
                      said implementations, the security of the information, its
                      indexing, availability and access times were greatly
                      improved.
                    </li>
                  </ul>
                ),
              },
              {
                title: "Private Tutor",
                dateRange: {
                  from: "May 2020",
                  to: "Sep 2022",
                },
                content: (
                  <ul>
                    <li>
                      I assisted various high school students with their Python
                      assignments. 70% of the students passed the exams on the
                      subject, and of these, 60% obtained grades above the
                      average of the passing grades of the class.
                    </li>
                  </ul>
                ),
              },
            ]}
          />,
        ]}
      />
      <hr />
      <Collapsible
        title="Qualifications"
        children={[
          <Collapsible
            title="Digital Skills"
            children={[
              <div>
                <h3>General Knowledge</h3>              
                <table>
                  <tr><th colSpan={2}>Office Suite</th><th>Creative Software</th></tr>
                  <tr><td>
                    <ul>
                      <li>Microsoft Word</li>
                      <li>Microsoft Excel</li>
                      <li>Microsoft Powerpoint</li>
                      <li>Microsoft Visio</li>
                    </ul>
                  </td> <td>
                    <ul>
                      <li>Outlook</li>
                      <li>Zoom</li>
                      <li>LibreOffice Writer</li>
                      <li>LibreOffice Calc</li>
                      <li>LibreOffice Draw</li>
                    </ul>
                  </td>
                  <td>
                    <ul>
                      <li>Photoshop (CS5)</li>
                      <li>Sony Vegas Pro 13</li>
                      <li>Adobe Flash</li>
                      <li>GIMP 2.0</li>
                      <li>DaVinci Resolve</li>
                    </ul>
                  </td></tr>
                </table>
                <h3>Programming Knowledge</h3>
                <table>
                  <tr><th colSpan={2}>Languages</th><th colSpan={2}>Libraries</th><th rowSpan={2}>Methodologies</th></tr>
                  <tr><td>Language</td><td>Used for</td><td>Library</td><td>Used for</td><td></td></tr>
                  <tr>
                    <td> Python </td> <td> General Purpose </td> <td> JDBC </td> <td> Java Database Connections </td> <td> Object Oriented Programming (OOP) </td>
                  </tr> <tr>
                    <td> Java </td> <td> Backend + Software </td> <td> ReactJS </td> <td> Web Development </td> <td> Functional Programming </td>
                  </tr> <tr>
                    <td> SQL </td> <td> Backend </td> <td> SASS / SCSS </td> <td> Web Development </td> <td> Mutithreaded Programming (OpenMP + CUDA) </td>
                  </tr> <tr>
                    <td> C / C++ </td> <td> High Performance Computing + Unix Utilities </td> <td> XSSFWorkbook </td> <td> Reading and Writing Excel from Java </td>
                  </tr> <tr>
                    <td> Bash </td> <td> Unix Utilities </td> 
                  </tr> <tr>
                    <td> HTML5 </td> <td> Web Frontend </td>
                  </tr> <tr>
                    <td> JavaScript / TypeScript </td> <td> General Purpose + Web </td>
                  </tr> <tr>
                    <td> CSS / SCSS </td> <td> Web Frontend </td>
                  </tr> <tr>
                    <td> DrRacket / Haskell </td> <td> Mathematics </td>
                  </tr>
                </table>
              </div>
            ]}
          />,
          <Collapsible
            title="Language Skills"
            children={[
              <ul>
                <li> <div> <h3>Spanish</h3> Mother Tongue </div> </li>
                <li> <div> <h3>English</h3> Certificated by
                  <ul>
                    <li>Certificate in Proficiency (C2) [Jun, 2021]</li>
										<li>Certificate in Advanced English (C1) [Jun, 2019]</li>
										<li>First Certificate in English (B2) [Jun, 2017]</li>
										<li>Preliminary English Test (B1) [Jun, 2015]</li>
										<li>Key English Test (A2) [Jun, 2013]<br /></li>
                  </ul> 
                </div> </li>
              </ul>
            ]}
          />
        ]}
      />
    </div>
  );
}
*/