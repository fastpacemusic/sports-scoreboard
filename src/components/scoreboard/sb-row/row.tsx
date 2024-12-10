import { log } from "console";
import "./row.css";
import LeagueImg from "../../leagueImages/leagueImg";
import Form from "../form/form";

interface RowData {
    pos: number,
    logo: any,
    team: string,
    played: number,
    pts: number,
    gd: number,
    tournament: any,
    form: string,
}

const Row = ({pos, logo, team, played, pts, gd, tournament, form}: RowData) => {

    return (
        <tr className="rows" onClick={() => {console.log(team)}}>
            <td>{<LeagueImg tournament={tournament} />}</td>
            <td className="row-pos">{pos}</td>
            <td className="row-logo-wrap">
                <img src={logo} className="row-logo" alt="Logo" /> 
            </td>
            <td className="row-team">{team}</td>
            <td className="row-played">{played}</td>
            <td className="row-gd">{gd}</td>
            <td className="row-pts">{pts}</td>
            <td className="row-form"><Form form={form} /></td>

        </tr>
    );
}

export default Row;