import "./row.css";
import LeagueImg from "../../leagueImages/leagueImg";
import Form from "../form/form";
import { useNavigate } from "react-router-dom";

interface RowData {
    pos: number,
    logo: string,
    team: string,
    played: number,
    pts: number,
    gd: number,
    tournament: string,
    form: string,
    leagueNumber: number
}

const Row = ({pos, logo, team, played, pts, gd, tournament, form, leagueNumber}: RowData) => {

    const navigate = useNavigate();

    const handleRowClick = () => {
        navigate('./team-info', {state: { pos, logo, team, played, pts, gd, tournament, form, leagueNumber } });
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