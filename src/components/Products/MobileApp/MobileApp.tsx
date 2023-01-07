import style from './mobileApp.module.css'
import mobileAppImg from "../../../assets/images/mobileApp.png";
import logo from "../../../assets/images/mobileAppLogo.png";

const MobileApp = () => {
    return (
        <div className={style.wrapper}>
            <div className={style.content}>
                <img className={style.logo} src={logo}/>
                <h1 className={style.title}>
                    Mobile App
                </h1>
                <div className={style.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                    tristique. Consectetur adipiscing elit.
                </div>
            </div>
            <img src={mobileAppImg}/>
        </div>
    )
}
export default MobileApp