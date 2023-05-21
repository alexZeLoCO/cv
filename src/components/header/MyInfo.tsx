import "../../App.scss";

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
        <div>
            <ul className="list_none">
                <li>{ props.entries.map(entry => <MyInfoEntry k={entry.k} v={entry.v} />)}</li>
            </ul>
        </div>
    );
}

const MyInfoEntry = (data: InfoEntryData) => {
    return (
        <div> <span className="accent_font">{ data.k }</span>: { data.v} </div>
    );
}