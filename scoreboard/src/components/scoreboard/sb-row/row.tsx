import { log } from "console";
import "./row.css";

interface RowData {
    pos: number,
    logo: any,
    team: string,
    played: number,
    pts: number,
    gd: number
}

const Row = ({pos, logo, team, played, pts, gd}: RowData) => {

    

    return (
        <div className="rows">
            <div className="row-pos">{pos}</div>
            <img src={logo} className="row-logo" alt="Logo" />
            <div className="row-team">{team}</div>
            <div className="row-played">{played}</div>
            <div className="row-pts">{pts}</div>
            <div className="row-gd">{gd}</div>
        </div>
    );
}

export default Row;