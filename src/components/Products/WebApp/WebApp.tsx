import style from './webApp.module.css'
import webAppImg from '../../../assets/images/webApp.png'
import logo from '../../../assets/images/webAppLogo.png'

const WebApp = () => {
    return (
        <div className={style.wrapper}>
            <img src={webAppImg}/>
            <div className={style.content}>
                <img className={style.logo} src={logo}/>
                <h1 className={style.title}>
                    Web Application
                </h1>
                <div className={style.text}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum
                    tristique. Consectetur adipiscing elit.
                </div>
            </div>
        </div>
    )
}
export default WebApp