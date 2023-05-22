import "../App.scss";

export type InfoEntryData = {
  k: string;
  v: JSX.Element;
};

export const Header = (props: {
  pfp: string;
  name: string;
  info: InfoEntryData[];
}) => {
  return (
    <table>
      <tr>
        <td>
          {props.pfp ? (
            <ProfilePicture src={props.pfp} alt={props.name} />
          ) : (
            <div></div>
          )}
        </td>{" "}
        <td className="text-center">
          <h1 className="accent_font">{props.name}</h1>
        </td>{" "}
        <td className="right">
          <MyInfo entries={props.info} />
        </td>
      </tr>
    </table>
  );
};

const MyInfo = (props: { entries: InfoEntryData[] }) => {
  return (
    <div>
      <ul className="list_none">
        <li>
          {props.entries.map((entry) => (
            <MyInfoEntry k={entry.k} v={entry.v} />
          ))}
        </li>
      </ul>
    </div>
  );
};

const MyInfoEntry = (data: InfoEntryData) => {
  return (
    <div>
      {" "}
      <span className="accent_font">{data.k}</span>: {data.v}{" "}
    </div>
  );
};

const ProfilePicture = (props: { src: string; alt: string }) => {
  return <img src={props.src} alt={props.alt ? props.alt : ""} />;
};
