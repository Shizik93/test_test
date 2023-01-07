import style from './products.module.css'
import WebApp from "./WebApp/WebApp";
import MobileApp from "./MobileApp/MobileApp";
import Features from "./Features/Features";

const Products = () => {
    return (
        <div className={'container'}>
            <div className={style.products}>
                <h1 className={style.title}>Sync Across All Devices</h1>
                <h2 className={style.subtitle}>Everything you need to make your business grow</h2>
                <WebApp/>
                <MobileApp/>
                <Features/>
            </div>
        </div>
    )
}
export default Products