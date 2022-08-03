import styles from "./navBar.module.css"
import { NavLink } from "react-router-dom"
import convert from './icons/convert.svg'
import rates from './icons/rates.svg'

const NavBar = () => {
    return (
    <div className={styles.navBar}>
        <h2>Currencies App</h2>
        <NavLink 
            exact to="/"
            className={styles.link}
            activeClassName={styles.active}
        >
            <img src={convert} alt=""></img>
            <div>Converter</div>
        </NavLink>
        <NavLink 
            to="/rates"
            className={styles.link}
            activeClassName={styles.active}
        >
            <img src={rates} alt=""></img>
            <div>Exchange Rates</div>
        </NavLink>        
    </div>
    )
}

export default NavBar