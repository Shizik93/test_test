import style from './press.module.css'
import logo1 from '../../assets/images/logo1.png'
import logo2 from '../../assets/images/logo2.png'
import logo3 from '../../assets/images/logo3.png'
import logo4 from '../../assets/images/logo4.png'
import logo5 from '../../assets/images/logo5.png'

const Press = () => {
    return (
        <div className={style.press}>
            <div className={`container ${style.wrapper}`}>
                <h6 className={style.title}>
                    IN THE PRESS
                </h6>
                <div className={style.pressLogo}>
                    <img src={logo1} alt=""/>
                    <img src={logo2} alt=""/>
                    <img src={logo3} alt=""/>
                    <img src={logo4} alt=""/>
                    <img src={logo5} alt=""/>
                </div>
            </div>
        </div>
    )
}
export default Press