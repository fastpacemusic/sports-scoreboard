import "./tooltip.css";

interface Tooltip {
    direction?: 'top' | 'left' | 'down' | 'right',
    content: any,
    color: string,
    backgroundColor: string,

}

const Tooltip = ({direction, content, color, backgroundColor}: Tooltip) => {

    return (
        <div className="tooltip-container" style={{backgroundColor: `${backgroundColor}`, color: `${color}`}}>
            <span className="tooltip-text">{content}</span>
        </div>
    );
}


export default Tooltip;