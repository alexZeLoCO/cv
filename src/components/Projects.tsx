type Proj = {
    name: JSX.Element,
    subtitle: JSX.Element,
    functionalities: string[],
    techStack: string[]
};

export const Projects = (
    props:{
        projects: Proj[]
    }
): JSX.Element => {
    return (
        <div>
            { props.projects.map((project: Proj) => Project(project)) }
        </div>
    );
};

const Project = (
    project: Proj
): JSX.Element => {
    return (
        <p>
            {project.name}
            {project.subtitle}
            <div>=&gt; Functionalities</div>
            <ul> {project.functionalities.map((functionality: string) => <li>{functionality}</li>)} </ul>
            <div>=&gt; Tech Stack</div>
            <ul> {project.techStack.map((tech: string) => <li>{tech}</li>)} </ul>
        </p>
    );
};