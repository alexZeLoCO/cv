export const GlowingCards = (
    props: {
        cardsContent: JSX.Element[]
    }
) => {
    const handler = (evt: any) => {
        const { currentTarget: target } = evt;

        const rect = target.getBoundingClientRect(),
            x = evt.clientX - rect.left,
            y = evt.clientY - rect.top;

        target.style.setProperty("--mouse-x", `${x}px`);
        target.style.setProperty("--mouse-y", `${y}px`);
    }
    return (
        <div className="cards">
            { props.cardsContent.map(prop => <div onMouseMove={(ev) => handler(ev)} className="card">{prop}</div>) }
        </div>
    );
}