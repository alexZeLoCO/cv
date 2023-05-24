import "./App.scss";
import { Collapsible } from "./components/Collapsible";
import { PreviousExperienceSet } from "./components/PreviousExperience";
import { Header } from "./components/Header";
import { Tab } from "./components/Tab";
import { GlowingCards } from "./components/GlowingCards";

export default function App() {
  return (
    <div className="App">
      <Header
        pfp=""
        name="Rodríguez López, Alejandro"
        info={[
          {
            k: "Born in",
            v: <>Sep, 2002</>,
          },
          {
            k: "Tlf.",
            v: <>+34 660 51 01 99</>,
          },
          {
            k: "email",
            v: (
              <a href="mailto:alejandro.rod.lop@gmail.com">
                alejandro.rod.lop@gmail.com
              </a>
            ),
          },
          {
            k: "Location.",
            v: <>33204, Gijón, Asturias, Spain</>,
          },
          {
            k: "Driving License",
            v: <>B</>,
          },
          {
            k: "LinkedIn",
            v: <a href="https://www.linkedin.com/in/alex02/">https://www.linkedin.com/in/alex02/</a>
          }
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
        title="Skills"
        children={[
          <Collapsible
            title="Digital Skills"
            children={[
              <div>
                <h3>General Knowledge</h3>
                <table>
                  <tr>
                    <th colSpan={2}>Office Suite</th>
                    <th>Creative Software</th>
                  </tr>
                  <tr>
                    <td>Microsoft Office</td> <td>LibreOffice Suite</td>
                    <td>
                      <ul>
                        <li>Photoshop (CS5)</li>
                        <li>Sony Vegas Pro 13</li>
                        <li>Adobe Flash</li>
                        <li>GIMP 2.0</li>
                        <li>DaVinci Resolve</li>
                      </ul>
                    </td>
                  </tr>
                </table>
                <h3>Programming Knowledge</h3>
                <Tab
                  data={[
                    {
                      tabTitle: "Languages",
                      contentTitle: "Languages",
                      content: (
                        <table className="border_table">
                          <tr>
                            <th>Language</th>
                            <th>Use case</th>
                          </tr>
                          <tr>
                            <td>Python</td>
                            <td>General Purpose</td>
                          </tr>
                          <tr>
                            <td>Java</td>
                            <td>Backend + Software</td>
                          </tr>
                          <tr>
                            <td>SQL</td>
                            <td>Backend + Database</td>
                          </tr>
                          <tr>
                            <td>C / C++</td>
                            <td>HPC + Unix Utilities</td>
                          </tr>
                          <tr>
                            <td>Bash</td>
                            <td>Unix Utilities</td>
                          </tr>
                          <tr>
                            <td>HTML5</td>
                            <td>Web Frontend</td>
                          </tr>
                          <tr>
                            <td>CSS / SCSS</td>
                            <td>Web Frontend</td>
                          </tr>
                          <tr>
                            <td>JavaScript / TypeScript</td>
                            <td>Web Backend</td>
                          </tr>
                          <tr>
                            <td>DrRacket / Haskell</td>
                            <td>Mathematics</td>
                          </tr>
                          <tr>
                            <td>Git</td>
                            <td>Version Control</td>
                          </tr>
                        </table>
                      ),
                    },
                    {
                      tabTitle: "Libraries",
                      contentTitle: "Libraries",
                      content: (
                        <table className="border_table">
                          <tr>
                            <th>Library</th>
                            <th>Use case</th>
                          </tr>
                          <tr>
                            <td>JDBC</td>
                            <td>Java Database Connection</td>
                          </tr>
                          <tr>
                            <td>XSSFWorkspace</td>
                            <td>Java Excel Connection</td>
                          </tr>
                          <tr>
                            <td>Java Swing</td>
                            <td>Frontend</td>
                          </tr>
                          <tr>
                            <td>ReactJS</td>
                            <td>Frontend</td>
                          </tr>
                          <tr>
                            <td>DiscordJS</td>
                            <td>Discord Bot</td>
                          </tr>
                        </table>
                      ),
                    },
                    {
                      tabTitle: "Methodologies",
                      contentTitle: "Methodologies",
                      content: (
                        <table className="border_table">
                          <tr>
                            <th>Methodology</th>
                            <th>Description</th>
                          </tr>
                          <tr>
                            <td>Object Oriented Programming (OOP)</td>
                            <td>
                              Software is divided in objects, design patterns
                              are used frequently. This allows the program to
                              scale easily.
                            </td>
                          </tr>
                          <tr>
                            <td>Multithreaded Programming (HPC)</td>
                            <td>
                              Enables multiple cores from CPUs (OpenMP) and GPUs
                              (CUDA) so they can work on the same task.
                            </td>
                          </tr>
                          <tr>
                            <td>Functional Programming</td>
                            <td>
                              Software is built by defining functions that call
                              one another. Allows to write complex programs with
                              very few lines of code.
                            </td>
                          </tr>
                        </table>
                      ),
                    },
                  ]}
                />
                <br/><h3>Linux</h3>
                  I have been using Linux for years, and since 2021, it is the only OS I use.
                  <ul>
                    <li>Proficient terminal user.</li>
                    <li>Experienced in the optimization of old hardware using Linux.</li>
                    <li>Used to tinkering with the OS and its hardware.</li>
                    <li>Used to communicating with other users from the community.</li>
                    <li>Used to reading & writing useful documentation on different tools.</li>
                  </ul>
                  <h3>Linux</h3>
                  <GlowingCards
                    cardsContent={[
                      { content:<a href="https://www.debian.org/">Debian</a>, link:"https://www.debian.org" },
                      { content:<a href="https://endeavouros.com/">Endeavour OS</a>, link:"https://endeavouros.org" },
                      { content:<a href="https://archlinux.org/">Arch Linux</a>, link:"https://archlinux.org" },
                      { content:<a href="https://manjaro.org">Manjaro</a>, link:"https://manjaro.org" },
                      { content:<a href="https://almalinux.org">Almalinux</a>, link:"https://almalinux.org" },
                      { content:<a href="https://linuxmint.com">Linux Mint</a>, link:"https://www.linuxmint.com" },
                      { content:<a href="https://ubuntu.com/">Ubuntu</a>, link:"https://www.ubuntu.com" }
                    ]}
                  />
              </div>,
            ]}
          />,
          <Collapsible
            title="Language Skills"
            children={[
              <ul>
                <li>
                  {" "}
                  <div>
                    {" "}
                    <h3>Spanish</h3> Mother Tongue{" "}
                  </div>{" "}
                </li>
                <li>
                  {" "}
                  <div>
                    {" "}
                    <h3>English</h3> Certificated by{" "}
                    <a href="https://www.cambridgeenglish.org/exams-and-tests/qualifications/general/">
                      Cambridge
                    </a>
                    <ul>
                      <li>Certificate in Proficiency (C2) [Jun, 2021]</li>
                      <li>Certificate in Advanced English (C1) [Jun, 2019]</li>
                      <li>First Certificate in English (B2) [Jun, 2017]</li>
                      <li>Preliminary English Test (B1) [Jun, 2015]</li>
                      <li>Key English Test (A2) [Jun, 2013]</li>
                    </ul>
                  </div>
                </li>
              </ul>,
            ]}
          />,
        ]}
      />
      <br/> <hr />
      <Collapsible
        title="Studies"
        children={[
          <PreviousExperienceSet
            experiences={[
              {
                title: "Computer Engineering Degree (Asturias, Spain)",
                dateRange: {
                  from: "2020",
                  to: "Present",
                },
                content: (
                  <a href="https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&ved=2ahUKEwj3gLT9pYf_AhV6hv0HHZ35AIEQFnoECAsQAQ&url=https%3A%2F%2Fepigijon.uniovi.es%2F&usg=AOvVaw0qQpZrSD74Mi3q9d803I4t">
                    Escuela Politécnica de Ingeniería de Gijón (Universidad de
                    Oviedo)
                  </a>
                ),
              },
              {
                title: "Highschool (Florida, United States)",
                dateRange: {
                  from: "2017",
                  to: "2020",
                },
                content: (
                  <a href="https://www.academica.school/">
                    Academica International Studies
                  </a>
                ),
              },
              {
                title: "Highschool (Asturias, Spain)",
                dateRange: {
                  from: "2014",
                  to: "2020",
                },
                content: (
                  <a href="https://www.dominicasgijon.es/">
                    Colegio Virgen Mediadora
                  </a>
                ),
              },
            ]}
          />,
        ]}
      />
    </div>
  );
}
