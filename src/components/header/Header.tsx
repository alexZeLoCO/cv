import { MyInfo } from "./MyInfo";
import { ProfilePicture } from './ProfilePicture';
import "../../App.scss";

export const Header = () => {
    return (
        <table>
            <tr>
                <td>
                    <ProfilePicture src="" alt="Rodríguez López, Alejandro"/>
                </td> <td className="text-center">
                    <h1 className="accent_font"> Rodríguez López, Alejandro </h1>
                </td> <td className="right">
                    <MyInfo entries=
                        {[
                            {
                                k: "Born in",
                                v: "2002"
                            }, {
                                k: "Tlf.",
                                v: "+34 660 51 01 99"
                            }, {
                                k: "email",
                                v: "alejandro.rod.lop@gmail.com"
                            }, {
                                k: "Location.",
                                v: "33204, Gijón, Asturias, Spain"
                            }, {
                                k: "Car License",
                                v: "B"
                            },
                        ]}
                    />
                </td>
            </tr>
        </table>
    );
}