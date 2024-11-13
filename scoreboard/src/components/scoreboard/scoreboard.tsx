import "./scoreboard.css";
import Row from "./sb-row/row";

const Scoreboard = () => {

    return(
        <div className="scoreboard-wrap">
            <div className="sb-positions">
                <div className="sb-pos num">#</div>
                <div className="sb-team">team</div>
                <div className="sb-played num">PL</div>
                <div className="sb-pts num">PTS</div>
                <div className="sb-gd num">GD</div>
            </div>
            <Row />
            <Row />
            <Row />
        </div>
    );
}

export default Scoreboard;