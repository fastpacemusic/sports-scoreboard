import "./leagueImg.css";

interface images {
    championsLeague: any,
    europaLeague: any,
    relegation: any
    
}

const LeagueImg = ({tournament}: any) => {

    const leaugeImages = {
        championsLeauge: <td className="championsLeauge"></td>,
        europaLeauge: <td className="europaLeauge"></td>,
        relegation: <td className="relegation"></td>,
        premierLeague: <td className="premierLeague"></td>
    }

    const choosingImg = (item: string) => {
        switch (item) {
            case "Champions League":
                return leaugeImages.championsLeauge;

            case "UEFA Europa League":
                return leaugeImages.europaLeauge;
            case "Relegation":
                return leaugeImages.relegation;
            case null:
                return leaugeImages.premierLeague;

            default:
               return <div className="error">ERROR</div>;
        }
    }

    return (
        <div className="leaugeImage">{choosingImg(tournament)}</div>
    );

}

export default LeagueImg;