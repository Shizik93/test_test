import style from './header.module.css'
import Navbar from "./Navbar/Navbar";

const Header = () => {
    return (
        <div className={'container'}>
            <header className={style.header}>
                <div className={style.title}>Metric</div>
                <Navbar/>
            </header>
        </div>
    )
}

export default Header