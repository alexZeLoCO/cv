import { MyInfo } from "./MyInfo";
import { ProfilePicture } from './ProfilePicture';
import "../../App.scss";

export const Header = (
    props: {
        pfp: string,
        name: string,
        info: {
            k: string,
            v: string
        }[]
    }
) => {
    return (
        <table>
            <tr>
                <td>
                    <ProfilePicture src={props.pfp} alt={props.name}/>
                </td> <td className="text-center">
                    <h1 className="accent_font">{props.name}</h1>
                </td> <td className="right">
                    <MyInfo entries= {props.info} />
                </td>
            </tr>
        </table>
    );
}