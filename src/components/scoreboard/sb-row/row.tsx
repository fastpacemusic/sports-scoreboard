import { log } from "console";
import "./row.css";
import LeagueImg from "../../leagueImages/leagueImg";
import Form from "../form/form";
import TeamInfo from "../../../pages/teamInfo/teamInfo";
import { useNavigate } from "react-router-dom";

interface RowData {
    pos: number,
    logo: any,
    team: string,
    played: number,
    pts: number,
    gd: number,
    tournament: any,
    form: string,
    leagueNum: () => void;
}

const Row = ({pos, logo, team, played, pts, gd, tournament, form, leagueNum}: RowData) => {

    const navigate = useNavigate();

    const handleRowClick = () => {
        navigate('./team-info', {state: { pos, logo, team, played, pts, gd, tournament, form, leagueNum } });
    }


    return (
        <tr className="rows" onClick={handleRowClick}>
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