import style from './feature.module.css'

const Feature = ({logo, title, text}: FeaturePropsType) => {
    return (
        <div className={style.feature}>
            <img className={style.logo} src={logo}/>
            <h1 className={style.title}>{title}</h1>
            <div className={style.text}>{text}</div>
        </div>
    )
}
export default Feature

type FeaturePropsType = {
    logo: string
    title: string
    text: string
}