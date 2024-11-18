import "./leagueImg.css";

const LeagueImg = ({tournament}: any) => {

    const leaugeImages: {[key: string]: string} = {
        "Champions League": "championsLeauge",
        "UEFA Europa League": "europaLeauge",
        "Relegation": "relegation",
    }

    const choosingImg = (item: string) => {
        return <div className={leaugeImages[item as string] || "premierLeague"}></div>;
    }

    return (
        <div className="leaugeImage">{choosingImg(tournament)}</div>
    );

}

export default LeagueImg;