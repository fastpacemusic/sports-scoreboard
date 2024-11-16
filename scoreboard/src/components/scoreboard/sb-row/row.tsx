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
        <tr className="rows">
            {<LeagueImg tournament={tournament} />}
            <td className="row-pos">{pos}</td>
            <img src={logo} className="row-logo" alt="Logo" />
            <td className="row-team">{team}</td>
            <td className="row-played">{played}</td>
            <td className="row-pts">{pts}</td>
            <td className="row-gd">{gd}</td>
        </tr>
    );
}

export default Row;