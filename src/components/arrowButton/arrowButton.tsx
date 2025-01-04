import "./arrowButton.css";
import {ReactComponent as LeftArrow} from "../../icons/arrows/left-arrow.svg";
import {ReactComponent as RightArrow} from "../../icons/arrows/right-arrow.svg";

interface ArrowData {
    direction: "left" | "right";
    onClick: any;
    className: string;

}

const ArrowButton = ({ direction, onClick, className }: ArrowData) => {




    return(
        <div className={`arrow-button ${className}`}onClick={onClick}>
            {direction === "left" && <LeftArrow className="arrow-svg" />}
            {direction === "right" && <RightArrow className="arrow-svg" />}    
        </div>


    );
}

export default ArrowButton;