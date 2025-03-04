import profile from "../../../public/profile.png"
import "./homepage.css"


export default function Homepage() {
    return (
        <div className="homepage">
            <div className="profileContainer">
            <div className="tagline">
               <div className="heading">hi there 🚀, <div className="subtitleBold">i am Tochi Abara</div></div>
            <div className="subtitle"> web developer | mobile developer | designer </div>
            <div className="subtitleLast">can we connect?</div>
            </div>
            <img className="profile" src={profile.src} alt="profile" />

            </div>
        </div>
    );
}
