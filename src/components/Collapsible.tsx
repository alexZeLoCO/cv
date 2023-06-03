import { useState } from "react";

export const Collapsible = (
    props: {
        title: string,
        children: JSX.Element[]
    }
) => {
    const [open, setOpen] = useState(true);
    const toggle = () => {
        setOpen(!open);
    };
    return (
        <div className="collapsible">
            <button className="collapsible_button" onClick={toggle}>{props.title} {open ? "-" : "+"}</button>
            {open && (
                props.children.map(child => child)
            )}
        </div>
    );
};
