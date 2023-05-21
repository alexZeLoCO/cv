import { MyInfo } from "./MyInfo";
import { ProfilePicture } from './ProfilePicture';

export const Header = () => {
    return (
        <table>
            <tr>
                <td>
                    <ProfilePicture src="" alt="Rodríguez López, Alejandro"/>
                </td> <td>
                    <MyInfo entries=
                        {[
                            {
                                k: "Name",
                                v: "Rodríguez López, Alejandro"
                            }
                        ]}
                    />
                </td>
            </tr>
        </table>
    );
}