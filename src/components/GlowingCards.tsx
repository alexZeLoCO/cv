export const GlowingCards = (
    props: {
        cardsContent:{
        content: JSX.Element,
        link?: string
        }[]
    }
) => {
    const handler = (evt: any) => {
        evt.stopPropagation();
        const { currentTarget: target } = evt;

        const rect = target.getBoundingClientRect(),
            x = evt.clientX - rect.left,
            y = evt.clientY - rect.top;

        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
    }
    return (
        <div className="cards">
            {  props.cardsContent.map(prop => <a href={prop.link}><div 
                onMouseMove={(ev) => handler(ev)}
                className="card"
                >{prop.content}</div></a>) }
        </div>
    );
}