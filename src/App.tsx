import "./App.scss";
import { Collapsible } from "./components/Collapsible";
import { PreviousExperienceSet } from "./components/PreviousExperience";
import { Header } from "./components/Header";
import { Tab } from "./components/Tab";
import { GlowingCards } from "./components/GlowingCards";
import { Projects } from "./components/Projects";

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
        title="Projects"
        children={[
          <Projects
            projects={[
              {
                name: <h3>Conway's Game of Life</h3>,
                subtitle: <strong>Simulation, 2022 | Sole Developer</strong>,
                functionalities: ["Select different preloaded populations", "Create custom populations with interactive GUI", "Limit number of generations", "View each generation"],
                techStack: ["HTML5", "CSS", "JavaScript", "Git", "Visual Studio Code"]
              }, {
                name: <h3>HPC Benchmark</h3>,
                subtitle: <strong>Multithreading Benchmark (CPU/GPU), 2022 | Sole Developer</strong>,
                functionalities: ["Test different workloads", "Test different memory configurations", "Render black & white fractals"],
                techStack: ["C", "Python", "Linux", "OpenMP", "CUDA", "Git", "Vim"]
              }, {
                name: <h3>Avisos</h3>,
                subtitle: <strong>Ticket Software, 2022 | Sole Developer</strong>,
                functionalities: ["Create/Edit ticket", "Clear ticket", "Filter tickets", "Accesible from anywhere"],
                techStack: ["PostgreSQL", "Java", "Javax Swing", "Windows (Clients)", "Linux (Server)", "Eclipse"]
              }, {
                name: <h3>Numerical Analysis</h3>,
                subtitle: <strong>Program used to apply numerical methods | Sole Developer</strong>,
                functionalities: ["Interpolation (Lagrange / Newton) + Chevyshev nodes", "Differentiation", "Integration"],
                techStack: ["C", "Haskell", "Linux", "Vim"]
              }, {
                name: <h3>Discord Bot</h3>,
                subtitle: <strong>General Purpose / Management, 2023 | Sole Developer</strong>,
                functionalities: ["Keep track of members", "Warn / Kick / Ban members", "Create and resolve giveaways", "Ticket system", "Self Hosted on Raspberry Pi"],
                techStack: ["TypeScript", "DiscordJS", "Git", "Vim"]
              }, {
                name: <h3>Excel Parser</h3>,
                subtitle: <strong>Ad-hoc parser, 2023 | Sole Developer</strong>,
                functionalities: ["Find quantities needed in each bank account to meet expenses"],
                techStack: ["Java", "Javax Swing", "XSSFWorkbook", "Eclipse"]
              }, {
                name: <h3>COIIPA</h3>,
                subtitle: <strong>School Courses Administration Software (Simulation), 2023 | Team of 4</strong>,
                functionalities: ["Register / Edit courses", "Courses may have different prices for different categories of students", "Payment registration", "Course filtering"],
                techStack: ["SQLite3", "Java", "Javax Swing", "Git", "Eclipse"]
              }, {
                name: <h3>Online Resume</h3>,
                subtitle: <strong>My own resume accessible from anywhere, 2023 | Sole Developer</strong>,
                functionalities: ["View resume", "Collapsing sections", "Self Hosted on Raspberry Pi"],
                techStack: ["HTML5", "SCSS", "ReactJS", "TypeScipt", "Git", "Vim", "Visual Studio Code"]
              }
            ]}
          />
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
                      { content:<a href="https://endeavouros.com/">Endeavour OS</a>, link:"https://endeavouros.com" },
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
