import { log } from "console";
import "./row.css";
import LeagueImg from "../../leagueImages/leagueImg";

interface RowData {
    pos: number,
    logo: any,
    team: string,
    played: number,
    pts: number,
    gd: number,
    tournament: any
}

const Row = ({pos, logo, team, played, pts, gd, tournament}: RowData) => {

    

    return (
        <div className="rows">
            <div className="row-pos">{pos}</div>
            <img src={logo} className="row-logo" alt="Logo" />
            <div className="row-team">{team}</div>
            <div className="row-played">{played}</div>
            <div className="row-pts">{pts}</div>
            <div className="row-gd">{gd}</div>
            {<LeagueImg tournament={tournament} />}
        </div>
    );
}

export default Row;