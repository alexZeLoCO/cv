import "../App.scss";

export type Experience = {
        title: string;
        dateRange: {
            from: string;
            to: string;
        };
        content: JSX.Element;
}

export const PreviousExperienceSet = (
    props: {
        experiences: Experience[]
    }
) => {
    return (
        <div>
            <table>
                <tbody>
                    {props.experiences.map((experience: Experience) => PreviousExperience(experience))}
                </tbody>
            </table>
        </div>
    );
}

export const PreviousExperienceSetHeader = () => {
    return (
        <h2 className="sidelines"> Previous Experience </h2>
    )
}

export const PreviousExperience = (
    props: Experience
) => {
    return (
        <>
            <tr>
                <td> <h3>{props.title}</h3> </td>
                <td className="right"> {props.dateRange.from} - {props.dateRange.to} </td>
            </tr>
            <tr className="experience_content">
                <td colSpan={2}> {props.content} </td>
            </tr>
        </>
    );
};