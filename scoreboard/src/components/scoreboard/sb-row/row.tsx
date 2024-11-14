import "./row.css";

interface RowData {
    pos: number,
    team: string,
    played: number,
    pts: number,
    gd: number
}

const Row = ({pos, team, played, pts, gd}: RowData) => {

    

    return (
        <div className="rows">
            <div className="row-pos num">{pos}</div>
            <div className="row-team">{team}</div>
            <div className="row-played num">{played}</div>
            <div className="row-pts num">{pts}</div>
            <div className="row-gd num">{gd}</div>
        </div>
    );
}

export default Row;