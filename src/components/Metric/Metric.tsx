import style from './metric.module.css'
import metricImage from '../../assets/images/metric-image.png'

const Metric = () => {
    return (
        <div className={style.metricBackground}>
            <div className={'container'}>
                <div className={style.wrapper}>
                    <div className={style.text}>
                        <h1 className={style.title}>
                            Grow Your Business 10x with Metric
                        </h1>
                        <div className={style.subtitle}>
                            The Metric Dashboard brings all of your business insights under
                            one roof. Revenue metrics, social, integrations - everything.
                        </div>
                        <div className={style.buttons}>
                            <button className={`${style.signBtn} ${style.button}`}>
                                Sign Up
                            </button>
                            <button className={style.button}>
                                Learn More
                            </button>


                        </div>
                    </div>


                    <div className={style.img}>
                        <img src={metricImage}/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Metric