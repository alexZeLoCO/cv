
export type InfoEntryData = {
    k: string,
    v: string
}

export const MyInfo = (
    props:{
        entries: InfoEntryData[]
    }
) => {
    return (
        <div id="my_info">
            <ul>
                <li>{ props.entries.map(entry => <MyInfoEntry k={entry.k} v={entry.v} />)}</li>
            </ul>
        </div>
    );
}

const MyInfoEntry = (data: InfoEntryData) => {
    return (
        <div> <span className="font_accent">{ data.k }</span>: { data.v} </div>
    );
}