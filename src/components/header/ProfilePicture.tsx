
export const ProfilePicture = (props: {
    src: string
    alt: string
}) => {
    return (
        <img src={props.src} alt={props.alt ? props.alt : ""}/>
    );
}
