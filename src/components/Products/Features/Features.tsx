import style from './features.module.css'
import Feature from "./Feature/Feature";
import logo1 from '../../../assets/images/features/logoF1.png'
import logo2 from '../../../assets/images/features/logoF2.png'
import logo3 from '../../../assets/images/features/logoF3.png'
import logo4 from '../../../assets/images/features/logoF4.png'

const Features = () => {
    return (
        <div className={style.features}>

                <Feature logo={logo1}
                         title={'Dashboard'}
                         text={'Lorem ipsum dolor sit amet' +
                             ', consectetur adipiscing elit.' +
                             ' Suspendisse varius enim in eros ' +
                             'elementum tristique.'}/>
                <Feature logo={logo2}
                         title={'Custom Rules'}
                         text={'Lorem ipsum dolor sit amet,' +
                             ' consectetur adipiscing elit. ' +
                             'Suspendisse varius enim in eros ' +
                             'elementum tristique.'}/>
                <Feature logo={logo3}
                         title={'Presets'}
                         text={'Lorem ipsum dolor sit amet,' +
                             ' consectetur adipiscing elit. Suspendisse ' +
                             'varius enim in eros elementum tristique.'}/>
                <Feature logo={logo4}
                         title={'Metrics'}
                         text={'Lorem ipsum dolor sit amet, consectetur' +
                             ' adipiscing elit. Suspendisse varius enim ' +
                             'in eros elementum tristique.'}/>

        </div>

    )
}
export default Features