import "./leagueImg.css";

interface leaugeImgData {
    tournament: string
}

const LeagueImg = ({tournament}: leaugeImgData) => {

    const leaugeImages: {[key: string]: string} = {
        "Champions League": "championsLeauge",
        "UEFA Europa League": "europaLeauge",
        "Relegation": "relegation",
    }

    const choosingImg = (item: string) => {
        return <div className={leaugeImages[item] || "premierLeague"}></div>;
    }

    return (
        <div className="leaugeImage">{choosingImg(tournament)}</div>
    );

}

export default LeagueImg;