import style from './navbar.module.css'

const Navbar = () => {
    return (
        <nav className={style.navbar}>
            <div className={style.wrapper}>
                <a className={style.link} href={''}>Features</a></div>
            <div className={style.wrapper}>
                <a className={style.link} href={''}>Pricing</a></div>
            <div className={style.wrapper}>
                <a className={style.link} href={''}>Customers</a></div>
            <div className={style.wrapper}>
                <a className={style.link} href={''}>Sign Up</a></div>


        </nav>
    )
}
export default Navbar