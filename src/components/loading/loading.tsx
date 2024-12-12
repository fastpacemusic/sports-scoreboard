import "./loading.css";
import {ReactComponent as Loader} from "../../icons/loading/loading.svg";

interface loaderData {
    size: number;
    

}

const Loading = ({size}: loaderData) => {

    return(
        <div className="loader-wrap">
            <Loader width={`${size}px`} height={`${size}px`} className="loader" />
        </div>
    );

}

export default Loading;