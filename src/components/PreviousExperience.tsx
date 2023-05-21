export type Experience = {
        title: string;
        dateRange: {
            from: string;
            to: string;
        };
        content: string;
}

export const PreviousExperienceSet = (
    props: {
        experiences: Experience[]
    }
) => {
    return (
        <div>
            { PreviousExperienceSetHeader () }
            <table>
                {props.experiences.map((experience: Experience) => PreviousExperience(experience))}
            </table>
        </div>
    );
}

export const PreviousExperienceSetHeader = () => {
    return (
        <h2> Previous Experience </h2>
    )
}

export const PreviousExperience = (
    props: Experience
) => {
    return (
        <tbody>
            <tr>
                <td> <h3>{props.title}</h3> </td>
                <td> {props.dateRange.from} - {props.dateRange.to} </td>
            </tr>
            <tr>
                <td colSpan={2}> {props.content} </td>
            </tr>
        </tbody>
    );
};